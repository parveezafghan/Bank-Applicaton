

const user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model=require('../module/user_Debit_Credit_check_and_Transfer_List_pagination_model');
exports.get_10_Deposite_Record=(req,res)=>{

    console.log("10 pagianiton");
    console.log(req.query.limit);


    let Account_id=req.query.limit;
    user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_10_deposite_records(Account_id,(err,reasult)=>{

        if(err){
            console.log("err",err)

            return res.json({success:false})
        }
        else{

            console.log("lenght;",reasult.length);
            console.log("Reault of Transaxtion",reasult);
            if(reasult.length==0){


                let message="Records Not Exist";
                res.json({success:false,message});
            }
            else{
                console.log(reasult);
                res.json({success:true,reasult});
            }
        }
    });

}


exports.get_all_depostie_list=(req,res)=>{


    if(req.query.Account_id){

        let Account_id=req.query.Account_id;


        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_all_Deposite_Records(Account_id,(err,reasult)=>{


            if(err){

                // console.log("err");

                res.json({success:false});
            }
            else{

                // console.log("result:",reasult);

                if(reasult.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,reasult});
                }
            }
        })
    }


    if(!req.query.Account_id){

        let limit=req.query.limit;

        console.log(req.query.limit);
         console.log(limit);

        data=limit.split('-');
        console.log(data);
        let count=data[0];
        Account_id=data[1];

        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_limit_Deposite_Records(Account_id,count,(err,reasult)=>{


            if(err){

                console.log("err:",err);

                return res.json({success:false});
            }
            else{


                if(reasult.length==0){

                    console.log("reasult not find:",reasult);

                    return res.json({success:false})
                }
                else{

                    console.log(reasult);   
                    return res.json({success:true,reasult});
                }
            }
        })
    }
    
    //  console.log("Account ID ;:",req.query.Account_id);
    // console.log("Account:id:",req.query.Account_id);


    
}


exports.get_10_widthraw_Record=(req,res)=>{


    // let Account_id=req.query.limit;
    // console.log("in Widthra sdfsdfsdfsadf");

    user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_10_Widthraws_Records(Account_id,(err,reasult)=>{




        if(err){

            console.log("err:",err);

            return res.json({success:false})
        }
        else{
            console.log(reasult);
            if(reasult.length==0){

                console.log("not Find",reasult);
                return res.json({success:false})
            }
            else{


                console.log(reasult);
                return res.json({success:true,reasult})
            }
        }
    })
    // console.log("Account ID ID ID ID : ",Account_id);
}


exports.get_All_Widthraw_Records=(req,res)=>{




    if(req.query.Account_id){

        let Account_id=req.query.Account_id;


        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_all_Widthraw_Records(Account_id,(err,reasult)=>{


            if(err){

                // console.log("err");

                res.json({success:false});
            }
            else{

                // console.log("result:",reasult);

                if(reasult.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,reasult});
                }
            }
        })
    }


    if(!req.query.Account_id){

        let limit=req.query.limit;

        console.log(req.query.limit);
         console.log(limit);

        data=limit.split('-');
        console.log(data);
        let count=data[0];
        Account_id=data[1];

        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_limit_Widthraw_Records(Account_id,count,(err,reasult)=>{


            if(err){

                console.log("err:",err);

                return res.json({success:false});
            }
            else{


                if(reasult.length==0){

                    console.log("reasult not find:",reasult);

                    return res.json({success:false})
                }
                else{

                    console.log(reasult);   
                    return res.json({success:true,reasult});
                }
            }
        })
    }
    




}




exports.get_10_check_Records=(req,res)=>{


    let Account_id=req.query.Account_id;

     user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_10_checks_Records(Account_id,(err,reasult)=>{


        if(err){

            console.log("err",err);

            return res.json({success:false})
        }
        else{

            // console.log(reasult);

            if(reasult.length==0){

                return res.json({success:false})
            }
            else{

                return res.json({success:true,reasult});
            }


        }
     })
}







exports.get_All_checks_Records=(req,res)=>{




    if(req.query.Account_id){

        let Account_id=req.query.Account_id;


        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_all_checks_Record(Account_id,(err,reasult)=>{


            if(err){

                // console.log("err");

                res.json({success:false});
            }
            else{

                // console.log("result:",reasult);

                console.log(reasult);
                if(reasult.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,reasult});
                }
            }
        })
    }


    if(!req.query.Account_id){

        let limit=req.query.limit;

        console.log(req.query.limit);
         console.log(limit);

        data=limit.split('-');
        console.log(data);
        let count=data[0];
        Account_id=data[1];

        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_limit_check_Records(Account_id,count,(err,reasult)=>{


            if(err){

                console.log("err:",err);

                return res.json({success:false});
            }
            else{


                if(reasult.length==0){

                    console.log("reasult not find:",reasult);

                    return res.json({success:false})
                }
                else{

                    console.log(reasult);   
                    return res.json({success:true,reasult});
                }
            }
        })
    }
    




}






exports.user_search_check_by_status=(req,res)=>{


    // console.log(req.query.limit);


    // console.log(req.query.limit);
    console.log(req.query.limit);
    let status=req.query.limit;

    console.log('status:::',status);
     data=status.split('-');
        console.log(data);
        status=data[0];
        Account_id=data[1];
        console.log(status," ",Account_id);


    user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.user_search_check_by_status(Account_id,status,(err,result)=>{

        if(err){

            console.log('errr:',err);
            res.json({success:false});
            
        }
        else{

            console.log("result : ",result);

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




exports.get_10_Transfer_Records=(req,res)=>{



    let Account_id=req.query.Account_id;

    user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_10_Transfer_records(Account_id,(err,result)=>{

        if(err){

            console.log("err",err);


            return res.json({success:false})
        }
        else if(result.length==0){

            console.log("reasult:",result)
            return res.json({success:false});
        }
        else{

            console.log("reasult:",result);
            return res.json({success:true,result});
        }
    })



}







exports.get_All_Transfer_Records=(req,res)=>{




    if(req.query.Account_id){

        let Account_id=req.query.Account_id;


        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_all_Transfer_Record(Account_id,(err,reasult)=>{


            if(err){

                // console.log("err");

                res.json({success:false});
            }
            else{

                // console.log("result:",reasult);

                console.log(reasult);
                if(reasult.length==0){

                    res.json({success:false});
                }
                else{

                    res.json({success:true,reasult});
                }
            }
        })
    }


    if(!req.query.Account_id){

        let limit=req.query.limit;

        console.log(req.query.limit);
         console.log(limit);

        data=limit.split('-');
        console.log(data);
        let count=data[0];
        Account_id=data[1];

        user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_model.get_limit_Transfer_Records(Account_id,count,(err,reasult)=>{


            if(err){

                console.log("err:",err);

                return res.json({success:false});
            }
            else{


                if(reasult.length==0){

                    console.log("reasult not find:",reasult);

                    return res.json({success:false})
                }
                else{

                    console.log(reasult);   
                    return res.json({success:true,reasult});
                }
            }
        })
    }
    




}

