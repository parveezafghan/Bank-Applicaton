
const db=require('../db_connection');

exports.Employee_list_all=((callback)=>{

    let role='Employee';
    let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where Employee.role=?';

    db.query(sql,[role],callback);


})

exports.Employee_list=((limit,callback)=>{


    let role='Employee';
    let sql=`select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where Employee.role=?  limit ${limit}`;

    db.query(sql,[role,limit],callback);
})

exports.search_Employee_by_user_name=((user_name,callback)=>{

    let role='Employee';
    let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where user_login.user_name=? and Employee.role=?';


    db.query(sql,[user_name,role],callback);
})




/// customer lsit code use node js  width mysql database 


exports.customer_all_list=((callback)=>{

    
    // let sql='select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id inner join customer on Account.Account_id=customer.Account_id';

    let sql='select * from Account inner join customer on Account.Account_id=customer.Account_id inner join Card on Account.Account_id=Card.account_id inner join user_login on customer.customer_id=user_login.customer_id';
    db.query(sql,callback);

    //  let role='Employee';
    // let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where Employee.role=?';

    // db.query(sql,[role],callback);
})


exports.customer_limit_list=((limit,callback)=>{


     
    //  let sql=`select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id limit ${limit}`;

    //  let sql=`select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id inner join customer on Account.Account_id=customer.Account_id limit ${limit}`;

      let sql=`select * from Account inner join customer on Account.Account_id=customer.Account_id inner join Card on Account.Account_id=Card.account_id inner join user_login on customer.customer_id=user_login.customer_id limit ${limit}`;
     db.query(sql,[limit],callback);

})



exports.search_customer_by_Account_Number=((Account_Number,callback)=>{

    //  let sql='select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id where Account.Account_Number=?';


    //  let sql='select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id inner join customer on Account.Account_id=customer.Account_id where Account.Account_Number=?';
       let sql='select * from Account inner join customer on Account.Account_id=customer.Account_id inner join Card on Account.Account_id=Card.account_id inner join user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=?';

     db.query(sql,[Account_Number],callback);


})