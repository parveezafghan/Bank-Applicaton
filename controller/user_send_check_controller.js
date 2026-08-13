
const user_send_check=require('../module/user_send_check_model');
const db=require('../db_connection');
exports.user_check=(req,res)=>{

    console.log(req.body);

    let Account_Number=req.body.Account_Number;
    let check_Number=req.body.check_Number;
    let payee_To=req.body.payee_To;
    let Amount=req.body.Amount;
    let Account_id=req.body.Account_id;
    let expire_date=req.body.expire_date;
    let expire_time=req.body.expire_time;


    let data=expire_date.split('-');
    let year=data[0];
    let month=data[1];
    let day=data[2];
    let Time=expire_time.split(':');
    let hour=Time[0];
    let manute=Time[1]

    let date=new Date();
    let issue_date=`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    let expire_data_and_Time=`${year}-${month}-${day}-${hour}-${manute}`;

    var message;
    var state='pending';

  
    
    db.beginTransaction(err=>{


        user_send_check.check_Account_id(Account_id,Account_Number,(err,reasult)=>{

            if(err){

                console.log("err:",err);
                res.json({success:false});
            }
            else{

                if(reasult.length==0){

                    console.log("not Find user :",reasult);
                    message="Account Not Find"
                    res.json({success:false,message});
                }
                else{

                    console.log("result:",reasult);

                    if(reasult[0].Balance<Amount){

                        message="Your Account Amount is Not Enough";
                        res.json({success:false,message})
                    }
                    else if(reasult[0].status !='active'){

                        message="Your Account Not Active";

                        res.json({success:false,message});
                    }


                    // if(check_state==false){

                        user_send_check.user_check(Account_Number,check_Number,payee_To,Amount,issue_date,expire_data_and_Time,state,(err,reasult)=>{


                            if(err){

                                console.log("err",err);

                               return db.rollback(()=>{

                                    res.json({success:false});
                                })
                            }
                            else{

                                console.log("result:",reasult);

                                if(reasult.affectedRows<=0){

                                    db.rollback(()=>{

                                        res.json({success:false})
                                    })
                                    
                                }
                                else{

                                    db.commit(()=>{

                                        res.json({success:true});
                                    })

                                }

                            }

                        })

                    // }

                }
            }
        })
    })
    
   

}