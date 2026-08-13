
const db=require("../db_connection");


exports.add_Employee_Details=((First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id,Provience,District,zip_code,callback)=>{
let role='Employee';
let sql='insert into Employee(First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id,Provience,District,zip_code,role) values(?,?,?,?,?,?,?,?,?,?,?)';

db.query(sql,[First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id,Provience,District,zip_code,role],callback);

})


exports.search_new_Employee_id=((First_name,last_name,zip_code,Number,Branch_id,Email,callback)=>{

    let role="Employee";
    console.log('in Modle')
    let sql='select * from Employee where First_name=? and last_name=? and zip_code=? and role=? and Phone=? and Email=? and Branch_id=?';    
    db.query(sql,[First_name,last_name,zip_code,role,Number,Email,Branch_id],callback);
})

exports.add_Emplyee_user_login_details=((password,pin_code,Employee_id,user_name,callback)=>{

    let sql='insert into user_login (password,pin_code,Employee_id,user_name) values(?,?,?,?)';
    db.query(sql,[password,pin_code,Employee_id,user_name],callback);
})

exports.Add_Employee_salary=((Employee_id,salary,callback)=>{

    let sql='insert into employee_salary (Employee_id,basic_salary) values(?,?)';


    db.query(sql,[Employee_id,salary],callback);
})