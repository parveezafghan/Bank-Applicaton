
let pay_check_model=require('../module/pay_check_model');
let db=require('../db_connection');

exports.pay_check=(req,res)=>{


    // console.log(req.body);

    let check_Number=req.body.check_Number;
    let Account_Number=req.body.Account_Number;
    let Amount=req.body.Amount;
    let check_pay_To=req.body.check_pay_To;
    let status=req.body.status;
    console.log(check_Number);
    console.log(Account_Number);
    console.log(Amount);
    console.log(check_pay_To);



    let date=new Date();

    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDay();

    // let Hour=date.getHours();
    // let Manute=date.getMinutes();
    // let seconds=date.getSeconds();


    let Transaction_Time=`${year}-${month}-${day}`;
 
    
    var Tax=0;
    var percentage=0;
    var condition;

    if(status=="cleared"){

        if(Amount>5000 && Amount<=12500){

            Tax=Amount*2/100;
            percentage=2;
            condition=true;
        }
        else if(Amount>12500 && Amount<=100000){

            Tax=Amount*10/100;
            percentage=10;
            condition=true;
        }
        else if(Amount>100000){


            Tax=Amount*20/100;
            percentage=20;
            condition=true;
        }
        else{

            condition=false;
        }

    }
    

    db.beginTransaction(err=>{


         pay_check_model.pay_check_model(check_Number,Account_Number,Amount,check_pay_To,(err,result)=>{


        if(err){

            // console.log("err: ",err);

            return db.rollback(()=>{


                res.json({success:false});
            })
        }
        else{


            // console.log("result: ",result);

            if(result.length==0){

              return  db.rollback(()=>{

                    res.json({success:false});
                })
                
            }

            else{

                let check=result[0];
                let check_id=result[0].Account_Id;
                console.log("result Account:::",result);
                if(status=="cleard"  || status=="cleared" || status=="Cleard"){


                    console.log("show satatus :: ",result);

                    if(check.status==='cleared'){

                        let cleared='cleared';
                        return db.rollback(()=>{

                            
                            res.json({success:false,cleared});
                        })
                    }
                    else{
                        console.log("ealrede clared cleard cleard");
                     pay_check_model.clear_check(Account_Number,Amount,(err,result)=>{


                        if(err){

                            // console.log("errr check clear ",err);

                            return db.rollback(()=>{


                                res.json({success:false});
                            })
                            
                        }
                        else{


                            console.log("result check clear : ",result);

                            if(result.affectedRows<=0){

                                return db.rollback(()=>{

                                    res.json({success:false});
                                })
                            }
                            else{

                                

                                pay_check_model.clear_check_status(check_Number,Account_Number,check_pay_To,(err,result)=>{

                                    if(err){

                                        console.log("check clearded sectino  eerrr:  ",err);
                                    }
                                    else{

                                        // console.log("check section result : ",result);


                                        console.log("condtion checkKing ",condition);
                                        if(condition==false){

                                            return db.commit(()=>{


                                                res.json({success:true})

                                            })
                                        }else{

                                            // if(result.affectedRows<=0){

                                            //     return db.rollback(()=>{

                                            //         res.json({success:false})
                                            //     })
                                            // }
                                          //  else{

                                                pay_check_model.add_Tax(check_id,Tax,percentage,Transaction_Time,(err,result)=>{


                                                    if(err){

                                                        console.log("err<:::",err);

                                                        return db.rollback(()=>{

                                                            let msessage="zero 0.1";
                                                            res.json({success:false,msessage})
                                                        })
                                                    }
                                                    else{


                                                        if(result.affectedRows<=0){
                                                            console.log("err<:::",err);
                                                            return db.rollback(()=>{

                                                                let msessage="zeror 1";
                                                                res.json({success:false,msessage})
                                                            })
                                                        }
                                                        else{


                                                            return db.commit(()=>{

                                                                res.json({success:true});
                                                            })
                                                        }
                                                    }
                                                })


                                            //}

                                        }
                                        // return db.commit(()=>{

                                        //     res.json({success:true});
                                        // })
                                    }
                                })
                            }
                        }


                      })
                    }

                }
                else if(status=="cancelled" || status=="Cancelled"){


                    if(check.status==='cleared'){


                        // console.log("Alread canced");

                        let already="already canceled";
                        res.json({success:false,already});
                    }
                    else{

                        pay_check_model.canceled_check(check_Number,Account_Number,check_pay_To,Amount,(err,result)=>{


                            if(err){

                              return   db.rollback(()=>{


                                    res.json({success:false});
                                })
                                
                                
                            }
                            else{

                                
                                console.log("canceld result :",result);

                                // pay_check_model.canceled_check_amount_add_back_To_Account(Account_Number,Amount,(err,result)=>{

                                //     if(err){

                                //         console.log("errr in back adding : ",err);
                                //     }
                                //     else{

                                //         console.log("result back add : ",result);
                                //     }
                                // })

                                let canceled="canceled check";
                                db.commit(()=>{


                                    res.json({canceled});
                                })
                            }

                        })
                    }

                    // pay_check_model.canceled_check(check_Number,Account_Number,check_pay_To,Amount,(err,result)=>{


                    //     if(err){

                    //         console.log("errr,")

                    //     }
                    //     else{


                    //     }
                    // })
                    
                }
                else{

                    console.log("Wronge sttus ");
                }


            }
        }

    });

    })

   

    
}