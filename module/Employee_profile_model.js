
const db=require('../db_connection');



exports.Employee_Profile_data=(Employee_id,callback)=>{


    let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where Employee.Employee_id=?';

    db.query(sql,[Employee_id],callback);
}