
const { resolveInclude } = require('ejs');
const change_password_model=require('../module/Employee_change_password_model');

exports.change_password=(req,res)=>{


    console.log(req.body);


    let Previous_Password=req.body.Previous_Password;
    let new_password=req.body.new_password;
    let Employee_id=req.body.Employee_id;



    change_password_model.change_password(Employee_id,Previous_Password,new_password,(err,reasult)=>{

        if(err){

            console.log('err',err);

            return res.json({success:false});
        }
        else{


            if(reasult.affectedRows<=0){

                console.log("err:",err);
                return res.json({success:false});
            }
            else{

                console.log("Result: ",reasult);
                return res.json({success:true});
            }
        }
    })
}