const { Employee } = require('../controller/Manger_Router_controller');
const db=require('../db_connection');


exports.get_Current_Employee_Branch_id=((Employee_id,callback)=>{


    console.log("Emp id id : ",Employee_id);
    let sql='select Branch_id from Employee where Employee_id=?';

    db.query(sql,[Employee_id],callback);
})

exports.get_all_Employee_of_single_Branch=((Branch_id,callback)=>{

    let role='Employee';

    let sql='select Employee_id , First_name,last_name from Employee where Branch_id=? and role=?';

    db.query(sql,[Branch_id,role],callback);
})



exports.Take_Attendence_by_Manager=((Employee_id,status,callback)=>{


    let sql='insert into Employee_Attendence(Employee_id,status,Attendence_date) values(?,?,NOW()) ';

    db.query(sql,[Employee_id,status],callback);

})




exports.get_Employee_id_and_check_First_Name_last_Name=((Branch_id,First_Name,callback)=>{

    let role='Employee';
    let sql='select Employee_id from Employee where Branch_id=? and First_Name=? and role=?';

    db.query(sql,[Branch_id,First_Name,role],callback);
})

exports.update_Attendenc_by_First_Name=((Employee_id,status,callback)=>{


    let sql='update Employee_Attendence set status=? , Attendence_date=NOW() where Employee_id=?';

    db.query(sql,[status,Employee_id],callback);

})