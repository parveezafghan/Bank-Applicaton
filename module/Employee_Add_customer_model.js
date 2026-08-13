
const db=require('../db_connection');

exports.Create_Account_model=(Branch,Account_Type,Amount,Account_Number,status,callback)=>{


console.log("in Account ",Branch,Account_Type,Amount,Account_Number);
   let sql='insert into Account(Branch_id,Account_type,Balance,Account_Number,status) values(?,?,?,?,?)';


   db.query(sql,[Branch,Account_Type,Amount,Account_Number,status],callback);    
}

exports.get_Account_id=((Account_Number,callback)=>{

     let sql='select * from Account where Account_Number=?';
    db.query(sql,[Account_Number],callback);


})
exports.get_customer_id=((Account_id,callback)=>{

    let sql='select * from customer where Account_id=?';
    db.query(sql,[Account_id],callback);
})


exports.Create_Bank_card_model=(card_number,account_id,card_type,issue_date,expire_date,callback)=>{

    let card_status='active';
    console.log("in card",card_number,account_id,card_type,issue_date,expire_date);
    let sql='insert into Card(card_number,account_id,card_type,issue_date,expire_date,card_status) values(?,?,?,Now(),?,?)';

    console.log('in card end');
    db.query(sql,[card_number,account_id,card_type,expire_date,card_status],callback);

}



exports.Create_customer_model=(Account_id,Name,Last_Name,Father_Name,Eamil,Mobile_number,Birth_date,city,district,Gender,callback)=>{

    console.log("in customer ");
    let sql='insert into customer(Account_id,Name,Last_Name,Father_Name,Eamil,Mobile_number,city,district,Gender) values(?,?,?,?,?,?,?,?,?)';


    db.query(sql,[Account_id,Name,Last_Name,Father_Name,Eamil,Mobile_number,city,district,Gender],callback);


}

exports.create_user_login=(password,pin_code,user_name,customer_id,callback)=>{

    console.log('in user login');
    console.log(customer_id);
    let sql='insert into user_login(password,pin_code,user_name,customer_id) values(?,?,?,?)';

    db.query(sql,[password,pin_code,user_name,customer_id],callback);


}


/// Add Tax To Tax Table 


exports.Add_Tax=((Account_id,Amount,date,callback)=>{

    let source="Create Account";
    let sql=`insert into Tax(source,date,Amount,Account_id) values(?,Now(),?,?)`;


    db.query(sql,[source,Amount,Account_id],callback);

})