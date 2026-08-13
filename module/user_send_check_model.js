
const db=require('../db_connection');



exports.check_Account_id=((Account_id,Account_Number,callback)=>{

    let sql='select * from Account where Account_Number=?';

    db.query(sql,[Account_Number],callback);
})
exports.user_check=((Account_Number,check_Number,payee_To,Amount,issue_date,expire_date,state,callback)=>{


    let sql='insert into check_bank (check_No,Account_Number,payee_name,Amount,status,issue_date,check_expire_date_and_Time) values(?,?,?,?,?,?,?)';

    db.query(sql,[check_Number,Account_Number,payee_To,Amount,state,issue_date,expire_date,],callback);

    
})
