
let get_user_data_from_Account=require('../module/get_user_data_from_Account_model');
const db=require('../db_connection');
exports.get_user_data=(req,res)=>{


    let Account_id=req.query.id;
    let Total_Amount=0;
    let Total_Deposite=0;
    let Total_widthraw=0;
    let Total_check=0;    
    let widthraw_count=0;
    let deposite_count=0;
    let check_count=0;
    let Total_Tranfer=0;
    let Tranfer_count=0;
    console.log("all",req.query);
    console.log("in Data ",Account_id);




    get_user_data_from_Account.Account_data(Account_id,(err,resault)=>{

        console.log("err in Account data:",err);
        if(resault){

            console.log("RRRRRR",resault);
            Total_Amount+=resault[0].Balance;
            console.log(resault)
            // res.json({success:true,Total_Amount});
        }

        console.log("Total ::  ",Total_Amount);
        get_user_data_from_Account.get_widthra_And_deposite(Account_id,(err,resault)=>{

            console.log("err in widthra:",err);
            console.log(resault);
            if(resault){


                for(let I=0;I<resault.length;I++){

                    if(resault[I].Transaction_type=="credit"){

                        Total_widthraw+=resault[I].Amount;
                        widthraw_count+=1;
                    }
                    if(resault[I].Transaction_type=='Debit'){

                        Total_Deposite+=resault[I].Amount;
                        deposite_count+=1;
                    }
                }

                // res.json({success:true,Total_Amount,Total_Deposite,Total_widthraw,widthraw_count,deposite_count});
            }

            console.log("Total Widthraw:",Total_widthraw,"Total Deposite : ",Total_Deposite);

            get_user_data_from_Account.get_check(Account_id,(err,resault)=>{


                console.log("err in check: ",err);
                console.log(resault);
                if(resault){


                    for(let I=0;I<resault.length;I++){

                        if(resault[I].status=='pending' || resault[I].status=='cleared'){

                            Total_check+=resault[I].Amount;
                            check_count+=1;
                        }
                    }


                    // res.json({success:true,Total_Amount,Total_Deposite,deposite_count,Total_widthraw,widthraw_count,check_count,Total_check});
                }

                console.log("Total check:",Total_check);

                get_user_data_from_Account.get_Tranfer_Amount(Account_id,(err,resault)=>{


                    console.log("erro in TRansfer : ",err);
                    if(resault){


                        for(let I=0;I<resault.length;I++){

                            Total_Tranfer+=resault[I].Amount;
                            Tranfer_count+=1;
                        }
                    }

                    console.log("Toal Transfer : ",Total_Tranfer);
                    res.json({success:true,Total_Amount,Total_Deposite,deposite_count,Total_widthraw,widthraw_count,check_count,Total_check,Total_Tranfer,Tranfer_count});
                })
            })

            
        })
    })
    
}



exports.user_profile_data=(req,res)=>{


    let Account_id=req.query.Account_id;

    console.log(Account_id,"king");

    get_user_data_from_Account.user_profile_data(Account_id,(err,reasult)=>{

        if(err){

            console.log("err",err);
            
            return res.json({success:false})
        }else{

            // console.log("reasult:",reasult);

            if(reasult.length==0){


                return res.json({success:false})
            }
            else{

                return res.json({success:true,reasult});
            }

            
        }
    })

}