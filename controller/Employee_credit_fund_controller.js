
const Employee_credit_fund_model=require('../module/Employee_credit_fund_model');
const db=require('../db_connection');
const { Router } = require('express');
const { check } = require('./Bank_status_controller');

exports.Employee_Credit_fund_controller=(req,res)=>{

    console.log(req.body);
    let Account_Number=req.body.Account_Number;
    let Amount=req.body.Amount;
    let card=req.body.card;
    let transaction_type='credit';
    let Employee_id=req.body.ID;
    
    
    let date=new Date();

    let year=date.getFullYear();
    let Month=date.getMonth();
    let day=date.getDay();

    // let Transtion_date=year+"-"+Month+"-"+day;
    

    let Transtion_date=`${year}-${Month}-${day}`;
    
    var Tax=0;
    var percentage=0;
    var check_Tax;
    if(Amount>5000 && Amount<=12500){

         Tax=Amount*2/100;
         percentage=2;
         Amount=Amount-Tax;

         check_Tax=true;
        
    }
    else if(Amount>12500 && Amount<=100000){

        Tax=Amount*10/100;
        percentage=10;
        Amount=Amount-Tax;

        check_Tax=true;
    }
    else if(Amount>100000){

        Tax=Amount*20/100;
        percentage=20;
        Amount=Amount-Tax;

        check_Tax=true;
    }
    else{

        check_Tax=false ;
    }

    db.beginTransaction(err=>{


        Employee_credit_fund_model.Employee_Credit_fund_model_check_Account(Account_Number,card,(err,result)=>{


        if(err){

            return db.rollback(()=>{


                let message="Error"
                res.json({success:false,message});
            })
        }
        else {

            if(result.length==0){

                

                let message="Account not Find";
                res.json({success:false,message});
            }
            else{

                let id=result[0].account_id;
   
                if(result[0]. Balance<Amount){


                    let message="not Enough Amount";
                    return res.json({success:false,message});
                }else if(result[0].status !='active'){

                    let message="Your is not Active";

                    return res.json({success:false,message});
                }
                else{

                
                    Employee_credit_fund_model.Employee_credit_fund_to_Account(Amount,Account_Number,(err,result)=>{

                        if(err){
                            
                         
                            return db.rollback(()=>{

                                res.json({success:false});
                            })

                        }
                        else{

                

                            if(result.affectedRows<=0){

                                

                                
                                return db.rollback(()=>{

                                    res.json({success:false})
                                })
                            }
                            else{


                                Employee_credit_fund_model.Employee_Credit_fund_model_Transction(id,Employee_id,Amount,transaction_type,Transtion_date,(err,result)=>{


                                    if(err){

                                        console.log("err in three ,",err);


                                        return db.rollback(()=>{

                                            res.json({success:false});
                                        })
                                    }
                                    else{


                                        if(result.affectedRows<=0){

                                            db.rollback(()=>{


                                                res.json({success:false});
                                            })
                                        }
                                        else{

                                            if(check_Tax==false){


                                                console.log("in True");
                                                db.commit(()=>{


                                                res.json({success:true});
                                              })


                                            }
                                            else{

                                                console.log("IN False")
                                                Employee_credit_fund_model.Add_Tax(Tax,id,percentage,Transtion_date,(err,result)=>{


                                                    if(err){


                                                        console.log("Err : ",err);
                                                        return db.rollback(()=>{


                                                            res.json({success:false})
                                                        })
                                                    }
                                                    else{

                                                        if(result.affectedRows<=0){
                                                            console.log("RRRO:",err);
                                                            res.json({success:false});
                                                        }
                                                        else{


                                                            console.log("reasult:",result);
                                                            db.commit(()=>{

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
        }
       

      


      


       
    })
    })

    

}