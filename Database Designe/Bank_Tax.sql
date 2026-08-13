

use afghan_bank;

create table Tax(Tax_id int primary key AUTO_INCREMENT,tax_name varchar(255), tax_percentage float , status varchar(255));

alter table Tax add column source varchar(255);
alter table Tax add column  date date;

alter table Tax add column Amount double;
alter table Tax drop column tax_name ;
alter table Tax drop column status;

alter table Tax add column Account_id int;


alter table Tax add constraint Account_id foreign key(Account_id) REFERENCES Account(Account_id) on delete CASCADE;

select * from Tax; 




desc Tax;


update  Tax set Amount=110 where Account_id=8;

