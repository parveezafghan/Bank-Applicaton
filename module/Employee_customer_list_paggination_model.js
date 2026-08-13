const db=require('../db_connection');




exports.Employee_customer_list_paggination_all_model=(callback)=>{

     let sql='SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id';
   

     db.query(sql,callback)
}


exports.Employee_customer_list_paggination_Limit_model=(limit,callback)=>{
    // var limit=1;

    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id LIMIT ${limit}`;

  console.log("limit");

  db.query(sql,[limit],callback);
}