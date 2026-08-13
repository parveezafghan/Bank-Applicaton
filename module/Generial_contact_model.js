
const db=require('../db_connection');



exports.Generial_contact_model=(Name,Number,Email,Message,callback)=>{

    console.log("Number:: ",Number);
  
    let sql=`insert into Generial_contact(Name,Number,Email,Message)values(?,?,?,?)`;


    db.query(sql,[Name,Number,Email,Message],callback);
}