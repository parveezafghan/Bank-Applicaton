const db=require('../db_connection');



exports.Employee_check_Account_card_model=(Account_Number,card,callback)=>{


    let sql='select * from Card join Account on Account.Account_Id=Card.account_id where (Account.Account_Number=? and Card.card_type=?)';


    db.query(sql,[Account_Number,card],callback);

}

exports.Employee_Debit_Amount_To_Account_model=(Account_Number,Amount,callback)=>{


    let sql='update Account set Balance=Balance+? where Account_Number=?';

    db.query(sql,[Amount,Account_Number],callback);

}

exports.Employee_Debit_Amount_To_Transaction_model=(Account_Id,Employee_id,Amount,Transaction_type,Transtion_date,callback)=>{


    let sql='insert into Transaction(Account_id,Employee_id,Amount,Transaction_type,date)values(?,?,?,?,?)';

    db.query(sql,[Account_Id,Employee_id,Amount,Transaction_type,Transtion_date],callback);

}


// add Tax

exports.add_Tax=((Account_id,Amount,percentage,date,callback)=>{


    let source='debit';
    let sql=`insert into Tax(source,date,Amount,Account_id,tax_percentage) values(?,?,?,?,?)`;

    db.query(sql,[source,date,Amount,Account_id,percentage],callback);
})