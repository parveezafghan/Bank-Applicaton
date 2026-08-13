

use AFGHAN_Bank;
create table customer  (customer_id int PRIMARY key AUTO_INCREMENT not null, Account_Id int not null,Name varchar (255) not null, Last_Name varchar(255) not null ,Father_Name varchar(255)not null , Eamil varchar(255) not null ,Mobile_number varchar(255) not null ,Birth_date date not null,city varchar(255) not null ,district varchar(255)not null ,Gender varchar(255) not null, User_Name varchar(255) not null,FOREIGN KEY (Account_Id) REFERENCES Account(Account_Id) on DELETE CASCADE );


alter TABLE customer add column  Birth_date date;
insert into customer(Account_id,Name,Last_Name,Father_Name,Eamil,Mobile_number,Birth_date,city,district,Gender,User_Name) value(1,"parveez","AFGHAN","Faiz Mohammad","parveez@gmail.com","0773417792","2003-3-3","jalalabad","Hada","Male","parveezAFGHAN");

insert into customer(Account_id,Name,Last_Name,Father_Name,Eamil,Mobile_number,Birth_date,city,district,Gender) value(2,"Amanullah","Mobeen","Faiz Mohammad","Amanullah@gmail.com","0773417792","2005-3-3","jalalabad","Hada","Male");


alter table customer drop User_Name ;
select * from customer;



;
select * from customer;



SELECT * from Account INNER JOIN customer on Account.Account_id=customer.Account_Id INNER JOIN Card on Account.Account_id=Card.account_id 

select * from Account inner join user_login on Account.Account_id=user_login.customer_id inner join Card on Account.Account_id=Card.account_id inner join customer on Account.Account_id=customer.Account_id

select * from Account inner join customer on Account.Account_id=customer.Account_id inner join Card on Account.Account_id=Card.account_id inner join user_login on customer.customer_id=user_login.customer_id;

select * from user_login;



update user_login set user_name="one one one "  inner join customer on user_login.customer_id=customer.Account_id where user_login.Account_id=14 ;





select * from customer;


select   customer_id  from customer inner join Account on customer.Account_id=Account.Account_id where Account.Account_Number=90830;


select   *  from customer inner join Account on customer.Account_id=Account.Account_id INNER JOIN user_login on customer.customer_id=user_login.customer_id where Account.Account_Number=90830;

select * from customer INNER JOIN user_login on customer.customer_id=user_login.customer_id;

select * from customer;