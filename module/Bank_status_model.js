
let db=require('../db_connection');


exports.Bank_status_Balance=((callback)=>{

    console.log("balanc model");

    let sql='select Balance from Account';

    db.query(sql,callback);
})


exports.Bank_widthraw_model=((callback)=>{


    let sql='select Amount ,Transaction_type from Transaction';

    db.query(sql,callback);
})


exports.Transfer_Amount_model=((callback)=>{


    let sql='select Amount from Transfer';

    db.query(sql,callback);
})


exports.check_model=((callback)=>{


    let sql='select Amount from  check_bank';


    db.query(sql,callback);


})


exports.Account_model=((callback)=>{


    let sql='select count (Account_id) from Account';

    db.query(sql,callback);
})


exports.card_model=((callback)=>{


    let sql='select count(id) from Card';

    db.query(sql,callback);
})


// Bank status data form barchart


exports.Bank_status_Account_Amount=((callback)=>{


    let sql=`select Balance from Account`;


    db.query(sql,callback);
})