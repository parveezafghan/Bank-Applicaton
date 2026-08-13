

use afghan_bank;









create table check_bank(check_id int PRIMARY key AUTO_INCREMENT,check_No int not null,Account_Number varchar(255) ,payee_name varchar(255) , Amount float not null , status varchar(255)not null, issue_date varchar(255) not null,Employee_id int ,FOREIGN key(Account_Number)REFERENCES Account(Account_Number)on delete CASCADE,FOREIGN key(Employee_id)REFERENCES Employee(Employee_id) on DELETE CASCADE);

set FOREIGN_KEY_CHECKS=0;
DROP table check_bank;
alter TABLE check_bank add UNIQUE(check_No);

select * from check_bank;
insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(13,'80373',"khan",100,"pending",1,'10-12-2025');
insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(14,'80373',"khan",100,"pending",1,'10-12-2025');

insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(14,'80373',"khan",100,"pending",1,'10-12-2025');

insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(15,'80373',"khan",100,"pending",1,'10-12-2025');
insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(16,'80373',"khan",100,"pending",1,'10-12-2025');





insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(8,'18891',"khan",1000,"pending",1,'10-12-2025');


insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(9,'18891',"khan",6000,"pending",1,'10-12-2025');

insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(2,'18891',"khan",1000,"pending",1,'10-12-2025'),(3,'18891',"khan",120,"pending",1,'10-12-2025'),(4,'18891',"khan",10,"pending",1,'10-12-2025'),(5,'18891',"khan",1200,"pending",1,'10-12-2025');


commit;


select Amount from check_bank;
select * from check_bank;


select * from check_bank where check_No=1 and Account_Number='69611' and  payee_name="khan" and Amount=100;



update check_bank set status="canceled" where check_No=5;

select * from check_bank;



insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(2,'1231231',"mobeen",10001,"pending",1,'10-12-2025'),(3,'1231231',"jamil",120,"pending",1,'10-12-2025'),(4,'69611',"lala",200,"payed",1,'10-12-2025'),(5,'1231231',"samullah",1200,"pending",1,'10-12-2025');



select * from check_bank INNER JOIN Account on check_bank.Account_Number=check_bank.Account_Number where Account_id=1;

alter table check_bank add column check_expire_date_and_Time DATETIME ;

select * from check_bank





insert into check_bank(check_No,Account_Number,payee_name,Amount,status,Employee_id,issue_date) values(20,'18891',"khan",1000,"pending",1,'10-12-2025') where Account_Number=18891;



select * from check_bank INNER JOIN Account  on check_bank.Account_Number=Account.Account_Number where Account.Account_id=5;



show create table check_bank;




