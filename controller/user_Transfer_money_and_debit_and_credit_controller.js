
const db=require('../db_connection');
let user_Transfer_money=require('../module/user_Transfer_money_and_debit_and_credit_model');
exports.Transfer_money=(req,res)=>{


    // console.log(req.body);

    let From_Account=req.body.From_Account;
    let To_account=req.body.To_account;
    let  Amount=req.body.Amount;
    let card=req.body.card;

    var Tax=0;
    var percentage=0;
    var check_Tax;

    let Transaction_Date_and_Time=new Date();

    Transaction_Date_and_Time=`${Transaction_Date_and_Time.getFullYear()}-${Transaction_Date_and_Time.getMonth()}-${Transaction_Date_and_Time.getDay()}-${Transaction_Date_and_Time.getHours()}-${Transaction_Date_and_Time.getMinutes()}-${Transaction_Date_and_Time.getSeconds()}`;


    if(Amount>5000 && Amount<=12500){

        check_Tax=true;
        Tax=Amount*2/100;
        percentage=2;
        Amount=Amount-Tax;

    }else if(Amount>13500 && Amount<=100000){

        check_Tax=true;
        Tax=Amount*10/100;
        percentage=10;
        Amount=Amount-Tax;
    }
    else if(Amount>100000){

        check_Tax=true;
        Tax=Amount*20/100;
        percentage=20;
        Amount=Amount-Tax;

    }
    else{

        check_Tax=false;
    }



    db.beginTransaction(err=>{


        var message;

        user_Transfer_money.check_Account(From_Account,To_account,(err,result)=>{

            if(err){

                console.log("cheking Account ",err)
                message="Account Not Find";
               return res.json({success:false,message})
        

            }
            else{
                console.log(result);
                if(result.length==0 || result.length==1){


                    console.log("not Find",err);
                    message="Account Not Find";
                   return res.json({success:false,message});
                }else{


                    let Index;
                    for(let I=0;I<result.length;I++){


                        if(result[I].Account_Number==From_Account){

                            Index=I;

                        }
                    }

                    let check_from_Account=0;
                    let condtion=false;
                    let message;
                    let Account_id=result[Index].Account_id;


                    if(result[Index].Account_Number===From_Account){

                        if(result[Index].Balance<Amount){

                            condtion=false;

                            message="Amount is Not Enough";
                            res.json({success:false,message});
                        }
                        else if(result[Index].status=="block" || result[Index].status==="expire"){

                            message="Your Account Not Active";
                            condtion=false;
                            res.json({success:false,message});

                        }
                        else if(result[Index].card_type !=card){

                            message="Your card Invalid";
                            condtion=false;
                            res.json({success:false,message});

                        }
                        else if(result[Index].card_status !='active'){

                            message="Your Card is not Active";
                            condtion=false;

                            res.json({success:false,message})
                        }
                        else{

                            condtion=true;
                        }
                    }
                    else{

                        condtion=false;
                    }


                    if(condtion=true){


                        user_Transfer_money.widthraw_from_account(From_Account,Amount,(err,result)=>{

                            if(err){

                                console.log("in widthraw err",err);
                                db.rollback(()=>{

                                    res.json({success:false})
                                })

                            }
                            else{

                                

                                if(result.affectedRows<=0){
                                    console.log("widthraw not efeedted",err);
                                    return db.rollback(()=>{

                                        res.json({success:false})
                                    })
                                }
                                else{


                                    user_Transfer_money.deposite_to_Account(To_account,Amount,(err,result)=>{

                                        if(err){

                                            return db.rollback(()=>{

                                                console.log("deposte",err)
                                                res.json({success:false})
                                            })
                                        }
                                        else{

                                            if(result.affectedRows<=0){
                                                console.log("zero ro ",err);
                                                return db.rollback(()=>{

                                                    res.json({success:false})
                                                })
                                            }
                                            else{


                                                user_Transfer_money.set_Transtion(From_Account,To_account,Amount,Transaction_Date_and_Time,(err,result)=>{

                                                    if(err){

                                                        return db.rollback(()=>{
                                                            console.log("in Transcationerr",err);
                                                            res.json({success:false})
                                                        })
                                                    }
                                                    else{

                                                        if(result.affectedRows<=0){

                                                            return res.json({success})
                                                        }
                                                        else{

                                                           if(check_Tax==false){

                                                             return db.commit(()=>{

                                                                res.json({success:true});
                                                             })

                                                           }
                                                           else if(check_Tax==true){

                                                            user_Transfer_money.Transfer_Tax(Account_id,Tax,Transaction_Date_and_Time,percentage,(err,result)=>{

                                                                if(err){

                                                                    return db.rollback(()=>{

                                                                        res.json({success:false})
                                                                    })
                                                                }
                                                                else{

                                                                    if(result.affectedRows<=0){

                                                                        return db.rollback(()=>{

                                                                            res.json({success:false})
                                                                        })
                                                                    }
                                                                    else{

                                                                        return db.commit(()=>{

                                                                            res.json({success:true});
                                                                        })
                                                                    }
                                                                }
                                                            })

                                                           }  

                                                        }
                                                    }
                                                })
                                            }
                                        }

                                    })
                                }
                            }
                        })




                    }
                    else{

                        return res.json({success:false});

                    }
                }

            }

        })
    })


}