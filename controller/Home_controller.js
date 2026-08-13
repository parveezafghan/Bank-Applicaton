

const Generial_contact_model=require('../module/Generial_contact_model');

exports.show=(req,res)=>{


     res.render('Home_page/Home');
}


exports.show_about=(req,res)=>{


    res.render('Home_page/about.ejs')
}


exports.show_contact=(req,res)=>{

    res.render('Home_page/contact')
}


exports.show_services=(req,res)=>{


    res.render('Home_page/services.ejs');
}



exports.show_Admin_login=(req,res)=>{

    res.render("Home_page/Admin_login.ejs")
}



exports.show_login=(req,res)=>{

    res.render('Home_page/login')
}



exports.show_Home=(req,res)=>{


    res.render('Home_page/Home')
}

exports.Generial_contact_form_controller=(req,res)=>{

    console.log("in contact form  : ",req.body);

    let Name=req.body.Name;
    let Number=req.body.Number;
    let Email=req.body.Email;
    let Message=req.body.Message;

    Generial_contact_model.Generial_contact_model(Name,Number,Email,Message,(err,result)=>{


           if(err){


            console.log("Error",err);

            
           }
           else{

             if(result.length==0){

                res.json({success:false});
             }
             else{

                  
                  res.json({success:true});
             }
           }

    })


}