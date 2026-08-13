const db=require('../db_connection');



exports.get_new_customer_model=(customer_id,callback)=>{

    let sql='SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id where customer.customer_id=?;';

    db.query(sql,[customer_id],callback);


}