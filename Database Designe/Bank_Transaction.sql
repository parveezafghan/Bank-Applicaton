
use afghan_bank;

create table Transaction (Transaction_id int primary key  AUTO_INCREMENT, Account_id int not null, Employee_id int not null,Amount DOUBLE not null ,tax_id int ,tax_Amount float ,Transaction_type varchar(255) not null,date DATETIME, FOREIGN key (Account_id)REFERENCES Account(Account_Id) on delete CASCADE, FOREIGN key (Employee_id) REFERENCES Employee(Employee_id)on delete CASCADE,Foreign Key (tax_id) REFERENCES Tax(tax_id) on DELETE CASCADE);

set FOREIGN_KEY_CHECKS=0;
drop TABLE TRANSACTION;

set FOREIGN_KEY_CHECKS=1

alter table Transaction  drop FOREIGN key Account_id;
insert into Transaction(Account_id,Employee_id,Amount,Transaction_type) VALUES(41,1,100,'credit');


ROLLBACK;

select * from Transaction;

SELECT * from Account  INNER join Transaction on Transaction.Account_Id=Account.Acccount_Id;




SELECT * from Account INNER JOIN Transaction on Transaction.Account_id=Account.Account_Id ;

SELECT * from Transaction INNER JOIN Account on Account.Account_Id=Transaction.Account_id INNER JOIN customer on customer.customer_id=Account.Account_Id ;


SELECT * from Account INNER JOIN customer on Account.Account_Id=customer.Account_id INNER JOIN Transaction on Account.Account_Id=Transaction.Account_id limit 2;


select * from Transaction order by Transaction_id DESC;
select Amount , Transaction_type from Transaction;


select * from Transaction where Account_id=5  ;

alter table Transaction drop column tax_id;

SELECT * from Transaction where Transaction_id=20 ;

update Transaction set Amount=0 where Transaction_id=20

select * from Transaction where Transaction_type='Debit' ;

select * from Transaction;