
const db=require('../db_connection');


exports.Employee_Find_account_details_model=(account_number,callback)=>{


    let sql='SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id where Account.Account_Number=?';

    db.query(sql,[account_number],callback);
}