
use afghan_bank;


create table Employee_salary_pay(pay_id int primary key AUTO_INCREMENT, Employee_id int not null,paid_Amount float not null,pay_date date,status varchar(255), foreign key (Employee_id) references Employee(Employee_id) on delete CASCADE);
select * from Employee_salary_pay;
