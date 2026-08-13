const db=require('../db_connection');



exports.Bank_stuff_model=(user_name,Account_password,Pin_Code,Role,Branch,callback)=>{


    // const sql=`select * from Employee where role=?`;

    const sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id  inner join Branch on Branch.Branch_id=Employee.Branch_id where (Employee.role=? and user_login.user_name=? and user_login.password=? and user_login.pin_code=? and Branch.Name=?)';
    db.query(sql,[Role,user_name,Account_password,Pin_Code,Branch,],callback);
}  


///(user_login.user_name=? and user_login.password=? and user_login.pin_code=? and Branch.Name=? and Employee.role=?)
///[user_name,Account_password,Pin_Code,Branch,Role]