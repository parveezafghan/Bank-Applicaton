

const Bank_status_data_char=require('../module/Employee_Bank_status_char_data_mode');

exports.widthraw_deposite_check_and_Transfer_data=(req,res)=>{


    console.log("Real World");


    Bank_status_data_char.Widthraw_and_deposite((err,result)=>{


        if(err){

            console.log("err ",err);
        }
        else{


            // console.log(result);

            if(result.length==0){


                return res.json({success:false});
            }
            else{

               var Total_Debit=0;
               var Total_widthraw=0;

               for(let count=0;count<result.length;count++){

                  if(result[count].Transaction_type=="Debit"){

                     Total_Debit+=result[count].Amount;
                     console.log("Total:Debit:",Total_Debit);
                  }
                  else if(result[count].Transaction_type=="credit"){

                     Total_widthraw+=result[count].Amount;
                  }
               }

            //    console.log(result[0].Amount);
            //    console.log("Total Debit : ",Total_Debit);
            //    console.log("Total Widthraw : ",Total_widthraw);

             
              Bank_status_data_char.Transfer((err,result)=>{

                if(err){

                    console.log(err)

                    res.json({success:false});
                }
                else{

                    console.log('---------------------------------Transfer---------------------------');
                    console.log(result)

                    if(result.length==0){


                         return res.json({success:false});
                    }
                    else{


                        var Total_Tranfer=0;

                        for(let count=0;count<result.length;count++){


                            Total_Tranfer+=result[count].Amount;
                            console.log("Total:Transfer:",Total_Tranfer);
                        }

                        console.log("Total Transfer :",Total_Tranfer);


                        Bank_status_data_char.check((err,result)=>{


                            if(err){

                                console.log(err);

                                return res.json({success:false});
                            }
                            else{


                                console.log("-------------------------------------check-----------------");
                                console.log(result);


                                if(result.length==0){

                                    return res.json({success:false})
                                }
                                else{


                                    var Total_pend_check=0;

                                    for(let count=0;count<result.length;count++){


                                        if(result[count].status=='pending'){

                                            Total_pend_check+=result[count].Amount;
                                        }
                                    }


                                    console.log("pending check: ",Total_pend_check);

                                    Bank_status_data_char.Employee((err,result)=>{

                                        if(err){

                                            console.log(err);

                                            return res.json({success:false})
                                        }
                                        else{

                                            if(result.length==0){

                                                console.log("result:",result);
                                            }
                                            else{

                                                console.log("Employee:::::::",result)
                                                let Employee=result[0];
                                                console.log(Object.values(Employee));
                                                Employee=Object.values(Employee);
                                                // console.log(Employee[0])
                                                Employee=Employee[0];
                                                res.json({success:true,Total_Debit,Total_Tranfer,Total_widthraw,Total_pend_check,Employee});
                                                // Employee=Employee.Object;
                                                // console.log(Employee);
                                            }
                                        }
                                    })
                                    // res.json({success:true,Total_Debit,Total_Tranfer,Total_widthraw,Total_pend_check});
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