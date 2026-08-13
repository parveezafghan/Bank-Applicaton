
const Employee_customer_list_paggination_model=require('../module/Employee_customer_list_paggination_model');
exports.Employee_customer_List_paggination_controller=(req,res)=>{


    let limit=req.query.limit;

    if(limit==undefined){


        Employee_customer_list_paggination_model.Employee_customer_list_paggination_all_model((err,result)=>{


            if(err){

                console.log("err",err);

                res.json({success:false});
            }
            else{

                console.log("result : ",result);

                return res.json({success:true,result});
            }
        })

        
        
    }
    else{

        // console.log(limit);

        Employee_customer_list_paggination_model.Employee_customer_list_paggination_Limit_model(limit,(err,result)=>{


            if(err){
                // console.log("Error in limit :: ",err);


                return res.json({success:false,message:'limit'});
            }
            else{

                // console.log("result  in limit:",result);

                
                if(result.length==0){

                    return res.json({success:false,message:"Erro limit 0"});
                }
                else{

                    return res.json({success:true,result});
                }
            }
        })
    }

}