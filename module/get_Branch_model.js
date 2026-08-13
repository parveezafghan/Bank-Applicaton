
const db=require('../db_connection');


exports.get_Branchs_model=(callback)=>{


    const sql=`select Name from  Branch`;

    db.query(sql,callback);

}

exports.get_kabul_bank_Branchs_and_id_model=(callback)=>{

    let sql=`select Branch_id ,Name  from Branch`;

    db.query(sql,callback);

}