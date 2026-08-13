


use AFGHAN_Bank;



create table Account (Account_Id int PRIMARY KEY AUTO_INCREMENT not NULL,
Branch_id  int ,Account_type varchar(255) not null ,Balance FLOAT not null 
,Account_Number varchar(255) not null  UNIQUE ,
 FOREIGN key (Branch_id) REFERENCES Branch(Branch_id) on DELETE CASCADE) ;
;



























alter table Account add column status varchar(255);

insert into Account(Branch_id,Account_type,Balance,Account_Number) VALUES(1,"save",10000.1,18890);

insert into Account(Branch_id,Account_type,Balance,Account_Number) VALUES(1,"save",20000.10,18891);
SELECT * from Account;

SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id where customer.customer_id=21 ;
DROP Table Account;
SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_id INNER JOIN Card on Card.account_id=Account.Account_id  ;
SELECT * from user_login;
select * from customer; 

SELECT * from customer INNER JOIN user_login on customer.customer_id=user_login.customer_id;


COMMIT ;

select * from Account ;
ROLLBACK;










drop table IF EXISTS Account;

show create table Account;
show COLUMNS from Account;


delete from Account where Account_Number=100000000; 





select * from Account INNER JOIN  Card on Card.account_id=Account.Account_id;


SELECT * from Account;



SELECT * from Account; 


UPDATE Account set Balance=Balance+100 where Account_Number=9369182060;


SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id LIMIT 50

SELECT * from Account;

select Balance from Account ;

select count(Account_id) from Account;

select * from Account;

select * from Account where (Account_Number=06382 or Account_Number=69611);

select * from Account where Account_Number=06382 or Account_Number=6911;

select * from Account INNER join Card on Account.Account_id=Card.account_id where Account.Account_Number=69611;

SELECT * from Account where Account_Number=06382;
update Account set Balance=Balance-100 where Account_Number=06382;

SELECT * from Account where Account_Number=06382;

select * from Account where status="block";

select * from Account where Account_id=5;


update Account set Balance=0 where Account_Number=39121;
update Account set Balance=0 where Account_Number=80373;


select * from Account where  Account_id=3;

select * from Account where Account_id=5;


select * from Account INNER JOIN user_login on Account.Account_id=user_login.customer_id;


select * from Account where Account_Number=26883;





select * from Account;

update Account set Branch_id=5 where Account_Number=26883;



select * from Account inner join user_login  on  Account.Account_id=user_login.customer_id where Account.Account_Number=05341;

select * from Account INNER JOIN customer on Account.Account_id=customer.Account_id inner join user_login on user_login.customer_id=customer.customer_id where Account.Account_Number=90830;
select * from Account;





select * from customer inner join Account on customer.Account_id=Account.Account_id INNER JOIN user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=05341 and (user_login.password='jamil Ahmad Ahmad Ahmad Ahmad 270VKS' and user_login.pin_code='92033' and user_login.user_name='jamilking');



select * from customer;