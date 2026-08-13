
use Afghan_Bank;
create table Branch(Branch_id int  PRIMARY KEY AUTO_INCREMENT , Name  VARCHAR(255) not null,address  varchar(255) not null );
insert into Branch(Name,address) values("kabul","shahranow");
insert into Branch(Name,address) values("kabul","shahranow"),("Nangrahar","jalalabad"),("pakty","ghardaz"),("Khost","Maton"),("Bulkh","Mazar"),('Herat',"Herat");

delete from Branch where Branch_id=;
select Name from Branch;
drop table Branch;
SELECT * from Branch ;