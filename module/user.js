const db=require('../db_connection');



// exports.user=(password,user_name,callback)=>{

//          console.log("in user login")
//       db.query('select * from user_login where user_name=? ',user_name,callback);


// }


exports.userLogin=(Account_Number,user_name,password,pin_code,callback)=>{


      console.log("Account:::::",Account_Number);

      let sql=`select * from customer inner join Account on customer.Account_id=Account.Account_id INNER JOIN user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=? and (user_login.password=? and user_login.pin_code=? and user_login.user_name=?);
`
      // let sql=`select   *  from customer inner join Account on customer.Account_id=Account.Account_id INNER JOIN user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=?`;


      
      //   const sql='select   customer_id  from customer inner join Account on customer.Account_id=Account.Account_id where Account.Account_Number=? and ';

      // const sql='select * from user_login where user_name=? and password=? and pin_code=?'
      // const sql_1=`select * from Account inner join customer ON Account.Account_id=customer.customer_id inner join user_login ON user_login.customer_id=customer.customer_id where user_name=?`
      db.query(sql,[Account_Number,password,pin_code,user_name],callback);

}

exports.check_Account_Number=(Account_Number,callback)=>{

      console.log("AccountNUmber:",Account_Number)
      // const sql='select * from Account where Account_Number=?';
      const sql='select   customer_id  from customer inner join Account on customer.Account_id=Account.Account_id where Account.Account_Number=?';

      db.query(sql,[Account_Number],callback);
}

exports.Track_login=((user_id,state,callback)=>{


      console.log("in Track : ",user_id);
      let sql=`insert into Track_login_user(state,user_id,login_Time) values(?,?,NOW())`;


      db.query(sql,[state,user_id],callback);
})

exports.Track_logout=((user_id,state,callback)=>{


      let sql=`update Track_login_user set state=? , logout_Time=NOW() where user_id=? `;

      db.query(sql,[state,user_id],callback);
})


