
const db=require('../db_connection');


exports.Account_data=(Account_id,callback)=>{

    console.log("MODEL",Account_id)
    let sql='select Balance from Account where Account_id=?';

    db.query(sql,[Account_id],callback);
}

exports.get_widthra_And_deposite=(Account_id,callback)=>{


    let sql='select * from Transaction where Account_id=?';

    db.query(sql,[Account_id],callback);

};


exports.get_check=(Account_id,callback)=>{

    console.log("incheck model");
    let sql='select Amount , check_bank.status from check_bank inner join Account on check_bank.Account_Number=Account.Account_Number where Account.Account_id=?';

    db.query(sql,[Account_id],callback);
}

exports.get_Tranfer_Amount=(Account_id,callback)=>{


    let sql='select Transfer.Amount from Transfer inner join Account on Account.Account_Number=Transfer.from_account where Account.Account_id=?';

    db.query(sql,[Account_id],callback);


}



exports.user_profile_data=(Account_id,callback)=>{


    let sql='select * from user_login inner join Account on user_login.customer_id=Account.Account_id inner join customer on customer.customer_id=Account.Account_id where Account.Account_id=?';

    db.query(sql,[Account_id],callback);
}