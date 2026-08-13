
const Employee_show_debit_credit_check_List_Model=require('../module/Employee_show_Debit_Credit_check_list_model');

exports.Employee_show_Debit_ejs_controller=(req,res)=>{


    let id=req.query.id;

    res.render('Bank_Employee/debit_List.ejs',{id});

    // console.log("in credit router");
    // res.render('Bank_Employee/credit_List.ejs')

}


exports.Employee_show_credit_ejs_controller=(req,res)=>{

    
    let id=req.query.id;
    res.render('Bank_Employee/credit_List.ejs',{id})

}

exports.Employee_show_Debit_controller=(req,res)=>{


    let limit=req.query.limit;

    console.log("limit :: ",limit);


    if(limit==undefined){

        Employee_show_debit_credit_check_List_Model.Employee_show_Debit_model((err,result)=>{

            if(err){

                console.log("Erro : ",err);
                return res.json({success:false});
            }
            else{

                console.log(err);
                console.log("Result : ",result);
                return res.json({success:true,result});
            }

        })

    }
    else {

         Employee_show_debit_credit_check_List_Model.Employee_show_Debit_limit_model(limit,(err,result)=>{


            if(err){

                
                return res.json({success:false});
            }
            else{

                
                if(result.length==0){

                    return res.json({success:false});
                }
                else{

                    return res.json({success:true,result})
                }


            }
         })
         
    }
    

}


exports.Employee_show_check_list_controller=(req,res)=>{

    
}


exports.Employee_search_customer_Debit=(req,res)=>{

    let Account_Number=req.body.Account_Number;

    console.log(Account_Number);


    Employee_show_debit_credit_check_List_Model.Empoyee_search_customer_Debit_model(Account_Number,(err,result)=>{


        if(err){

            console.log("Erro : ",err);

            res.json({success:false});
        }
        else{

            if(result.length==0){

                res.json({success:false})
            }
            else{

                res.json({success:true,result});
            }
        }
    })
}





exports.Employee_show_credit_controller=(req,res)=>{

    let limit=req.query.limit;

     
    if(limit==undefined){


     Employee_show_debit_credit_check_List_Model.Employee_show_Credit_All_model((err,result)=>{
    
    
    if(err){
    
        console.log(err);
       return res.json({success:false});
     
    }
    else {


    
       if(result.length==0){

        console.log(err);

            return res.json({success:false});
       }
       else{

         return res.json({success:true,result});
       }
    }


    });
    
    }
    else{

       Employee_show_debit_credit_check_List_Model.Employee_show_Credit_Limit_model(limit,(err,result)=>{


        if(err){

            console.log(err);
            return res.json({success:false});
        }
        else{
            console.log(err);

            return res.json({success:true,result});
        }
       })
    }
}

exports.Employee_search_customer_credit_controller=(req,res)=>{

    
    let Account_Number=req.body.Account_Number;


    Employee_show_debit_credit_check_List_Model.Employee_search_customer_credit_model(Account_Number,(err,result)=>{

        if(err){

            return res.json({success:false});
        }
        else {


            if(result.length==0){

                return res.json({super:false});
            }
            else{

                return res.json({success:true,result});
            }
        }
    })

}


exports.check_list_controller=(req,res)=>{

  console.log(req.query.limit);


    let limit=req.query.limit;

    if(limit===undefined){

        Employee_show_debit_credit_check_List_Model.Employee_show_check_list((err,result)=>{

            
            if(err){

                // console.log("err:",err);

                res.json({success:false});
            }
            else{

                // console.log('result :: ',result);

                if(result.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,result});
                }
            }

            
        })

    }
    else{

         Employee_show_debit_credit_check_List_Model.Employee_show_check_limit(limit,(err,result)=>{


            if(err){

                // console.log("errr:",err);

                res.json({success:false});
            }
            else{

                // console.log("reuslt : ",result);

                if(result.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,result});
                }
            }
         });
    }
    
}



exports.Employee_search_check=(req,res)=>{


    let Account_Number=req.body.Account_Number;

    // console.log(Account_Number);


    Employee_show_debit_credit_check_List_Model.search_check_by_check_No(Account_Number,(err,result)=>{


        if(err){

            // console.log("errr:",err);

            res.json({success:false});
        }
        else{

            // console.log("Result : ",result);

            if(result.length==0){

                res.json({success:false});
            }
            else{


                res.json({success:true,result});
            }
        }
    })


    
}



exports.search_check_by_status=(req,res)=>{


    // console.log(req.query.limit);

    let check_No=req.query.limit;

    Employee_show_debit_credit_check_List_Model.search_check_by_status(check_No,(err,result)=>{

        if(err){

            // console.log('errr:',err);
            res.json({success:false});
            
        }
        else{

            // console.log("result : ",result);

            if(result.length==0){


                let check_not='check_not'
                res.json({check_not});
            }
            else {

                res.json({success:true,result});
            }
        }


    })

}