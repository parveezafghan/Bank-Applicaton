
const db=require("../db_connection");


exports.Delete_Account=((Accout_Number,callback)=>{


    let sql='delete from Account where Account_Number=?';

    db.query(sql,[Accout_Number],callback);

});



exports.get_Data_for_Edit_Customer=((Account_Number,callback)=>{


      let sql='select * from Account inner join customer on Account.Account_id=customer.Account_id inner join Card on Account.Account_id=Card.account_id inner join user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=?';

     db.query(sql,[Account_Number],callback);
})



/// Edit customer /Account / card And login 



exports.Edit_Account_info=((Account_Number,Amount,Branch_id,Account_state,Account_Type,callback)=>{


    let sql='update Account set Balance=? , Branch_id=?,Account_type=? , status=? where Account_Number=?';

    db.query(sql,[Amount,Branch_id,Account_Type,Account_state,Account_Number],callback);
})


exports.check_Account_And_get_Account_id=((Account_Number,callback)=>{

    let sql='select * from Account where Account_Number=?';

    db.query(sql,[Account_Number],callback);
})

exports.Edit_customer_info=((Account_id,First_Name,Last_Name,F_Name,Eamil,Mobile_Number,callback)=>{


   let sql='update customer set Name=? , Last_Name=? , Father_Name=?,Eamil=? ,Mobile_number=? where Account_id=?';

   db.query(sql,[First_Name,Last_Name,F_Name,Eamil,Mobile_Number,Account_id],callback);
})


exports.Edit_card_info=((Account_id,card_Number,card_type,card_state,callback)=>{

    let sql='update Card set card_number=? , card_type=? , card_status=? where account_id=?';

    db.query(sql,[card_Number,card_type,card_state,Account_id],callback);


})

exports.customer_id=((Account_id,callback)=>{


    let sql='select * from customer where customer_id=?';


    db.query(sql,[Account_id],callback);

})



exports.Edit_user_login_info=((customer_id,password,pin_code,user_name,callback)=>{


    let sql='update user_login set password=? , pin_code=? , user_name=? where customer_id=?';

    db.query(sql,[password,pin_code,user_name,customer_id],callback);
})