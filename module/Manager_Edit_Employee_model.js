const db=require('../db_connection');


exports.Delete_Employee=((Employee_id,callback)=>{


    let sql='delete from Employee where Employee_id=?';

    db.query(sql,[Employee_id],callback)
})


exports.search_Employee_Data=((Employee_id,callback)=>{

    let sql='select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id where Employee.Employee_id=?';


    db.query(sql,[Employee_id],callback);
})


exports.Edit_Employee_info=((First_Name,Last_Name,F_Name,Eamil,Numbers,Employee_id,callback)=>{


   let sql='update Employee set First_name=? , last_name=? , Phone=? , Email=? where Employee_id=?';

   db.query(sql,[First_Name,Last_Name,Numbers,Eamil,Employee_id],callback);
});


exports.Edit_Employee_login_info=((pin_code,user_name,password,Employee_id,callback)=>{


    let sql='update user_login set password=? , pin_code=? , user_name=?  where Employee_id=? ';

    db.query(sql,[password,pin_code,user_name,Employee_id],callback);
})