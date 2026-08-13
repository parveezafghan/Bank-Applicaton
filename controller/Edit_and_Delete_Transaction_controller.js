
Edit_And_Delete_Transaction=require("../module/Edit_and_Delete_Transaction_model");

exports.Delete_Widthraw_data=(req,res)=>{

    let id=req.query.id;

    // console.log(id);

    Edit_And_Delete_Transaction.Delete_widthraw_Data(id,(err,result)=>{

        if(err){

            console.log("err",err);
            return res.json({success:false});
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




exports.Edit_widthraw=(req,res)=>{


    console.log(req.body);
    let Account_Number=req.body.Account_Number;
    let Amount=req.body.Amount;
    let Transaction_id=req.body.Transaction_id;
    let Transaction_type=req.body.Transaction_type;

    console.log(Transaction_type)
    Edit_And_Delete_Transaction.Edit_Widthraw(Account_Number,Amount,Transaction_type,Transaction_id,(err,result)=>{


        if(err){

            console.log("err",err);

            return res.json({success:false});
        }
        else{

            if(result.affectedRows<=0){

                console.log("result",result);

                return res.json({success:false})
            }
            else{

                console.log("result:",result);
                
                return res.json({success:true});
            }
        }

    })
}




exports.delete_Transaction_by_pagination=(req,res)=>{


    let Transfer_id=req.query.id;


    Edit_And_Delete_Transaction.delete_Transaction_by_pagination(Transfer_id,(err,result)=>{


        if(err){


            console.log("err",err);

            return res.json({success:false});
        }
        else{

            if(result.affectedRows<=0){

                console.log("result",result);
                return res.json({success:false});
            }
            else{

                console.log("result:",result);

              return   res.json({success:true});
            }
        }
    })

}




exports.Edit_Transfer_Transaction=(req,res)=>{


  console.log(req.body);


  let from_Account=req.body.from_Accont;
  let To_Account=req.body.To_Account;
  let Amount=req.body.Amount;
  let Transfer_id=req.body.Transfer_id;

  
  Edit_And_Delete_Transaction.Edit_Transfer_Transaction(from_Account,To_Account,Amount,Transfer_id,(err,result)=>{

    if(err){

        console.log("err:",err);

        return res.json({success:false});
    }
    else{


        if(result.affectedRows<=0){

            console.log("result:",result);
            return res.json({success:false});
        }
        else{


            console.log("result:",result);

            return res.json({success:true});
        }
    }
  })

}