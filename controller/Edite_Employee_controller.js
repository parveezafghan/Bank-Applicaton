const Edit_Employee_model=require('../module/Manager_Edit_Employee_model');
const { Employee, Edit_Employee } = require('./Manger_Router_controller');


exports.Delete_Employee=(req,res)=>{

    let Employee_id=req.query.Employee_id;
    console.log(Employee_id);


    Edit_Employee_model.Delete_Employee(Employee_id,(err,result)=>{

        if(err){

            console.log("err",err);

            return res.json({success:false})
        }
        else{

            if(result.affectedRows<=0){

                console.log("result:",result);

                return res.json({success:false})
            }
            else{

                return res.json({success:true});

            }
        }
    })
}




exports.get_Employee_data=(req,res)=>{

    console.log(req.query);
    let Employee_id=req.query.Employee_id;

    console.log(Employee_id);

    Edit_Employee_model.search_Employee_Data(Employee_id,(err,result)=>{


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

              return res.json({success:true,result});
           }
        }
    })
}


exports.Edit_Employee_info=(req,res)=>{

   
    console.log(req.body);

    let Last_Name=req.body.Last_Name;
    let First_Name=req.body.First_Name;
    let Eamil=req.body. Email;
    let Number=req.body.Number;
    let Employee_id=req.body.Employee_id;


    Edit_Employee_model.Edit_Employee_info(First_Name,Last_Name,First_Name,Eamil,Number,Employee_id,(err,result)=>{

        if(err){

            console.log("err",err);

            return res.json({success:false})
        }
        else{


            if(result.affectedRows<=0){

                console.log('result;',result);

                return res.json({success:false})
            }
            else{


                console.log('resut:',result);

                return res.json({success:true});
            }
        }
    });
}


exports.Edit_Employee_login_info=(req,res)=>{


    console.log(req.body);

    let pin_code=req.body.pin_code;
    let user_name=req.body.user_name;
    let password=req.body.password;
    let Employee_id=req.body.Employee_id;


    Edit_Employee_model.Edit_Employee_login_info(pin_code,user_name,password,Employee_id,(err,result)=>{

        if(err){

            console.log("err",err);

            return res.json({success:false});
        }
        else{


            if(result.affectedRows<=0){

                console.log('result:',result);

                return res.json({success:false});
            }
            else{

                console.log("result:",result);

                return res.json({success:true});
            }
        }
    })




}