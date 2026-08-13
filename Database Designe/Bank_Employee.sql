
use afghan_bank;

create table Employee(Employee_id int primary key AUTO_INCREMENT not NULL,role varchar(255) not null , First_name VARCHAR(255) not null , last_name varchar(255) not null,Phone VARCHAR(255) not null,Email varchar(255) not null,Gender varchar(255) not null, Branch_id int  not null ,Manager_id int , FOREIGN key (Branch_id) REFERENCES Branch(Branch_id) on delete CASCADE, FOREIGN key (Manager_id) REFERENCES Employee(Employee_id) on DELETE CASCADE);

set FOREIGN_KEY_CHECKS=0;
DROP table Employee;
alter table Employee add manager_id int  ;

alter table Employee add constraint fk_manager FOREIGN key (manager_id) references Employee (Employee_id;)
insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id) values("Employee","parveez","AFGHAN","0773417792","parveez@gmail.com","Male",1);
insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id) values("Employee","khan","AFGHAN","0773417792","khan@gmail.com","Male",1),("Employee","jamil","khan","0773417792","jamil@gmail.com","Male",1);
alter table Employee drop FOREIGN key Branch_id;
insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id) values("admin","parveez","AFGHAN","0773417792","parveez@gmail.com","Male",1,null),("admin","Amanullah","Mobeen","0773417792","Amanullah@gmail.com","Male",3,null);

insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id) values("Employee","parveez","AFGHAN","0773417792","parveez@gmail.com","Male",1,3);
insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id) values("Employee","khan","AFGHAN","0773417792","khan@gmail.com","Male",1,3),("Employee","jamil","khan","0773417792","jamil@gmail.com","Male",1,4);



select * from Employee where role="Employee";


select * from Employee where role='admin';
select * from Employee where role='manager';



show tables;



DELETE from Account where Account_Number=0560547595;


select * from Account where Account_Number=0560547595;

select * from Account WHERE Account_Number=2581383169;

delete from Account where Account_Number=2581383169;


SELECT * from Employee;



select * from Employee INNER JOIN user_login on Employee.Employee_id=user_login.Employee_id;

select * from Employee;




insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id) values("Employee","Mohammad","islam","0773417792","Mohammad@gmail.com","Male",4);
select * from Employee;



show keys from Employee where key_name="primary"

set FOREIGN_KEY_ChECKS=0;


drop table Employee;

set FOREIGN_KEY_ChECKS=1;


select * from Employee;


select * from Employee;






insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id) values("Employee","ahmad","khan","0773417792","ahmad@gmail.com","Male",1,1);
insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id) values("Employee","Mohammad","omar","0773417792","omar@gmail.com","Male",1),("Employee","usap","khan","0773417792","usap@gmail.com","Male",1);





insert into Employee(role,First_name,last_name,Phone,Email,Gender,Branch_id,Manager_id) values("manager","jan","jan","0773417792","jan@gmail.com","Male",4,1),("manager","jan 1","jan 1","0773417792","jan 1@gmail.com","Male",4,1);


select * from Employee;


alter table Employee add Provience varchar(100) ;
alter table Employee add District varchar(100);
alter table Employee add zip_code varchar(100);

 
 
 select * from Employee;


 SELECT * from Employee INNER JOIN user_login on Employee.Employee_id=user_login.Employee_id where role="Employee";


 select count(Employee_id) from Employee;

 

 select * from Employee;


 