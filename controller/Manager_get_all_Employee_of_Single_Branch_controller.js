
const single_Branch_all_Employee=require("../module/Manager_Single_Branch_all_Employee_model");

exports.get_all_Employee_of_single_Branch=(req,res)=>{

    console.log(req.query.id);


    let Employee_id=req.query.id;


     single_Branch_all_Employee.get_Current_Employee_Branch_id(Employee_id,(err,result)=>{




        if(err){

            return res.json({success:false});
        }
        else{

            if(result.length===0){


                return res.json({success:false});
            }
            else{


                console.log("result:::::",result);

                let Branch_id=Object.values(result[0]);
                Branch_id=Branch_id[0];


                console.log('----------------------:',Branch_id);
                single_Branch_all_Employee.get_all_Employee_of_single_Branch(Branch_id,(err,result)=>{



                    if(err){

                        return res.json({success:false});
                    }
                    else{

                        console.log("result:-------",result);

                        if(result.length==0){


                            return res.json({success:false});
                        }
                        else{

                            return res.json({success:true,result});
                        }
                    }
                })
                // console.log("Branch_id",Branch_id[0]);

            }
        }
     })

}


//     single_Branch_all_Employee.get_all_Employee_of_single_Branch(Branch_id,(err,result)=>{


//         if(err){


//            try{

//             console.log('err',err);
//            }catch(sql){

//             console.log(err)

//            }
//         }
//         else{

//             console.log(result);
//             if(result.length==0){

//                 return res.json({success:false});
//             }
//             else{

//                try{

//                   return res.json({success:true,result});
//                }catch(sql){

//                 console.log("Exception",sql);
//                }
//             }
//         }
//     })
// }



exports.Take_Attendence_by_Manager=(req,res)=>{


    // console.log("in DATA")
    // console.log(req.body);

    console.log('------------------------------------sfsdfs-------',req.body);
    let data=req.body.data;

    console.log("data",data);

    for(let I=0;I<data.length;I++){

        // console.log(data[I].employee);

        var Employee_id=data[I].employee;
        var status=data[I].status;

        console.log("Emp:",Employee_id);
        console.log("statsu:",status);


    
    // }
    // data=[0];
    // Employee_id=data[0].employee;
    // status=data[0].status;

        single_Branch_all_Employee.Take_Attendence_by_Manager(Employee_id,status,(err,result)=>{


            console.log(result)
            if(err){

                // console.log("err",err);

                // return res.json({success:false});

                try{

                    console.log("err",err);

                  return res.json({success:false});
                    

                }
                catch(err){

                    console.log(err);

                }
            }
            else{

                if(result.affectedRows<=0){

                    return res.json({success:false});
                }
                else{

                    // return res.json({success:true});

                    try{

                         return res.json({success:true});
                    }
                    catch(result){

                        console.log(result);

                    }
                }
            }
        })
    }
}




// this Section use for update Attendence


exports.Employee_Attedence_by_user_Name=(req,res)=>{


    let user_Name=req.body.user_Name;
    let Attendence_type=req.body.Attendence_type;
    let Employee_id=req.body.id;


    single_Branch_all_Employee.get_Current_Employee_Branch_id(Employee_id,(err,result)=>{


        if(err){

            console.log("err",err);


            return res.json({success:false});
        }
        else{


            console.log("result:",result);
            if(result.length==0){


                return res.json({success:false});
            }
            else{


                let Branch_id=result[0];
                Branch_id=Object.values(Branch_id);
                Branch_id=Branch_id[0]
                console.log(Branch_id);

                single_Branch_all_Employee.get_Employee_id_and_check_First_Name_last_Name(Branch_id,user_Name,(err,result)=>{


                    if(err){

                        console.log("err",err);


                        return res.json({success:false});
                    }
                    else{

                        console.log(result);
                        if(result.length==0){


                            return res.json({success:false});
                        }
                        else{

                            console.log(result);

                            let Employee_id=result[0];

                            Employee_id=Object.values(Employee_id);
                            Employee_id=Employee_id[0];
                            console.log(Employee_id);

                            single_Branch_all_Employee.update_Attendenc_by_First_Name(Employee_id,Attendence_type,(err,result)=>{


                                if(err){

                                    console.log("eer",err)

                                    return res.json({success:false});
                                }
                                else{

                                    if(result.affectedRows<=0){


                                        return res.json({success:false});
                                    }
                                    else{

                                        return res.json({success:true});
                                    }
                                }
                            })
                            // return res.json({success:true})
                        }
                    }
                })
                // console.log(result)
                // return res.json({success:true,result});
            }
        }
    })

}