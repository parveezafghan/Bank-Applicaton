
const db=require('../db_connection');


exports.change_password_=((user_id,previous_password,new_password,callback)=>{


    console.log("in change passwrod model;")
    // let sql='update user_login set password=? where password=? and user_id=?';
     let sql=`update user_login set password=? where customer_id=? and password=?`;

    db.query(sql,[new_password,user_id,previous_password],callback);
})