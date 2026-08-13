
const Employee_Profile_data=require("../module/Employee_profile_model");

exports.Employee_PROFILE_data=(req,res)=>{


    // console.log(req.query.Employee_id);

    let Employee_id=req.query.Employee_id;
    
    console.log(Employee_id);
    
    Employee_Profile_data.Employee_Profile_data(Employee_id,(err,reasult)=>{

        if(err){

            console.log("Err",err);

            return res.json({success:false});
        }
        else{

            console.log("reasult:",reasult);

            if(reasult.length==0){

                
                res.json({success:false});
            }
            else{

                res.json({success:true,reasult});
            }
        }

    })



}