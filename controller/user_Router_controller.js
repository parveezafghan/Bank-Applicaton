


exports.Deposite_controller=(req,res)=>{

    // let id=req.query.id;
    // console.log("in Depostie router :: id : ",id);
    let id=req.query.id;
    // console.log("id with post :",id);
    // res.render('Users_pages/User_Deposite_table.ejs',{id});

    // res.json({success:true,id});

    res.render('Users_pages/User_Deposite_table.ejs',{id});

}


exports.widthraw_controller=(req,res)=>{


    let id=req.query.id;
    console.log("in Widthraw Router :: id :: ",id);
    res.render('Users_pages/user_widthraw_table.ejs',{id});
}

exports.check_controller=(req,res)=>{


      let id=req.query.id;
   console.log("in check Rouer :: id :: ",id);
    res.render('Users_pages/user_chech_table.ejs',{id});
}


exports.transaction_controller=(req,res)=>{


    let id=req.query.id;
    console.log("in Transaction Router :: id ::",id);
    res.render('Users_pages/user_Transaction_table.ejs',{id});
}


exports.user_send_check_controller=(req,res)=>{


     let id =req.query.id;
    console.log('in send check Router :: id :: ',id);
    res.render('Users_pages/User_send_check.ejs',{id});
}

exports.contact_controller=(req,res)=>{


     let id=req.query.id;
    console.log('in Contact Router :: id :: ',id);
    res.render('Users_pages/User_contact_page.ejs',{id});
}

// exports.logout_controller=(req,res)=>{


//     let id=req.query.id;
    
//     // res.render('Home_page/login.ejs');

// }