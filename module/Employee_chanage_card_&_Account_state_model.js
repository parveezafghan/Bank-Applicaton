

const db=require('../db_connection');



/// Account Number  chanage And check

exports.check_Account=((Account_Number,callback)=>{


    let sql='select Account_type , Account_Number ,status from Account where Account_Number=?';

    db.query(sql,[Account_Number],callback);
})

exports.change_Account_state=((Account_Number,state,callback)=>{


    let sql='update Account set status=? where Account_Number=?';

    db.query(sql,[state,Account_Number],callback);
})



/// check card Number and chanage




exports.check_card_Number=((card_Number,callback)=>{


    let sql='select * from Card where card_number=?';

    db.query(sql,[card_Number],callback);
})

exports.change_card_status=((card_Number,state,callback)=>{


    let sql='update Card set card_status=? where card_number=?';

    db.query(sql,[state,card_Number],callback);
})