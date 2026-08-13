const db=require('../db_connection');


exports.search_Employee=((user_name,callback)=>{

    let sql='select * from user_login where user_name=?';

    db.query(sql,[user_name],callback);
})

exports.Remove_Employee=((Emp_id,callback)=>{


    let sql='delete from Employee where Employee_id=?';

    db.query(sql,[Emp_id],callback);
})