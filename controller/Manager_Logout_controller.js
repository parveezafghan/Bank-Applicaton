
const Manager_logout=require('../module/Manager_logout_model');

exports.logout=(req,res)=>{

    // console.log(req.query.id);

    console.log("in logout ");
    let user_id=req.query.id;
    let status="logout";
    Manager_logout.Track_logout(user_id,status,(err,result)=>{


        // console.log("err",err);
        //   res.render('Home_page/Admin_login.ejs')
        console.log(result);
        console.log(err);
        if(err){

            console.log('Err',err);

            return res.json({success:false});
        }
        else{

            if(result.length==0){

                console.log("reasult;",result);
                return res.json({success:false});
            }
            else{

                // return res.json({success:true});

               return res.render('Home_page/Admin_login.ejs');
            }
        }
    })

}