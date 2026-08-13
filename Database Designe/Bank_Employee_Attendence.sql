
use afghan_bank;


create table Employee_Attendence(Attendence_id int PRIMARY key AUTO_INCREMENT,Employee_id int not null,Attendence_date DATE, status varchar(255),foreign key(Employee_id)references Employee(Employee_id) on delete CASCADE);

 select * from Employee_Attendence;



