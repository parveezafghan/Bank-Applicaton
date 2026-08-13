
 let Account_And_Employee_Details=require('../module/Manager_Account_and_Employee_Details_model');
exports.Account_Details=(req,res)=>{

   let Account_Number=req.body.Account_Number;
    // console.log(req.body.Account_Number);


    Account_And_Employee_Details.Account_Details(Account_Number,(err,result)=>{


        if(err){

            console.log("err",err);
            return res.json({success:false});

        }
        else{

            console.log("result",result);
            if(result.length==0){

                console.log("not reasult",result);
                return res.json({success:false});
            }
            else{

                console.log("result: ",result);

                return res.json({success:true,result});
            }

        }

    })



}



// Get Employee Account  Details



exports.Employee_Account_Details=(req,res)=>{


    console.log(req.body.user_name);

    let user_name=req.body.user_name;

    Account_And_Employee_Details.Employee_Account_Details(user_name,(err,result)=>{

        if(err){

            console.log("er",err);

            return res.json({success:false});
        }
        else {

            if(result.length==0){

                console.log("rsult",result);

                return res.json({success:false});
            }
            else{

                console.log("result:",result);

                return res.json({success:true,result});
            }
        }
    })
}