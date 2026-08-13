
let Bank_status_model=require('../module/Bank_status_model');
let Employee_status=require('../module/Employee_Bank_status_char_data_mode');
exports.Balance_controller=(req,res)=>{


     Bank_status_model.Bank_status_Balance((err,result)=>{

        
        if(err){
            res.json({success:false});
        }
        else {

            if(result.length==0){

                res.json({success:false});
            }
            else{


                let total=0;
                result.forEach(element => {

                    let data=element.Balance;
                    total=total+data;
                });
                

                res.json({success:true,total})
            }
        }
     })
    
}

exports.Widthraw_controller=(req,res)=>{

    let Widthraw=0;
    let Deposite=0;

    Bank_status_model.Bank_widthraw_model((err,result)=>{


        if(err){

            res.json({success:false})
        }
        else{

            if(result.length==0){

                res.json({success:false});

            }
            else{

                
                for(let I=0;I<result.length;I++){

                    
                    if(result[I].Transaction_type=="Debit"){

                        Deposite+=result[I].Amount;

                    }
                    
                    else if(result[I].Transaction_type=='credit'){

                        console.log(result[I].Transaction_type);

                        Widthraw+=result[I].Amount;
                    }
                    

                }
                console.log("widthraw:",Widthraw);
                console.log("Deposite:",Deposite);
                res.json({success:true,Deposite,Widthraw});
            }
        }
    })
}



exports.Transfer_Amount=(req,res)=>{

    Bank_status_model.Transfer_Amount_model((err,result)=>{


        if(err){

            res.json({success:false});
        }
        else{

            if(result.length==0){

                res.json({success:false});
            }
            else{


                 let Transfer=0;

                 for(let I=0;I<result.length;I++){

                    Transfer+=result[I].Amount;
                 };


                 res.json({success:true,Transfer});

                 

                
            }
        }
    })

}



exports.check=(req,res)=>{


    Bank_status_model.check_model((err,result)=>{


        if(err){

            res.json({success:false});
        }
        else{


            if(result.length==0){


               res.json({success:false});


            }
            else{

                let Total_check=0;


                for(let I=0;I<result.length;I++){

                    Total_check+=result[I].Amount;
                }
               
                res.json({success:true,Total_check});
            }
        }
    })
}



exports.Account=(req,res)=>{

    Bank_status_model.Account_model((err,result)=>{


        if(err){

            res.json({success:false});
        }
        else{

            

            if(result.length==0){


                res.json({success:false});
            }
            else{


                let Account=result[0];

                Account=Object.values(Account);

                Account=Account[0];
            
                res.json({success:true,Account});
            }
        }
    })
}


exports.card=(req,res)=>{


    Bank_status_model.card_model((err,result)=>{


        if(err){

           
            res.json({success:false});
        }
        else{

            

            if(result.length==0){


                res.json({success:false});
            }
            else{

                let card=result[0];
                card=Object.values(card);
                card=card[0];
                
                res.json({success:true,card});
            }

        }
    })
}



//// get data form barchart 



exports.Bank_status_data=(req,res)=>{


    console.log("in dfsaaaaaaaaaaaaaaaaaaaaaaaa")
    Bank_status_model.Bank_status_Account_Amount((err,result)=>{


        if(err){

            console.log("err,",err);
        }
        else{


            console.log("result",result);


            Bank_status_model.Bank_status_Widthraw_and_deposite((err,result)=>{

                if(err){

                    console.log("err in two ",err);
                }
                else{

                    console.log("result : ",result);



                }
            })
        }
    })
}

exports.get_Employee=(req,res)=>{


    Employee_status.Employee((err,result)=>{


        if(err){

            console.log('err',err);

            return res.json({success:false})
        }
        else{

            if(result.length==0){

                console.log("result:",result);
                
            }
            else{

                // console.log("Em:-------------------------------------------------------------------------------------------------------------------",result);

                let Employee=Object.values(result[0]);
                 Employee=Employee[0]
                 console.log("Emp:",Employee);
                 return res.json({success:true,Employee});
            }
        }

    })

}