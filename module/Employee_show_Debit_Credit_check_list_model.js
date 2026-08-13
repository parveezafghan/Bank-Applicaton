
const { check } = require('../controller/Bank_status_controller');
let db=require('../db_connection');


exports.Employee_show_Debit_model=(callback)=>{

   let Transaction_type="Debit"
    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where Transaction.Transaction_type=? order by Transaction.Transaction_id DESC `;
    db.query(sql,[Transaction_type],callback);

}

exports.Employee_show_Debit_limit_model=(limit,callback)=>{


    let Transaction_type='Debit';
    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where Transaction.Transaction_type=? order by Transaction.Transaction_id DESC limit ${limit}   `;
    db.query(sql,[Transaction_type,limit],callback)
}


exports.Empoyee_search_customer_Debit_model=(Account_Number,callback)=>{


    let Transaction_type="Debit";

    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where (Account.Account_Number=? and Transaction.Transaction_type=?) order by Transaction.Transaction_id DESC`;
    
    db.query(sql,[Account_Number,Transaction_type],callback);

}

// exports.Employee_show_Credit_model=(callback)=>{

//     let Transaction_type="Credit";

//     let sql=`select * from Transaction where Transaction_type=?`;

//     db.query(sql,[Transaction_type],callback);

// }


exports.Employee_show_Credit_All_model=(callback)=>{


    let Transaction_type="credit";

    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where Transaction.Transaction_type=? order by Transaction.Transaction_id DESC `;


    db.query(sql,[Transaction_type],callback);


}


exports.Employee_show_Credit_Limit_model=(limit,callback)=>{
    
    
    let Transaction_type="credit";

    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where Transaction.Transaction_type=? order by Transaction.Transaction_id DESC limit ${limit}  `;

    db.query(sql,[Transaction_type,limit],callback);

}




exports.Employee_search_customer_credit_model=(Account_Number,callback)=>{

    let Transaction_type="credit";


    let sql=`SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id where (Account.Account_Number=? and Transaction.Transaction_type=?) `;
    
    db.query(sql,[Account_Number,Transaction_type],callback);

}



exports.Employee_show_check_list=((callback)=>{


    let sql='select * from check_bank';


    db.query(sql,callback);
})



/// check list code
exports.Employee_show_check_limit=((limit,callback)=>{


    let sql=`select * from check_bank limit ${limit}`;


    db.query(sql,[limit],callback);

})


exports.search_check_by_check_No=((check_No,callback)=>{


    let sql='select * from check_bank where check_No=?';


    db.query(sql,[check_No],callback);

})


exports.search_check_by_status=((status,callback)=>{


    let sql='select * from check_bank where status=?';

    db.query(sql,[status],callback);
})

