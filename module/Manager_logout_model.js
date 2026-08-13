const db=require('../db_connection');



exports.Track_logout=((user_id,state,callback)=>{

      let sql=`update Track_login_user set state=? , logout_Time=NOW() where user_id=? `;

      db.query(sql,[state,user_id],callback);
})