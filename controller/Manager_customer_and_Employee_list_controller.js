
const customer_and_Employee_list=require('../module/Manager_Employee__and_customer_List_model');


exports.Employee_list=(req,res)=>{


    console.log(req.query.limit);

    let limit=req.query.limit;
    if(limit===undefined){

        console.log("undegin");
         customer_and_Employee_list.Employee_list_all((err,result)=>{

            console.log(err);
            if(err){

                console.log("err:",err);
                return res.json({success:false});
            }
            else{
        
                if(result.length==0){

                    return res.json({success:false});
                }
                else{

                    console.log("result---------:",result);

                    return res.json({success:true,result});
                }
            }
        })

    }
    else if(limit==10 || limit==20){

        customer_and_Employee_list.Employee_list(limit,(err,result)=>{

            if(err){

                console.log('err:',err);

                return res.json({success:false});
            }
            else{

                if(result.length==0){

                    console.log('result;',result);

                    return res.json({success:false});
                }
                else{

                    console.log("result<",result);

                    return res.json({success:true,result});
                }
            
            }
        })

    }
    else{


        customer_and_Employee_list.search_Employee_by_user_name(limit,(err,result)=>{

            if(err){

                console.log('err',err);

                return res.json({success:false});
            }
            else{

                if(result.length==0){

                    console.log("result:",result);

                    let message="Employee_not Find";
                    return res.json({success:false,message});
                }
                else {

                    return res.json({success:true,result});
                }
            }
        })
    }
}




/// customer List Node js code to list the  custome details 


exports.Cusomer_list=(req,res)=>{


    console.log(req.query.limit);

    let limit=req.query.limit;
    if(limit===undefined){

        console.log("undegin");
         customer_and_Employee_list.customer_all_list((err,result)=>{

            
            if(err){

                console.log("err:",err);
                return res.json({success:false});
            }
            else{

                if(result.length==0){

                    return res.json({success:false});
                }
                else{

                    console.log("result---------:",result);

                    return res.json({success:true,result});
                }
            }
        })

    }
    else if(limit==10 || limit==20){

        customer_and_Employee_list.customer_limit_list(limit,(err,result)=>{

            if(err){

                console.log('err:',err);

                return res.json({success:false});
            }
            else{

                if(result.length==0){

                    console.log('result;',result);

                    return res.json({success:false});
                }
                else{

                    console.log("result<",result);

                    return res.json({success:true,result});
                }
            
            }
        })

    }
    else{


        customer_and_Employee_list.search_customer_by_Account_Number(limit,(err,result)=>{

            if(err){

                console.log('err',err);

                return res.json({success:false});
            }
            else{

                if(result.length==0){

                    console.log("result:",result);

                    let message="Employee_not Find";
                    return res.json({success:false,message});
                }
                else {

                    return res.json({success:true,result});
                }
            }
        })
    }
}