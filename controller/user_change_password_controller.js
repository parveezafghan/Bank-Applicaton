
const user_change_passwrod=require('../module/user_change_password_model');
const db=require('../db_connection');



exports.change_password=(req,res)=>{


//   console.log(req.body);
let Previous_Password=req.body.Previous_Password;
let new_password=req.body.new_password;
let user_id=req.body.user_id;

db.beginTransaction(err=>{


user_change_passwrod.change_password_(user_id,Previous_Password,new_password,(err,result)=>{


    if(err){

        console.log("rerr:",err);

       return db.rollback(()=>{

            res.json({success:false})

        })
        
    }
    else{

        if(result.affectedRows<=0){

            console.log("errr:",err);
            

          return  db.rollback(()=>{

              res.json({success:false})
            })
        }
        else{

            console.log("result:",result);
            

            return db.commit(()=>{

             res.json({success:true});

            })
        }
    }
})
})
}