
const db=require('../db_connection');
const Employee_Debit_fund_model=require('../module/Employee_Debit_fund_model');
exports.Employee_Debit_FUNDS_controller=(req,res)=>{


    console.log(req.body);
    let Account_Number=req.body.Account_Number;
    let card=req.body.card;
    let Amount=req.body.Amount;
    let Employee_id=req.body.ID;
    let Transaction_type="Debit";

    let date=new Date();

    let year=date.getFullYear();
    let Month=date.getMonth();
    let day=date.getDay();

    let Transtion_date=`${year}-${Month}-${day}`;
   

    
     var Tax;
     var percentage;
     var check_Tax;


     if(Amount>5000 & Amount<=12500){

         Tax=Amount*2/100;
         percentage=2;
         check_Tax=false;
         Amount=Amount-Tax;

     }else if(Amount>12500 & Amount<=100000){


        Tax=Amount*10/100;
         percentage=10;
         check_Tax=false;
         Amount=Amount-Tax;


     }else if(Amount>100000){

        Tax=Amount*20/100;
         percentage=20;
         check_Tax=false;
         Amount=Amount-Tax;
     }
     else{

        check_Tax=true;
     }
     
 
  

    db.beginTransaction(err=>{


        Employee_Debit_fund_model.Employee_check_Account_card_model(Account_Number,card,(err,result)=>{


            if(err){

                console.log("first Erro : ",err);

                return res.json({sucess:false});
            }
            else{


                console.log("result in one : ",result);
                if(result.length==0){

                    let message="Account Not Find";
                    return res.json({success:false,message});
                }
                else{

                   
                    if(result[0].status !="active"){

                        let message="Your not Active";
                        return res.json({success:false,message});
                    }
                    else{

                        let id=result[0].account_id;

                        Employee_Debit_fund_model.Employee_Debit_Amount_To_Account_model(Account_Number,Amount,(err,result)=>{


                            if(err){

                                console.log("err two : ",err);

                                return db.rollback(()=>{


                                    res.json({success:false});
                                })
                                
                            }
                            else{

                                console.log("result two :",result);
                                
                                if(result.affectedRows<=0){

                                    
                                    return db.rollback(()=>{


                                        res.json({success:false});
                                    })
                                }
                                else{

                                    Employee_Debit_fund_model.Employee_Debit_Amount_To_Transaction_model(id,Employee_id,Amount,Transaction_type,Transtion_date,(err,result)=>{


                                        if(err){

                                            console.log("Erro three :",err);
                                            
                                            return db.rollback(()=>{


                                                res.json({success:false});
                                            })
                                        }
                                        else{

                                            console.log("result three : ",result);


                                             if(check_Tax==true){

                                                return db.commit(()=>{

                                                    res.json({success:true})
                                                })
                                             }
                                             else{


                                                Employee_Debit_fund_model.add_Tax(id,Tax,percentage,Transtion_date,(err,result)=>{

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

                
            }
          
            
          
                            

         
        })
    })

}