
use afghan_bank;


create table user_login(user_id int PRIMARY key AUTO_INCREMENT not null,password varchar(255) not null, pin_code varchar(5) not null,Employee_id int UNIQUE , customer_id int UNIQUE ,FOREIGN key (Employee_id)references employee(Employee_id)on delete CASCADE ,FOREIGN key(customer_id)REFERENCES customer(customer_id) on DELETE CASCADE);


insert into user_login(password,pin_code,user_name,customer_id)values("parveez","12345","parveezAFGHAN",1);

insert into user_login(password,pin_code,user_name,customer_id)values("Mobeen","12345","AmanullahMobeen",2);

insert into user_login(password,pin_code,user_name,Employee_id)values("parveez","12345","parveez afghan",1),
("Amanullah","12345",'Amanullah',2);

insert into user_login(password,pin_code,user_name,Employee_id)values("emp","12345","khan",5),("emp","12345",'jamil',6);

insert into user_login(password,pin_code,user_name,Employee_id)values("manager","12345","NorullahNory",8),("manager","12345",'Samullahkhan',9);

alter table user_login add user_name varchar(255);
select * from afghan_bank.user_login;
drop table afghan_bank.user_login;

select * from Account inner join customer ON Account.Account_id=customer.customer_id inner join user_login ON user_login.customer_id=customer.customer_id ;



select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id;


select * from Employee inner join user_login on Employee.Employee_id=user_login.Employee_id inner join Branch on Branch.Branch_id=Employee.Branch_id where (Branch.Name='kabul' and Employee.role='Employee');


commit;

select * from user_login;


select * from user_login ; 

select * from user_login WHERE Employee_id=1 ;


select * from user_login;


select * from user_login inner join Employee on user_login.Employee_id=Employee.Employee_id where Employee.Employee_id=7;




insert into user_login(password,pin_code,user_name,Employee_id)values("ahmad","12345","ahmad ullah",5);


select * from user_login;

select * from Employee;


delete from user_login where  ;

select * from user_login;

select * from Employee;


select * from user_login INNER JOIN Employee on user_login.Employee_id=Employee.Employee_id where user_login.user_id=22;
 

insert into user_login(password,pin_code,user_name,Employee_id)values("jan","12345","jan",3);
insert into user_login(password,pin_code,user_name,Employee_id)values("jan 1","12345","jan 1",4);


select * from user_login;
select * from user_login INNER JOIN Employee on user_login.Employee_id=Employee.Employee_id where Employee.Employee_id=30;





select * from Employee INNER JOIN user_login on Employee.Employee_id=user_login.Employee_id where Employee.role="admin";

select * from Employee;

select * from user_login where  Employee_id=3;



