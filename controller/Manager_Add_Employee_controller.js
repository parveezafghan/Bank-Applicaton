const db=require("../db_connection");
const Add_Employee=require('../module/Manager_Add_Employee_model');

exports.add_Employee=(req,res)=>{

    console.log(req.body);
    let {First_name,Last_Name,user_name,F_Name,Result_Gender,Email,Number,District,provienc,Branch_id,pin_code,password,Manager_id,zip_code,salary}=req.body;


    db.beginTransaction(err=>{


        Add_Employee.add_Employee_Details(First_name,Last_Name,Number,Email,Result_Gender,Branch_id,Manager_id,provienc,District,zip_code,(err,result)=>{


            if(err){

                console.log("eRR",err);

                 return res.json({success:false})

            }
            else {


                
                if(result.length==0){

                  
                    return res.json({success:false});

                }
                else{

                    Add_Employee.search_new_Employee_id(First_name,Last_Name,zip_code,Number,Branch_id,Email,(err,result)=>{


                        if(err){

                            console.log("err",err);
                            return db.rollback(()=>{

                                res.json({success:false})
                            })
                        }
                        else{

                            console.log('resutl:',result);
                            if(result.length==0){

                                return db.rollback(()=>{

                                    res.json({success:false})
                                })
                            }
                            else{

                                console.log(result.length);
                                console.log(result);
                                let Employee_data=result[result.length-1];
                                console.log("last Data ",Employee_data);
                                let Employee_id=Employee_data.Employee_id;

                                Add_Employee.add_Emplyee_user_login_details(password,pin_code,Employee_id,user_name,(err,result)=>{


                                    if(err){

                                        
                                        return db.rollback(()=>{

                                            res.json({success:false})
                                        })
                                    }
                                    else{

                                        
                                        if(result.affectedRows<=0){

                                             db.rollback(()=>{

                                                res.json({success:false})
                                             })
                                        }
                                        else{


                                            Add_Employee.Add_Employee_salary(Employee_id,salary,(err,result)=>{

                                                if(err){

                                                    console.log("err",err);
                                                    return db.rollback(()=>{

                                                        res.json({success:false});
                                                    })
                                                }
                                                else{

                                                    console.log("resut:",result)
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

                                            // return db.commit(()=>{

                                            //     res.json({success:true});
                                            // })
                                        }
                                    }
                                })

                            }
                        }
                    })

                    // console.log(result);
                    // let Employee_id=result.Employee_id;
                    // console.log("Employee_id",Employee_id);
                    // Add_Employee.add_Emplyee_user_login_details(password,pin_code,Employee_id,user_name,(err,result)=>{

                    //     if(err){

                    //         console.log("err",err);
                    //         return db.rollback(()=>{
                    //             res.json({success:false})
                    //         })
                            
                    //     }
                    //     else{



                    //         if(result.affectedRows<=0){


                    //             return db.rollback(()=>{

                    //                 res.json({success:false})
                    //             })
                    //         }
                    //         else{

                    //               return db.commit(()=>{

                    //             res.json({success:true});
                    //             })
                    //         }
                    //     }
                    // })
                }
            }
        })
    })
    // console.log(F_Name+" "+Last_Name+" "+F_Name+" "+user_name+" "+Result_Gender+" "+Email+" "+Number+" "+District+" "+provienc+" "+Branch_id+" "+pin_code+" "+password+" "+Manager_id);



}