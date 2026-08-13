// const { format } = require('mysql2');
const db=require('../db_connection');


exports.check_Account=((from,to,callbck)=>{



    // let sql='select * from Account where Account_Number=? or Account_Number=?';
    
    let sql='select * from Account  inner join Card on Account.Account_id=Card.account_id where Account.Account_Number=? or Account.Account_Number=?';

    db.query(sql,[from,to],callbck);
})


exports.widthraw_from_account=((from_Account,Amount,callbck)=>{


    let sql='update Account set Balance=Balance-? where Account_Number=?';

    db.query(sql,[Amount,from_Account],callbck);
})

exports.deposite_to_Account=((to_Account,Amount,callbck)=>{

    let sql='update Account set Balance=Balance+? where Account_Number=?';

    db.query(sql,[Amount,to_Account],callbck);

})


exports.set_Transtion=((from_account,To_Account,Amount,Transaction_Time,callbck)=>{


    let sql=`insert into Transfer(from_account,To_account,Amount,date) values(?,?,?,NOW())`;

    db.query(sql,[from_account,To_Account,Amount],callbck);
})


exports.Transfer_Tax=((Account_id,Amount,date,percentage,callback)=>{


    let source="Transfer";

    let sql=`insert into Tax(source,Amount,Account_id,tax_percentage) values(?,NOW(),?,?,?)`;


    db.query(sql,[source,Amount,Account_id,percentage],callback)
})

// get All Transaction List




exports.all_Transaction_list=((callbck)=>{


    let sql=`select * from Transfer`;



    db.query(sql,callbck);
});


exports.Limit_Transaction_list=((limit,callbck)=>{
    
    let sql=`select * from Transfer limit ${limit}`;
    db.query(sql,[limit],callbck);
})



exports.Search_Transfer_Fund_By_Account_Number=((Account_Number,callback)=>{



    let sql=`select * from Transfer where from_account=?`;


    db.query(sql,[Account_Number],callback);
    
})