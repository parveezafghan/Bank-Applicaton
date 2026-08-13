const db=require('../db_connection');


// exports.Delete_widthraw_Data=((Transaction_id,callback)=>{

//     let sql='delete form Transaction where Transaction_id=?';

//     db.query(sql,[Transaction_id],callback);
// })


exports.Delete_widthraw_Data=(Transaction_id,callback)=>{

      let sql='delete from Transaction where Transaction_id=?';

    db.query(sql,[Transaction_id],callback);

}


exports.Edit_Widthraw=(Account_Number,Amount,Transaction_Type,Transaction_id,callback)=>{

  let sql='update Transaction set Amount=? , Transaction_type=?  where Transaction_id=?';

  db.query(sql,[Amount,Transaction_Type,Transaction_id],callback);
}


exports.delete_Transaction_by_pagination=((Transfer_id,callback)=>{


  let sql='delete from Transfer where Transfer_id=?';

  db.query(sql,[Transfer_id],callback);

  
})


exports.Edit_Transfer_Transaction=((from_Account,To_Account,Amount,Transfer_id,callback)=>{


  let sql='update Transfer set from_account=? , To_account=? , Amount=? where Transfer_id=?';

  db.query(sql,[from_Account,To_Account,Amount,Transfer_id],callback);
})




