const db=require('../db_connection');


exports.pay_check_model=((check_Number,Account_Number,Amount,check_pay_To,callback)=>{



    // let sql='select * from check_bank where check_No=? and Account_Number=? and payee_name=? and Amount=?'
    let sql=`select * from check_bank inner join Account on Account.Account_Number=check_bank.Account_Number where check_bank.check_No=? and check_bank.Account_Number=? and check_bank.payee_name=? and check_bank.Amount=?`;

    db.query(sql,[check_Number,Account_Number,check_pay_To,Amount],callback)
})



exports.clear_check=((Account_No,Amount,callback)=>{


    let sql='update Account set Balance=Balance-? where Account_Number=?';

    db.query(sql,[Amount,Account_No],callback);
})

exports.clear_check_status=((check_No,Accout_No,payee_name,callback)=>{

    let status="cleared";
    let sql='update check_bank set status=? where check_No=? and Account_Number=? and payee_name=?';


    db.query(sql,[status,check_No,Accout_No,payee_name],callback);
})


exports.canceled_check=((check_No,Account_No,payee_name,Amount,callback)=>{


    let status='cancelled';
    let sql='update check_bank set status=? where check_No=? and Account_Number=? and payee_name=? and Amount=?';


    db.query(sql,[status,check_No,Account_No,payee_name,Amount],callback);

})



/// add Tax


exports.add_Tax=((Account_id,Amount,percentage,date,callback)=>{

    let source="check payment";

    let sql=`insert into Tax(source,date,Amount,Account_id,tax_percentage) values(?,?,?,?,?)`;


    db.query(sql,[source,date,Amount,Account_id,percentage],callback);
})

// exports.canceled_check_amount_add_back_To_Account=((Accout_No,Amount,callback)=>{


//     let sql='update Account set Balance=Balance+? where Accout_Number=?';
//     db.query(sql,[Amount,Accout_No],callback);
// })