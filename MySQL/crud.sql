CREATE DATABASE Triweb;
USE Triweb;

create TABLE teacher(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null    
)

CREATE TABLE classes(
id int(11) not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int(11) NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teacher(id)   
)  

CREATE TABLE student (
id INT(11) NOT NULL AUTO_INCREMENT ,PRIMARY KEY(id),
student_name VARCHAR(255) NOT NULL,
class INT(11) DEFAULT 5,
mobile INT(15) NOT NULL)

ALTER TABLE student
CHANGE class class_id int(11) NOT null;

ALTER table students
ADD FOREIGN KEY (class_id) REFERENCES classes(id);

INSERT INTO teachers(mobile,teacher_name)
VALUES ('1234','Sanjiv'),('33443','Aditya'),('2435','Vandana'),('6784' ,'Preeti');

INSERT INTO classes(class_name,teacher_id) 
VALUES ('One',2),('Two',1),('Three',2),('Two',1);

INSERT into student(id,student_name,mobile,class_id) 
VALUES(1,'Prapt','78585',2),(2,'Shaurya','348579',1),(3,'Ansh','584985',2);

SELECT * FROM student;
SELECT * FROM classes;
SELECT * FROM teacher;

select st.* 
FROM student st 
where id = 2

select st.student_name 
FROM student st 
where st.id = 2

select *
FROM student st 
INNER JOIN classes cl ON st.class_id = cl.id 
where st.id = 1

select st.student_name,cl.class_name 
FROM student st 
INNER JOIN classes cl ON st.class_id = cl.id 

select st.student_name,cl.class_name, t.teacher_name as ClassTeacher
FROM student st 
INNER JOIN classes cl ON st.class_id = cl.id
INNER JOIN teacher t on cl.teacher_id = t.id

SELECT student_name FROM student 
UNION
SELECT teacher_name FROM teacher;