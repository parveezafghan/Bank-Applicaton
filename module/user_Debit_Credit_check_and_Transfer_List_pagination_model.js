const db=require('../db_connection');


exports.get_10_deposite_records=((Account_id,callback)=>{

    let Transaction_type='Debit';
    let limit=10;
    let sql=`select * from  Transaction where Account_id=? and Transaction_type=? LIMIT ${limit}`;

    db.query(sql,[Account_id,Transaction_type],callback);
});




exports.get_all_Deposite_Records=((Account_id,callback)=>{

    let Transaction_type='Debit';
    let sql='select * from Transaction where Account_id=? and Transaction_type=?';

    db.query(sql,[Account_id,Transaction_type],callback);

})

exports.get_limit_Deposite_Records=((Account_id,limit,callback)=>{

    let Transaction_type="Debit";
    let sql=`select * from Transaction where Account_id=? and Transaction_type=? LIMIT ${limit}`;

    db.query(sql,[Account_id,Transaction_type,limit],callback);

})



exports.get_10_Widthraws_Records=((Account_id,callback)=>{


    let Transaction_type='credit';
    let limit=10;
    let sql=`select * from Transaction where Account_id=? and Transaction_type=?  LIMIT ${limit}`;

    db.query(sql,[Account_id,Transaction_type],callback);
})


exports.get_all_Widthraw_Records=((Account_id,callback)=>{

    let Transaction_type="credit";

    let sql=`select * from Transaction where Account_id=? and Transaction_type=? `;

    db.query(sql,[Account_id,Transaction_type],callback);
})

exports.get_limit_Widthraw_Records=((Account_id,Limit,callback)=>{

    let Transaction_type="credit";
    let sql=`select * from Transaction where Account_id=? and Transaction_type=? LIMIT ${Limit}`;

    db.query(sql,[Account_id,Transaction_type],callback);
})


exports.get_10_checks_Records=((Account_id,callback)=>{

    let limit=10;
    let sql=`select check_bank.check_No ,check_bank.issue_date,check_bank.payee_name ,check_bank.Amount ,check_bank.status , check_bank.check_expire_date_and_Time,Account.Account_Number from check_bank inner join Account on check_bank.Account_Number=Account.Account_Number where Account.Account_id=? LIMIT ${limit} `; 

    db.query(sql,[Account_id],callback);
})


exports.get_all_checks_Record=((Account_id,callback)=>{


     let sql=`select check_bank.check_No ,check_bank.issue_date,check_bank.payee_name ,check_bank.Amount ,check_bank.status , check_bank.check_expire_date_and_Time,Account.Account_Number from check_bank inner join Account on check_bank.Account_Number=Account.Account_Number where Account.Account_id=?`; 

     db.query(sql,[Account_id],callback);
    

})


exports.get_limit_check_Records=((Account_id,limit,callback)=>{


     let sql=`select check_bank.check_No ,check_bank.issue_date,check_bank.payee_name ,check_bank.Amount ,check_bank.status , check_bank.check_expire_date_and_Time,Account.Account_Number from check_bank inner join Account on check_bank.Account_Number=Account.Account_Number where Account.Account_id=? LIMIT ${limit}`; 
     db.query(sql,[Account_id],callback);


})




exports.user_search_check_by_status=((Account_Id,status,callback)=>{


     let sql=`select check_bank.check_No ,check_bank.issue_date,check_bank.payee_name ,check_bank.Amount ,check_bank.status , check_bank.check_expire_date_and_Time,Account.Account_Number from check_bank inner join Account on check_bank.Account_Number=Account.Account_Number where Account.Account_id=? and check_bank.status=? `; 
     db.query(sql,[Account_Id,status],callback);

})



exports.get_10_Transfer_records=((Account_id,callback)=>{

    let limit=10;
    // let sql=`select * from  Transaction where Account_id=? and Transaction_type=? LIMIT ${limit}`;


    let sql=`select * from Account inner join Transfer on Account.Account_Number=Transfer.from_account where Account.Account_id=? LIMIT ${limit}`;

    db.query(sql,[Account_id],callback);
});


exports.get_all_Transfer_Record=((Account_id,callback)=>{


    let sql=`select * from Account inner join Transfer on Account.Account_Number=Transfer.from_account where Account.Account_id=? `;
    db.query(sql,[Account_id],callback);

})


exports.get_limit_Transfer_Records=((Account_id,limit,callback)=>{



    let sql=`select * from Account inner join Transfer on Account.Account_Number=Transfer.from_account where Account.Account_id=? LIMIT ${limit} `;

    db.query(sql,[Account_id],callback);

})