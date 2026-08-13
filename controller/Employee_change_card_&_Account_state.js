
let change_Account_card_model=require('../module/Employee_chanage_card_&_Account_state_model');
let db=require('../db_connection');

exports.change_Account_state=(req,res)=>{


    let Account_Number=req.body.Account_Number;
    let chanage_type=req.body.chanage_type;

    console.log("in Router s s s s s s s s s s s s s s ");
    
    
    db.beginTransaction(err=>{


        change_Account_card_model.check_Account(Account_Number,(err,result)=>{


            if(err){

               return db.rollback(()=>{

                console.log("errr in one ",err);
                 res.json({success:false});
               })
            }
            else {

                if(result.length==0){

                    let message="Account not Find";
                    return db.rollback(()=>{

                        console.log("err in lenght : ",result);
                        res.json({success:false,message});
                    })
                }
                else{


                    console.log("result :: ",result[0]);

                    let user=result[0];

                    if(user.status==chanage_type){


                        let message="Account State and Your state Same";
                        return res.json({success:false,message});
                    }
                    else{

                         
                        console.log("reult dddd :",result);
                        change_Account_card_model.change_Account_state(Account_Number,chanage_type,(err,result)=>{


                            if(err){


                                db.rollback(()=>{


                                    res.json({success:false});
                                })
                                
                            }
                            else{


                                if(result.affectedRows<0){


                                    db.rollback(()=>{

                                        res.json({success:false});
                                    })
                                }
                                else{

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
    })
}




exports.change_card_status=(req,res)=>{


    // console.log(req.body);
    let card_Number=req.body.card_Number;
    let card_state=req.body.card_state;


    db.beginTransaction(err=>{



        change_Account_card_model.check_card_Number(card_Number,(err,result)=>{


            if(err){

                console.log("err: ",err);

                res.json({success:false});

            }
            else{

                console.log(result);

                if(result.length==0){

                    let message="Card Not Find";
                    res.json({success:false,message});
                }
                else{


                    if(result[0].card_status===card_state){

                        // console.log("same status :: ",result[0].status," status :: ",card_state);

                        let message="Your Card Alread"+" "+result[0].card_status;
                        res.json({success:false,message});
                    }
                    else{

                        change_Account_card_model.change_card_status(card_Number,card_state,(err,result)=>{


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
    })

}