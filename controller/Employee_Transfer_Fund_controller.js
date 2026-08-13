
let Transfer_Fund_model=require('../module/Employee_Transfer_fund_model');

let db=require('../db_connection');


exports.Transfer_fund=(req,res)=>{

    console.log(req.body);


    let From_account=req.body.From_account;
    let card=req.body.card;
    let To_account=req.body.To_account;
    let Amount=req.body.Amount;

    let date=new Date();

    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDay();

    let Hour=date.getHours();
    let Manute=date.getMinutes();
    let seconds=date.getSeconds();

    var percentage=0;
    var Tax=0;
    var check_Tax;
    let Transaction_Time=`${year}-${month}-${day}-${Hour}-${Manute}-${seconds}`;
    
   
    // calculate Tax
    if(Amount>5000 && Amount<=12500){

         Tax=Amount*2/100;
         percentage=2;

         check_Tax=true;

     }
     else if(Amount>12500 && Amount<=100000){

        Tax=Amount*10/100;
        percentage=10;

        check_Tax=true;

     }
     else if(Amount>100000){


        Tax=Amount*20/100;
        percentage=20;
        check_Tax=true;
     }
     else{


        check_Tax=false;
        

     }



    db.beginTransaction(err=>{


        Transfer_Fund_model.check_Account(From_account,To_account,(err,result)=>{


            if(err){

                // console.log("err",err);

                res.json({success:false});
            }
            else{

                // console.log("result",result);

                if(result.length==0 || result.length==1){

                    return db.rollback(()=>{

                        res.json({success:false});
                    })
                }
                else{


                     for(let I=0;I<result.length;I++){

                        if(result[I].Account_Number==From_account){

                           var index_Number=I;
                        }
                    }

                    console.log("result Account : ",result);
                    console.log("result lenght : ",result.length);
                    let check_from_Account=0;
                    let condtion=false;
                    let from_Account_object=result[index_Number];
                    var Account_id=result[index_Number].id;
                    console.log("index::::",from_Account_object);

                   

                    
                    console.log("from Account in from: ",From_account,"  in Data base : ",from_Account_object.Account_Number);
                    if(result[index_Number].Account_Number==From_account){

                        console.log("BA;DBBBBBBBBB: ",from_Account_object.Balance);
                        if(from_Account_object.Balance<Amount){
                            console.log("in Amount")
                            condtion==false;
                            let Amount_not_Enough="not";
                            res.json({success:false,Amount_not_Enough});
                        }
                        else if(from_Account_object.status=='block' || from_Account_object.status=="expire"){

                            console.log("in Block  ");
                            let message="Your Account Not Active";
                            condtion=false;

                            res.json({success:false,message});
                        }
                        
                        else if(from_Account_object.card_type !=card){

                            console.log("In card");
                            console.log(from_Account_object.card_type,"  ",card);
                            // console.log("in card ");
                            let card_not_macth="not";
                            condtion=false;
                            res.json({success:false,card_not_macth});
                        }
                        else if(from_Account_object.card_status !='active'){

                            console.log("in card Type : ");
                            let message="card Not Active";

                            condtion=false;

                            res.json({success:false,message});
                        }
                        else {

                            condtion=true;

                            console.log('true t',condtion);
                        }

                        

                    }
                    else{

                        condtion=false;
                        console.log("in Fasle s ");
                    }


                    console.log("condition : ",condtion);


                    if(condtion==true){

                      

                            
                            console.log("in in in in in in in in in ");
                            Transfer_Fund_model.widthraw_from_account(From_account,Amount,(err,result)=>{

                                if(err){

                                    console.log("err",err);
                                    return db.rollback(()=>{

                                        res.json({success:false});
                                    })
                                }
                                else{

                                    console.log("in resul ruesl resul ",result);

                                    // console.log("result of widthraw:: ",result);

                                    if(result.affectedRows<=0){

                                        return db.rollback(()=>{

                                            res.json({success:false});
                                        })
                                    }
                                    else{

                                        console.log("resul resulLLLLLL ",result);
                                        Transfer_Fund_model.deposite_to_Account(To_account,Amount,(err,result)=>{


                                            if(err){

                                                console.log("er erer ere :",err);
                                                return db.rollback(()=>{

                                                    res.json({success:false});
                                                })
                                                
                                            }
                                            else{

                                                console.log("REsu REREERERER ",result);
                                                if(res.affectedRows<=0){

                                                    console.log("errr final : ",err);
                                                    res.json({success:false});
                                                }
                                                else{


                                                    Transfer_Fund_model.set_Transtion(From_account,To_account,Amount,Transaction_Time,(err,result)=>{


                                                        if(err){

                                                            console.log("ERror or ",err);
                                                            return db.rollback(()=>{

                                                                res.json({success:false});
                                                            })
                                                        }
                                                        else{


                                                              console.log("result findal : ",result);

                                                            // if Tax < 5000 not valid Tax 
                                                            if(check_Tax==false){

                                                                 return db.commit(()=>{

                                                                    res.json({success:true})
                                                                 })
                                                            }
                                                            else{

                                                              Transfer_Fund_model.Transfer_Tax(Account_id,Tax,Transaction_Time,percentage,(err,result)=>{

                                                                if(err){
                                                                    console.log("ERROR IN ",err);
                                                                    return db.rollback(()=>{

                                                                        res.json({success:false});
                                                                    })
                                                                }
                                                                else{

                                                                    console.log("ERRRR:::",err);
                                                                    if(result.affectedRows<=0){

                                                                        return db.rollback(()=>{

                                                                            res.json({success:false});
                                                                        })
                                                                    }
                                                                    else{

                                                                        console.log("REsult:::::",result);
                                                                        return db.commit(()=>{


                                                                             res.json({success:true});
                                                                        })

                                                                    }
                                                               }
                                                              })
                                                           }    


                                                        }
                                                    })
                                                  
                                                }
                                            }
                                        })
                                    }

                                }
                            })
                       
                    }
                    
                    
                  
                            
                 

                }
            }
        })
    })

}




/// get All Transaction List 


exports.All_Transaction_list=(req,res)=>{


    let limit=req.query.limit;


    if(limit===undefined || limit===""){


        // console.log("in undefine all ");

        Transfer_Fund_model.all_Transaction_list((err,result)=>{


            if(err){


                return res.json({success:false});
            }
            else{


                if(result.length==0){

                    return res.json({success:false});
                }
                else{

                    // console.log("result : ",result);

                    return res.json({success:true,result});
                }
            }
        })
    }
    else{

        // console.log("in limit",limit);

        Transfer_Fund_model.Limit_Transaction_list(limit,(err,result)=>{


            if(err){


                console.log("eRro:",err);
                return res.json({success:false});
            }
            else{


                if(result.length==0){


                    return res.json({success:false});
                }
                else{
 
                    console.log(result);

                    return res.json({success:true,result});
                }
            }
        })


    }
}


/// Search Transfer Fund By Account Number


exports.Search_Transfer_Fund_By_Account_Number=(req,res)=>{


    let Account_Number=req.body.Account_Number;


    Transfer_Fund_model.Search_Transfer_Fund_By_Account_Number(Account_Number,(err,result)=>{


       if(err){

        return res.json({success:false});
       }
       else{


         if(result.length==0){


            return res.json({success:false});
         }
         else{

            return res.json({success:true,result});
         }
       }

    })


    console.log(req.body);

}