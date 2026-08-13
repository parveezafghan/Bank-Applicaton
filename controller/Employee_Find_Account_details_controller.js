
const Employe_Find_Account_details_model=require('../module/Employee_Find_account_details_model');

exports.Employee_Find_account_details_controller=(req,res)=>{



    // console.log(req.body);

    let account_number=req.body.account_number;
    console.log(account_number);

    Employe_Find_Account_details_model.Employee_Find_account_details_model(account_number,(err,result)=>{


        if(err){

            res.json({success:false});
        }
        else{

            
            if(result.length==0){

                res.json({success:false});

            }
            else{

                res.json({success:true,result});
            }
        }
    })
    // console.log(req.body.account_number);
}