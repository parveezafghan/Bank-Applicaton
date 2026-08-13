
const get_kabul_bank_Branchs_and_id=require('../module/get_Branch_model');
const User=require('../module/user');
exports.Employee_controller=(req,res)=>{

    // console.log(req.query.id);
    let id=req.query.id;

    res.render('Bank_Employee/Employee.ejs',{id});
}


exports.Customer_list=(req,res)=>{


    let id=req.query.id;
    res.render('Bank_Employee/Customer_list.ejs',{id});

}


exports.logout=(req,res)=>{

    let  id=req.query.id;
    let logout_Time=new Date();
    let Year=logout_Time.getFullYear();
    let Month=logout_Time.getMonth();
    let day=logout_Time.getDay();
    let Hour=logout_Time.getHours();
    let Manute=logout_Time.getMinutes();
    let seconds=logout_Time.getSeconds();
    let state="logout";
    logout_Time=`${Year}-${Month}-${day}-${Hour}-${Manute}-${seconds}`;
    
    User.Track_logout(id,state,logout_Time,(err,reasult)=>{

        if(err){

            return res.json({success:false});
        }
        else{


            if(reasult.length==0){

                return res.json({success:false});
            }
            else{

                return   res.render('Home_page/Admin_login.ejs');
            }
        }

    })

    
}

exports.Employee_contact_us_controller=(req,res)=>{


    let id=req.query.id;


    res.render('Bank_Employee/contact_page_system.ejs',{id});

}

exports.Employee_Account_Details=(req,res)=>{

   let id=req.query.id;
   console.log("Empoyee Account Details",id);

   res.render("Bank_Employee/Employee.ejs",{id});
}


exports.Add_customer_controller=(req,res)=>{


    let id=req.query.id;
    res.render('Bank_Employee/Add_Customer.ejs',{id});
}


exports.Remove_customer_controller=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_Employee/Remove_customer.ejs',{id});
}


exports.Credit_Funds_controller=(req,res)=>{


    let id=req.query.id;
    res.render('Bank_Employee/Credit_Funds.ejs',{id});
}


exports.Debit_Funds_controller=(req,res)=>{

    let id=req.query.id;

    res.render('Bank_Employee/Debit_Funds.ejs',{id});
}


exports.Transfer_funds_controller=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_Employee/Transfer_funds.ejs',{id});
}

exports.check_pay_controller=(req,res)=>{

    let id=req.query.id;
    res.render('Bank_Employee/pay_check.ejs',{id});
}

exports.check_list_controller=(req,res)=>{

    let id=req.query.id;
    res.render('Bank_Employee/check_list.ejs',{id});
}
exports.get_kabul_bank_Branchs_and_id_controller=(req,res)=>{


     get_kabul_bank_Branchs_and_id.get_kabul_bank_Branchs_and_id_model((err,result)=>{


        // console.log(result);

        if(result){

            if(result.length==0){

                res.json({success:false})
            }
            else{

                  res.json({success:true,result});
            }
        }
        else{

            res.json({success:false})
        }
     })
}