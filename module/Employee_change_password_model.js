const db=require('../db_connection');



exports.change_password=((Employee_id,previous_password,new_password,callback)=>{


    let sql=`update user_login set password=? where Employee_id=? and password=?`;

    db.query(sql,[new_password,Employee_id,previous_password],callback);
})