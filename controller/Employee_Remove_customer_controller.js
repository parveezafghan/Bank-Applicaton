
const Employee_Remove_Account_Model=require('../module/Employee_Remove_customer_model');
exports.Employee_Remove_Account_controller=(req,res)=>{

    let account_no=req.body.account_no;

    Employee_Remove_Account_Model.Employee_Remove_customer_model(account_no,(err,result)=>{


        if(err){

            console.log("er:",err);
            res.json({success:false});

        }
        else{

            console.log("result: customer : ",result);
            if(result.length==0){

                res.json({success:false});
            }
            if(result.affectedRows==0){

                res.json({success:false});
            }
            else{

                res.json({success:true,result});
            }

        }
    })


   
}