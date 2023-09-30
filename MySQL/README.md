# MySQL

This folder contains two files (CRUD.txt and crud.sql) that demonstrate various database operations using MySQL, including table creation, data insertion, selection, updating, and deletion.

* #### **CRUD.txt**

This file contains SQL queries for basic CRUD (Create, Read, Update, Delete) operations on a MySQL database.

* **Content** 
     - Create Table:
        ```bash
         CREATE TABLE `triweb`.`users` (
            `id` INT(10) NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(255) NOT NULL,
            `email` VARCHAR(255) NOT NULL,
            `password` VARCHAR(255) NOT NULL,
            PRIMARY KEY (`id`)
         )
     - Insert Data:
        ```bash
         INSERT INTO `users`(`id`, `name`, `email`, `password`)
         VALUES ('01','Nivedita','niveditakaur@gmail.com','psw123');
     - Select Data:
        ```bash
         SELECT * FROM `users`;
     - Update Data:
        ```bash
         UPDATE `users` SET `password`='abcd' WHERE `id`='01';
     - Delete Data:
        ```bash
         DELETE FROM `users` WHERE email='niveditakaur@gmail.com';

* #### **crud.sql**

This file contains SQL queries for creating tables, inserting data, and performing various operations in a MySQL database.

* **Content** 
     - Create Database:
        ```bash
         CREATE DATABASE Triweb;
         USE Triweb;

     - Create 'teacher' Table:
        ```bash
         CREATE TABLE teacher (
            id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            teacher_name varchar(255) NOT null,
            mobile varchar(100) NOT null
         );
      
     - Create 'classes' Table with Foreign Key:
        ```bash
         CREATE TABLE classes (
            id int(11) not null AUTO_INCREMENT,
            class_name varchar(100) not null,
            teacher_id int(11) NOT null,
            PRIMARY KEY(id),
            FOREIGN KEY(teacher_id) REFERENCES teacher(id)
         );
     - Create 'student' Table with Foreign Key:
        ```bash
         CREATE TABLE student (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            student_name VARCHAR(255) NOT NULL,
            class INT(11) DEFAULT 5,
            mobile INT(15) NOT NULL
         );
         ALTER TABLE student CHANGE class class_id int(11) NOT null;
         ALTER TABLE student ADD FOREIGN KEY (class_id) REFERENCES classes(id);
     - Insert Data into 'teacher', 'classes', and 'student' Tables.
     - Select Data from Tables:
         The crud.sql file contains various SQL queries for selecting data from the created tables.
        <p align="center">
        <img width="800" alt="sql1" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/c347e09f-0fe5-4a0d-ad66-ded06991a653">
        </p>
        <p align="center">
        <img width="800" alt="sql2" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/27c4dc53-ea5e-402a-beba-e9e79606c89e">
        </p>
        <p align="center">
        <img width="800" alt="sql3" src="https://github.com/niveditakaur/Triweb-Learning/assets/120108968/95575f4f-94ff-45e6-a80a-2cc3afca5697">
        </p>
     - Union Operation:
        ```bash
         SELECT student_name FROM student
         UNION
         SELECT teacher_name FROM teacher;

## How to use

You can execute the SQL queries in these files using a MySQL database management tool or command-line interface. Ensure that you have a MySQL server installed and running.

To use these SQL queries:

1. Open your MySQL database management tool (e.g., phpMyAdmin, MySQL Workbench).

2. Create a new database named triweb (for CRUD.txt) or use the existing Triweb database (for crud.sql).

3. Execute the SQL queries from the respective file (CRUD.txt or crud.sql) to create tables, insert data, and perform database operations.

####  *Feel free to modify and experiment with the queries to understand how different SQL operations work.*