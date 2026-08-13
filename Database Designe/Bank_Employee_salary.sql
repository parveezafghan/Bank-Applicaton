

use afghan_bank;
create table Employee_salary(salary_id int primary key AUTO_INCREMENT,Employee_id int ,basic_salary float not null,allowance float ,total_salary float,Foreign Key (Employee_id) REFERENCES Employee(Employee_id) on DELETE CASCADE);

select * from Employee_salary;




