

exports.Bank_Manager=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_manager/Bank_Manger.ejs',{id});
}


exports.customer=(req,res)=>{


    console.log("customer list");
    let id=req.query.id;

    res.render("Bank_manager/Customers_list_Manager.ejs",{id});
}

exports.Employee=(req,res)=>{

    let id=req.query.id;


    res.render("Bank_manager/Employee_list_Manger.ejs",{id});
}

exports.M_Deposite=(req,res)=>{


    let id=req.query.id;
    
    res.render("Bank_manager/Deposite_Manager_List.ejs",{id});
}

exports.M_Widthraw=(req,res)=>{

    let id=req.query.id;
    res.render('Bank_manager/widthraw_Manger_list.ejs',{id});
}


exports.check_list=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_manager/Chack_Manger_list.ejs',{id});
}

exports.pay_check=(req,res)=>{

    let id=req.query.id;

    res.render('Bank_manager/pay_check.ejs',{id});
}
exports.Amount_Deposite=(req,res)=>{


  let id=req.query.id;

    res.render("Bank_manager/Deposite_Manger.ejs",{id});
}


exports.Add_Customer_by_Manager=(req,res)=>{


    let id=req.query.id;
    
    res.render("Bank_manager/Add_Customer_manager.ejs",{id});
}


exports.Remove_customer_by_Manager=(req,res)=>{


    let id=req.query.id;

    res.render("Bank_manager/Remove_Customer_Manger.ejs",{id});
}


exports.Transfer_Mony_Manager=(req,res)=>{


    let id=req.query.id;

    res.render("Bank_manager/Transfer_manger.ejs",{id});
}

exports.Transfer_Funds_list_M=(req,res)=>{

    let id=req.query.id;

    res.render("Bank_manager/Transfer_Fund_List.ejs",{id});
}
exports.Add_Employee_by_Manager=(req,res)=>{


    let id=req.query.id;
    res.render('Bank_manager/Add_Employee_Manger.ejs',{id});
}

exports.Remove_Employee_by_Manager=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_manager/Remove_Employee_Manger.ejs',{id});
}


exports.contact_us_Manager=(req,res)=>{


    let id=req.query.id;

    res.render("Bank_manager/Contact_us_Manger.ejs",{id});
}

exports.Amount_widthraw=(req,res)=>{


    let id=req.query.id;
    res.render("Bank_manager/Widthraw_Manager.ejs",{id});
}


exports.Amount_check=(req,res)=>{

    let id=req.query.id;



    res.render("Bank_manager/Chack_Manger.ejs",{id});
}


exports.change_card_And_Account_Status_M=(req,res)=>{


    let id=req.query.id;
    res.render("Bank_manager/change_card_And_Account_Status.ejs",{id});
}


exports.Edit_customer=(req,res)=>{

    console.log(req.query.id);
    let id=req.query.id;

    console.log(id);
    // console.log(id.query.id.Object.key());

    // let Array_id_and_Account_Number=id.split("-");

    // id=Array_id_and_Account_Number[0];
    // Account_Number=[1];

    res.render('Bank_manager/Edit_customer.ejs',{id});
}


exports.Edit_Employee=(req,res)=>{

    let id=req.query.id;

    res.render('Bank_manager/Edit_Employee.ejs',{id});
}


exports.status_M=(req,res)=>{

    let id=req.query.id;

    res.render("Bank_manager/Bank_status.ejs",{id});
}
exports.attendence=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_manager/Attendence.ejs',{id});
}

exports.Employee_salary_payment=(req,res)=>{


    let id=req.query.id;

    res.render("Bank_manager/Manager_Employee_salary_payment.ejs",{id});
}