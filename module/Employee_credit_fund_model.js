
const db=require('../db_connection');


exports.Employee_Credit_fund_model_check_Account=(Account_Number,card_type,callback)=>{


    console.log("in Credit Model");
    // let sql=`update Card join Account on Account.Account_Id=Card.account_id set Account.Balance=Account.Balance-?  where (Account.Account_Number=? and Card.card_type=?) `;

    let sql='select * from Card join Account on Account.Account_Id=Card.account_id   where (Account.Account_Number=? and Card.card_type=?) ';

    db.query(sql,[Account_Number,card_type],callback);

}


exports.Employee_Credit_fund_model_Transction=(Account_id,Employee_id,Amount,Transaction_type,Transtion_date,callback)=>{


    console.log("in functin to account  model :: ");
    let sql='insert into Transaction(Account_id,Employee_id,Amount,Transaction_type,date) values(?,?,?,?,?)';


    db.query(sql,[Account_id,Employee_id,Amount,Transaction_type,Transtion_date],callback);

}

exports.Employee_credit_fund_to_Account=(Amount,Account_Number,callback)=>{


    
    console.log('functing to Transction ')
    let sql='update Account set Balance=Balance-? where Account_Number=?';


    db.query(sql,[Amount,Account_Number],callback);


}


// Add TAx


exports.Add_Tax=(Amount,Account_id,tax_percentage,date,callback)=>{


    console.log("inTAXTAXTAX");
    let source='credit';
    let sql=`insert into Tax(source,date,Amount,Account_id,tax_percentage) values(?,?,?,?,?)`;

    
   db.query(sql,[source,date,Amount,Account_id,tax_percentage],callback);
}