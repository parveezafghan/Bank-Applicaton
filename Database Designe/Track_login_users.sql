

use afghan_bank;


create table Track_login_user(Track_id int PRIMARY key AUTO_INCREMENT ,state VARCHAR(255),date DATETIME,user_id int ,Foreign key (user_id) references user_login(Employee_id)on delete CASCADE);



 set FOREIGN_KEY_CHECKS=0;

DROP Table Track_login_user;

alter TABLE Track_login_user add column  logout_Time DATETIME;


select * from Track_login_user;


update Track_login_user set state="logout" , logout_Time='2026-1-1 09:15:12' where user_id=1;

alter table Track_login_user CHANGE date login_Time DATETIME;
select * from Track_login_user;
