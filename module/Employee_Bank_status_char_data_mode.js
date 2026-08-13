
const db=require('../db_connection');

exports.Widthraw_and_deposite=((callback)=>{


    let sql=`select * from Transaction`;

    db.query(sql,callback);
   
})

exports.Transfer=((callback)=>{


    let sql=`select * from Transfer`;


    db.query(sql,callback);
});


exports.check=((callback)=>{

    let sql=`select * from check_bank`;

    db.query(sql,callback);
})


exports.Employee=((callback)=>{


    let sql='select count(Employee_id) from Employee';

    db.query(sql,callback);
    
})