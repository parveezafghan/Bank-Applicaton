CREATE DATABASE Afghan_Bank;
use Afghan_Bank;

CREATE TABLE Bank (Id int  not NULL PRIMARY KEY AUTO_INCREMENT,Name varchar (255) not NULL , code VARCHAR(255)not null ,address varchar(255) not null );

select * from Bank;

insert into Bank (Name , code ,address) values("AFGHAN bank","10000","AFGHANISTAN");


select * from Bank;


drop table Bank;


SELECT * from Bank;


