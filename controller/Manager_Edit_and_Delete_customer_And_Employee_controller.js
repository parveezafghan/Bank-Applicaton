
const Edit_and_Delete_customer_and_Employee=require('../module/Manager_Edit_and_Delete_customer_&_Account_model');

exports.Delete_Account=(req,res)=>{


    let Account_Number=req.query.Account_Number;

    Edit_and_Delete_customer_and_Employee.Delete_Account(Account_Number,(err,result)=>{


        console.log(result)
        console.log(err);
        if(err){

            return res.json({success:false})
        }
        else{

            if(result.affectedRows<=0){

                return res.json({success:false})
            }
            else{

                return res.json({success:true});
            }
        }
        



    })
    // console.log(Account_Number);
}



exports.get_Data_For_Edit_Customer=(req,res)=>{


    let Account_Number=req.query.Account_Number;

    console.log("Accout IN:::",Account_Number);

    Edit_and_Delete_customer_and_Employee.get_Data_for_Edit_Customer(Account_Number,(err,result)=>{


        console.log(result);
        console.log(err);
        if(err){

            return res.json({success:false})
        }
        else{

            if(result.length==0){

                return res.json({success:false})
            }
            else{


                return res.json({success:true,result});
            }
        }
    })
    // console.log(Account_Number);

}



/// Edit Account / card / user / and login information like pasword user name pincode



exports.Edit_Account_info=(req,res)=>{


    console.log(req.body);

    let Branch_id=req.body.Branch_and_id;
    let Amount=req.body.Amount;
    let chanage_Account_state=req.body.chanage_Account_state;
    let chanage_Account_Type=req.body.chanage_Account_Type;
    let Account_Number=req.body.Account_Number_;
    console.log(Branch_id);
    console.log(Amount);
    console.log(chanage_Account_state)
    console.log(chanage_Account_Type)
    console.log(Account_Number);

 
    Edit_and_Delete_customer_and_Employee.Edit_Account_info(Account_Number,Amount,Branch_id,chanage_Account_state,chanage_Account_Type,(err,result)=>{


        if(err){
            console.log("rer",err)
            return res.json({success:false});
        }
        
        else{

            if(result.affectedRows<=0){

                console.log("result",result);

                return res.json({success:false})
            }
            else{


                console.log("resul:",result);
                return res.json({success:true});
            }
        }
    })
}

exports.Edit_customer_info=(req,res)=>{

    console.log(req.body);

    let First_Name=req.body.First_Name;
    let Last_Name=req.body.Last_Name;
    let F_Name=req.body.F_Name;
    let Eamil=req.body.Email;
    let Number=req.body.Number;
    let Account_Number=req.body.Account_Number_;
    console.log(First_Name);
    console.log(Last_Name)
    console.log(F_Name)
    console.log(Eamil)
    console.log(Number);
    console.log(Account_Number);

    Edit_and_Delete_customer_and_Employee.check_Account_And_get_Account_id(Account_Number,(err,result)=>{


        if(err){

            console.log("err",err);

            return res.json({success:false})
        }
        else{

            if(result.length==0){

                console.log("result:",result);

               return res.json({success:false})
            }
            else{

                console.log("result",result);
                // return res.json({success:true});

                let Account_id=result[0].Account_Id;

                console.log(Account_id);
                Edit_and_Delete_customer_and_Employee.Edit_customer_info(Account_id,First_Name,Last_Name,F_Name,Eamil,Number,(err,result)=>{


                    if(err){

                        console.log("rsult: ",err);

                        return res.json({success:false})
                    }
                    else{

                        if(result.affectedRows<=0){

                            return res.json({success:false})
                        }
                        else{

                            return res.json({success:true});
                        }
                    }
                })

            }
        }
    })
}


exports.Edit_card_info=(req,res)=>{

    // console.log(req.body);

    let card_Number=req.body.card_Number;
    let card_state=req.body.card_state;
    let card_type=req.body.card_type;
    let Account_Number=req.body.Account_Number_;
    console.log(card_Number+" ? "+card_state+" ? "+card_type+" ? "+Account_Number);


    Edit_and_Delete_customer_and_Employee.check_Account_And_get_Account_id(Account_Number,(err,result)=>{


        if(err){

            console.log("err",err);

            return res.json({success:false})
        }
        else{


            if(result.length==0){

                console.log("result",result);

                return res.json({success:false})
            }
            else{

                console.log("result:",result);
                let Account_id=result[0].Account_Id;

                console.log("id",Account_id);
                Edit_and_Delete_customer_and_Employee.Edit_card_info(Account_id,card_Number,card_type,card_state,(err,result)=>{


                    if(err){

                        console.log("err:",err);

                        return res.json({success:false})
                    }
                    else{

                        if(result.affectedRows<=0){

                            console.log("rsult:",result);

                            return res.json({success:false});
                        }
                        else{
                            console.log("reuslt:",result);

                            return res.json({success:true});
                        }
                    }
                })
            }
        }
    })
}


exports.Edit_login_info=(req,res)=>{


    // console.log(req.body);

    let user_name=req.body.user_name;
    let password=req.body.password;
    let pin_code=req.body.pin_code;
    let Account_Number=req.body.Account_Number_;
    console.log(user_name+" ? "+password+" ? "+pin_code+" ? "+Account_Number);


    Edit_and_Delete_customer_and_Employee.check_Account_And_get_Account_id(Account_Number,(err,result)=>{


        console.log(result);
        if(err){

            console.log("err",err);


            return res.json({success:false});
        }
        else{

            if(result.length==0){

                console.log("result:",result);

                return res.json({success:false});
            }
            else{


                let Account_id=result[0].Account_Id;

                Edit_and_Delete_customer_and_Employee.customer_id(Account_id,(err,result)=>{


                    console.log(result);
                    if(err){

                        console.log("result:",result);

                        return res.json({success:false});
                    }
                    else{

                        if(result.length==0){

                            console.log("result",result);

                            return res.json({success:false})
                        }
                        else{

                            
                            let customer_id=result[0].customer_id;

                            console.log("id",customer_id);
                            Edit_and_Delete_customer_and_Employee.Edit_user_login_info(customer_id,password,pin_code,user_name,(err,result)=>{

                                console.log("reesult:",result);
                                if(err){

                                    console.log("err",err);

                                    let IDID=100;
                                    return res.json({success:false,IDID})
                                }
                                else{

                                    
                                    if(result.affectedRows<=0){
                                        console.log("zero")
                                        console.log("result:",result);

                                        let ID=1000
                                        return res.json({success:false,ID})
                                    }
                                    else{

                                        console.log('result:',result);
                                        let id=100;
                                        return res.json({success:true,id});
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


