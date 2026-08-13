const db=require('../db_connection');


exports.Account_Details=((Account_Number,callback)=>{

    // let sql='select * from Account inner join user_login  on  Account.Account_id=user_login.customer_id where Account.Account_Number=?';
    let sql='select * from Account INNER JOIN customer on Account.Account_id=customer.Account_id inner join user_login on user_login.customer_id=customer.customer_id where Account.Account_Number=?';
    
    db.query(sql,[Account_Number],callback);
})


exports.Employee_Account_Details=((user_name,callback)=>{


    let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where user_login.user_name=?';

    db.query(sql,[user_name],callback);
})