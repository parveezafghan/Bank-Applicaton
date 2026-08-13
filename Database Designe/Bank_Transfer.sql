
use afghan_bank;


create table Transfer(Transfer_id int PRIMARY key AUTO_INCREMENT ,from_account varchar(255) not null, To_account varchar(255) not null,Amount float  null, date DATETIME,FOREIGN key(from_account) REFERENCES Account(Account_Number) on delete CASCADE,FOREIGN key(To_account) REFERENCES Account(Account_Number) on DELETE CASCADE);

set FOREIGN_KEY_CHECKS=0;

select * from Transfer;


select * from Account;
insert into Transfer(from_account,To_account,Amount) values('69611','06382',10);

insert into Transfer(from_account,To_account,Amount) values('69611','06382',20),('69611','06382',30),('69611','06382',40),('69611','06382',50);

select * from Account;
select * from Transfer;


ROLLBACK;


SELECT * FROM Transfer;



select * from Transfer INNER JOIN Account on Account.Account_Number=Transfer.from_account where Account_id=5;




 update Transfer set Amount=0 where Transfer_id=28 ;

 SELECT * from Transfer;


 ROLLBACK


 select * from Transfer

 select * from Account inner join Transfer on Account.Account_Number=Transfer.from_account where Account.Account_id=5;