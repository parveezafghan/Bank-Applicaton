
const db=require('../db_connection');


exports.Employee_Remove_customer_model=(account_no,callback)=>{


    let sql='delete from Account where Account_Number=?';

    
    db.query(sql,[account_no],callback);
}