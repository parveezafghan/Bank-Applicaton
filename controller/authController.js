// const user=require('../module/userModel');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const secretKEy="parveez"
const User=require('../module/user')
const Branchs=require('../module/get_Branch_model');
const db=require("../db_connection");



exports.login_page=(req,res)=>{


    res.render('Home_page/login.ejs');
},


exports.login=(req,res)=>{

    const user_name=req.body.user_name_;
    const password=req.body.Account_password;
    const Account_Number=req.body.Account_No;
    const pin_code=req.body.pinCode;

     console.log(Account_Number);
     console.log(pin_code);

     let date=new Date();

    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDay();

    let Hour=date.getHours();
    let Manute=date.getMinutes();
    let seconds=date.getSeconds();
    let state="login";

    // login_Time=`${year}-${month}-${day}-${Hour}-${Manute}-${seconds}`;


    
     db.beginTransaction(err=>{


     
       User.userLogin(Account_Number,user_name,password,pin_code,(err,result)=>{


        if(err){

            console.log("err",err);
            return db.rollback(()=>{

                res.json({success:false});
            })

        }
        else{


            console.log("result:",result);
            if(result.length==0){

                return db.rollback(()=>{

                    res.json({success:false})
                })
            }
            else{

                console.log(result[0]);
                let Data=result[0].customer_id;
                let Account_id=result[0].Account_Id;

                console.log("DIDIDID:",Data);
                User.Track_login(Data,state,(err,result)=>{


                    if(err){

                        console.log("err in lgon:",err);
                        return db.rollback(()=>{

                            res.json({success:false})
                        })
                    }
                    else{

                    

                        if(result.affectedRows<=0){
                           console.log("no Affected:",err);

                            return db.rollback(()=>{


                                res.json({success:false})
                            })


                        }
                        else{
                            console.log("reasult login:",result);

                            return db.commit(()=>{

                                res.json({success:true,user:Account_id});
                            })
                        }
                    }
                })

            }
        }
       
    })   })


};



exports.Tracking_logout_=(req,res)=>{

    let id=req.query.id;
    let logout_Time=new Date();
    let year=logout_Time.getFullYear();
    let month=logout_Time.getMonth();
    let day=logout_Time.getDay();
    let Hour=logout_Time.getHours();
    let Manute=logout_Time.getMinutes();
    let second=logout_Time.getSeconds();
    let state='logout';


    // logout_Time=`${year}-${month}-${day}-${Hour}-${Manute}-${second}`;


    User.Track_logout(id,state,(err,result)=>{


        if(err){

            return res.json({success:false})
        }
        else{

             if(result.length==0){

                return res.json({success:false})
             }
             else{


                 res.render('Home_page/login.ejs');
             }
        }
    })
}


exports.user_dashboard_controller=(req,res)=>{


     let id=req.query.id;
    console.log(id);
    res.render('Users_pages/User_Home_page.ejs',{id});
}


exports.get_kabul_bank_Branchs_controller=(req,res)=>{


    Branchs.get_Branchs_model((err,result)=>{

        if(!err){

            if(result.length==0){

                 res.json({success:false});
            }
            else{

                // res.json({"Branchs":result});
                 return   res.json({success:true,Branchs:result});

            }
            // console.log("Result : ",result);
        }
        else{

            console.log("Error : ",err);
        }
    })
   
    

}