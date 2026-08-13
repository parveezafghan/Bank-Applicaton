
const Employee_Add_customer_model=require('../module/Employee_Add_customer_model');
const Employee_get_new_customer_controller=require('../module/Employee_get_new_customer_model');
const db=require('../db_connection');


exports.Employee_Add_customer_controller=(req,res)=>{

    console.log("in Employyee add");
    let {First_name,Last_Name,F_Name,Gender,Email,Number,Date,Account_Number,Account_Type,Amount,Address,City,District}=req.body;
    let password=req.body.password;
    let user_Name=First_name+Last_Name;
    let Branch=req.body.Branch_id;
    let Card=req.body.Card;
    let card_Number=req.body.card_Number;
    let issue_data=req.body.issue_data;
    let Expire_data=req.body.Expire_data;
    let pin_code=req.body.pin_code;
    let status="active";

    // let date=new Date();

    // let year=date.getFullYear();
    // let month=date.getMonth();
    // let day=date.getDay();


    
    console.log("pin::",pin_code);
    console.log(req.body);
    
    Amount=Amount-500;
    console.log(Amount);
    let Tax=500;


    console.log(req.body);

    
    db.beginTransaction(err=>{


        
    Employee_Add_customer_model.Create_Account_model(Branch,Account_Type,Amount,Account_Number,status,(err,result)=>{


        if(err){

            console.log("first result ::",err);

            return db.rollback(()=>{


                res.json({success:false,messae:"Error1"})
            })
        }
        else{


            Employee_Add_customer_model.get_Account_id(Account_Number,(err,result)=>{

                if(err){

                    console.log(err)
                    return db.rollback(()=>{

                        res.json({success:false,messae:"Error2"})
                    });
                }
                else{

                    if(result.length==0){

                        return db.rollback(()=>{

                            res.json({success:false,messae:"Error2"})
                        })
                    }
                    else{


                         let Account_data=result[result.length-1];
                         
                         let Account_id=Account_data.Account_Id;
                         console.log(result);
                         console.log("Accoutdata:",Account_data);
                         console.log("AccoutID:",Account_id);
                         Employee_Add_customer_model.Create_Bank_card_model(card_Number,Account_id,Card,issue_data,Expire_data,(err,result)=>{


                              if(err){

                    
                                      console.log("second err :: ",err);
                                     return db.rollback(()=>{

                                     res.json({success:false,messae:"Error2"})
                                    })

                               }
                               else{
                                console.log(result);
                                 Employee_Add_customer_model.Create_customer_model(Account_id,F_Name,Last_Name,F_Name,Email,Number,Date,City,District,Gender,(err,result)=>{


                                    if(err){
 
                                        console.log(err);
                                        return db.rollback(()=>{

                                            res.json({success:false})
                                        })
                                        
                                    }
                                    else{
                                        console.log(result);
                                        Employee_Add_customer_model.get_customer_id(Account_id,(err,result)=>{

                                            if(err){
                                                console.log(err)
                                                return db.rollback(()=>{

                                                    res.json({success:false})
                                                    
                                                })
                                            }
                                            else{


                                                if(result.length==0){
                                                    console.log("resutl",result)
                                                    return db.rollback(()=>{

                                                        res.json({success:false})
                                                    })
                                                }
                                                else{


                                                    console.log("Customer Rsult:",result);
                                                    let customer_data=result[result.length-1];
                                                    console.log("custoe da",customer_data);
                                                    let customer_id=customer_data.customer_id;
                                                    console.log("ID",customer_id);
                                                    

                                                    Employee_Add_customer_model.create_user_login(password,pin_code,user_Name,customer_id,(err,result)=>{

                                                        if(err){

                                                            console.log("err",err);
                                                            return db.rollback(()=>{

                                                                res.json({success:false})
                                                            })
                                                        }
                                                        else{
                                                            console.log("login:",result);
                                                            if(result.affectedRows<=0){


                                                                return db.rollback(()=>{

                                                                    console.log("err",err);
                                                                    res.json({success:false})
                                                                })
                                                            }
                                                            else{
                                                                console.log("start ofTAX");
                                                                Employee_Add_customer_model.Add_Tax(Account_id,Tax,Date,(err,result)=>{

                                                                    if(err){

                                                                        return db.rollback(()=>{
                                                                            console.log("er",err);
                                                                            res.json({success:false})
                                                                        })
                                                                    }
                                                                    else{
                                                                        console.log("Tax",result)
                                                                        if(result.affectedRows<=0){
                                                                            console.log("err",result)
                                                                           return db.rollback(()=>{

                                                                                res.json({success:false})
                                                                    
                                                                            })
                                                                        }
                                                                        else{

                                                                            console.log("Tax::",result);

                                                                           return db.commit(()=>{

                                                                                // res.json({success:true});
                                                                                 res.json({success:true,messae:"create Account",customer_id});
                                                                            })
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                        // console.log(result)
                                        // let customer_data=result[result.length-1];

                                        // let customer_id=customer_data.customer_id;
                                        // console.log("------------------");
                                        
                                        // console.log("custome Data:",customer_data);
                                        // console.log("custome ID",customer_id);

                                        // Employee_Add_customer_model.Add_Tax(Account_id,Amount,Date,(err,result)=>{

                                        //     if(err){

                                        //         return db.rollback(()=>{

                                        //             res.json({success:false})
                                        //         })
                                        //     }
                                        //     else{


                                        //         if(result.affectedRows<=0){

                                        //             res.json({success:false})
                                        //         }
                                        //         else{

                                        //             return db.commit(()=>{

                                        //                 res.json({success:true});
                                        //             })
                                        //         }
                                        //     }
                                        // })
                                         
                                    }
                                 })
                               }


                         })

                    }
                }
            })
         
            // console.log("id:id:",result.insertId);

            // console.log("First result :: ",result);
            // let Account_id=result.insertId ;

            // Employee_Add_customer_model.Create_Bank_card_model(card_Number,Account_id,Card,issue_data,Expire_data,(err,result)=>{


            //      console.log('in card controller : ',err," Result ",result);
            //     if(err){

                    
            //         console.log("second err :: ",err);
            //         return db.rollback(()=>{

            //            res.json({success:false,messae:"Error2"})
            //         })
            //     }
            //     else{

            //         console.log(result)
            //         Employee_Add_customer_model.Create_customer_model(Account_id,First_name,Last_Name,F_Name,Email,Number,Date,City,District,Gender,(err,result)=>{


            //             if(err){


            //                 console.log(err);

            //                 console.log("Third eerr::",err);
            //                  return db.rollback(()=>{

            //                     res.json({success:false,messae:"Error3"})
            //                  })
            //             }
            //             else{

            //                 console.log("Thired result :: ",result);

            //                 let customer_id=result.insertId;

            //                 Employee_Add_customer_model.create_user_login(password,pin_code,user_Name,customer_id,(err,result)=>{

            //                      if(err){

            //                      console.log("foth errr::",err)
            //                         return db.rollback(()=>{


            //                            res.json({success:false,messae:"Error4"})
            //                         })
            //                      }
            //                      else{


            //                         console.log("forth result:: ",result);

            //                          Employee_Add_customer_model.Add_Tax(Account_id,Tax,issue_data,(err,result)=>{

            //                             if(err){

            //                                 console.log(err);
            //                                 return db.rollback(()=>{

            //                                     res.json({success:false});
            //                                 })
            //                             }
            //                             else{

            //                                 if(result.affectedRows<=0){

            //                                     console.log(err,result);
            //                                     return db.rollback(()=>{

            //                                         res.json({success:false})
            //                                     })

            //                                 }
            //                                 else{

            //                                     console.log(result);

            //                                      return db.commit(()=>{


            //                                             res.json({success:true,messae:"create Account",customer_id});
            //                                         })


            //                                 }
            //                             }
            //                          })
                                    
            //                      }
            //                 })
            //             }
            //         })
            //     }

            // })

        }


    })
    })




}



exports.Employee_get_new_customer_controller=(req,res)=>{

   
    console.log(req.body);
    let customer_id=req.body.customer_id_from_backend;
    console.log("new customer id :: ",customer_id);

    Employee_get_new_customer_controller.get_new_customer_model(customer_id,(err,result)=>{


        if(err){

            console.log("Err:",err)
            res.json({success:false,message:"Error  in Database Find customer info"});
        }
        else{



            if(result.length==0){

                console.log("erro:",err)
                res.json({success:false,message:"connot Find Customer info"});
            }
            else{

                console.log("result:",result);
                res.json({success:true,message:"Find Custoemr Successfully",result});
            }
        }
    })





}