

--- Create Database

CREATE DATABASE Afghan_Bank;
use Afghan_Bank;

CREATE TABLE Bank (Id int  not NULL PRIMARY KEY AUTO_INCREMENT,
Name varchar (255) not NULL , code VARCHAR(255)not null ,
address varchar(255) not null );


---Account
create table Account (Account_Id int PRIMARY KEY AUTO_INCREMENT not NULL,
Branch_id  int ,Account_type varchar(255) not null ,Balance FLOAT not null 
,Account_Number varchar(255) not null  UNIQUE ,
 FOREIGN key (Branch_id) REFERENCES Branch(Branch_id) on DELETE CASCADE) ;
;


--- Branch

create table Branch(Branch_id int  PRIMARY KEY AUTO_INCREMENT ,
 Name  VARCHAR(255) not null,address  varchar(255) not null );



---customer
create table customer  (customer_id int PRIMARY key AUTO_INCREMENT not null,
 Account_Id int not null,Name varchar (255) not null, Last_Name varchar(255) not null ,
 Father_Name varchar(255)not null , Eamil varchar(255) not null ,Mobile_number varchar(255) not null ,Birth_date date not null,city varchar(255) not null ,
 district varchar(255)not null ,Gender varchar(255) not null, User_Name varchar(255) not null,
 FOREIGN KEY (Account_Id) REFERENCES Account(Account_Id) on DELETE CASCADE );

create table Employee(Employee_id int primary key AUTO_INCREMENT not NULL,
role varchar(255) not null , First_name VARCHAR(255) not null , last_name varchar(255) not null,
Phone VARCHAR(255) not null,Email varchar(255) not null,Gender varchar(255) not null, Branch_id int  not null ,Manager_id int , FOREIGN key (Branch_id) REFERENCES Branch(Branch_id) on delete CASCADE, FOREIGN key (Manager_id) REFERENCES Employee(Employee_id) on DELETE CASCADE);

create table check_bank(check_id int PRIMARY key AUTO_INCREMENT,
check_No int not null,Account_Number varchar(255) ,
payee_name varchar(255) , Amount float not null , 
status varchar(255)not null, issue_date varchar(255) not null,
Employee_id int ,
FOREIGN key(Account_Number)REFERENCES Account(Account_Number)on delete CASCADE,
FOREIGN key(Employee_id)REFERENCES Employee(Employee_id) on DELETE CASCADE);


create table Transaction (Transaction_id int primary key  AUTO_INCREMENT, 
Account_id int not null, Employee_id int not null,Amount DOUBLE not null 
tax_id int ,tax_Amount float ,Transaction_type varchar(255) not null,date DATETIME,
 FOREIGN key (Account_id)REFERENCES Account(Account_Id) on delete CASCADE, FOREIGN key (Employee_id) 
 REFERENCES Employee(Employee_id)on delete CASCADE,Foreign Key (tax_id) REFERENCES Tax(tax_id) on DELETE CASCADE);
