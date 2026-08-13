

const Bank_stuff_model=require('../module/Bank_stuff_model');
const user=require('../module/user');

exports.stuff_controller=(req,res)=>{
    // console.log(req.body);

    let user_name=req.body.user_name;
    let Account_password=req.body.Account_password;
    let Pin_Code=req.body.Pin_Code;
    let Role=req.body.Role;
    let Branch=req.body.Branch;

    var login_Time=new Date();

    var year=login_Time.getFullYear();
    var Month=login_Time.getMonth();
    var day=login_Time.getDay();
    var Hour=login_Time.getHours();
    var Manute=login_Time.getMinutes();
    var seconds=login_Time.getSeconds();
    let state='login';

    Bank_stuff_model.Bank_stuff_model(user_name,Account_password,Pin_Code,Role,Branch,(err,result)=>{


        if(err){

            console.log("Error :  ",err);
            res.json({success:false});
        }
        else{

            console.log('Result ::  ',result);

            console.log(result);
            if(result.length==0){

                // return res.send("invalide");

                res.json({success:false})
            }
            else{

                let Find_Role_in_Table=result[0].role;
                let id=result[0].Employee_id;
                let user_id=result[0].user_id;
                console.log(result);
                console.log("IDIDID",id);
                console.log("Your Role in Table :: ",Find_Role_in_Table);

                if(Find_Role_in_Table==='Employee'){

                    console.log("Your Role Employee");


                    // res.render('Bank_Employee/Employee.ejs',{id});
                    // return res.json({success:true,id:id});

                    user.Track_login(id,state,(err,result)=>{

                        if(err){

                           console.log("ERROR IN Tracking 1;",err)

                            res.json({success:false});
                        }
                        else{


                            if(result.length==0){
                                console.log("ERROR in 22 ",err)
                                res.json({success:false})
                            }
                            else{

                                let condition="Employee";
                                console.log("result in :: ",result);
                                res.json({success:true,id:id,condition});
                            }
                        }
                    })



                }
                else if(Find_Role_in_Table==='manager'){

                    // console.log("Your Role manager");


                    user.Track_login(id,state,(err,result)=>{

                        let condition='Manager';
                        if(err){

                           console.log("ERROR IN Tracking 1;",err)

                            res.json({success:false});
                        }
                        else{


                            if(result.length==0){
                                console.log("ERROR in 22 ",err)
                                res.json({success:false})
                            }
                            else{

                                console.log("result in :: ",result);
                                res.json({success:true,id:id,condition});
                            }
                        }
                    })

                }
                else if(Find_Role_in_Table==='admin'){

                     console.log("Your Role admin");
                }
                else{
                    console.log(err);
                    return res.json({success:false});
                }
            }
        }

    })

}