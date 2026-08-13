

use afghan_bank;


create table Card(id int PRIMARY KEY AUTO_INCREMENT, card_number VARCHAR(500) not null UNIQUE, account_id int not null ,card_type varchar(255) not null, issue_date DATE ,expire_date  date,

FOREIGN key (account_id) REFERENCES Account(Account_id) on DELETE CASCADE);


alter table Card add status varchar(255);
alter table Card CHANGE status card_status varchar(255);
DROP TABLE Card;


SELECT * from Account INNER JOIN Card on Account.Account_Id=Card.Account_Id INNER JOIN customer on customer.customer_id=Account.Account_id INNER JOIN user_login on user_login.customer_id=customer.customer_id  ;

select * from Card;
select * from customer INNER JOIN user_login on user_login.customer_id=customer.customer_id;

 

select * from Card;


select count(id) from Card;

select card_type from Card;
select * from Card;

update Card set status='active' where id>0;



select * from Card where card_status="active";

select * from Card ;


update Card set card_status='active' where account_id>2;

select * from Card;

select * from Account;

delete from Account where Account_Number=89387;


select * from Card

