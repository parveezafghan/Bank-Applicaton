
const Remove_Emp=require("../module/Manager_Remove_Employee_model");
exports.Remove_Employee=(req,res)=>{
    let user_name=req.body.user_name;


    Remove_Emp.search_Employee(user_name,(err,result)=>{

        if(err){

            return res.json({success:false});
        }
        else{

            if(result.length==0){

                return res.json({success:false})
            }
            else{


              let Employee_id=result[0].Employee_id;

              console.log(Employee_id);
              Remove_Emp.Remove_Employee(Employee_id,(err,result)=>{

                if(err){

                    return res.json({success:false})
                }
                else{

                    if(result.affectedRows<=0){

                        return res.json({success:false})
                    }
                    else{

                        return res.json({success:true});
                    }
                }
              })

            }
        }
    })

    // console.log("data",user_name);


    // Remove_Emp.Remove_Employee(user_name,(err,result)=>{


    //     if(err){

    //         console.log("err:",err);
    //         return res.json({success:false});
    //     }
    //     else{

    //         if(result.affectedRows<=0){

    //             console.log("result:",result);
    //             return res.json({success:false});
    //         }
    //         else{

    //             console.log("result",result);
    //             return res.json({success:true});
    //         }
    //     }
    // })



}