# PostgreSQL and SQL Notes

What is PostgreSQL?
PostgreSQL is a relational database management system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

What is SQL?
SQL stands for Structured Query Language
A query language is a kind of programming language that's designed to facilitate retrieving specific information from databases

# Relational Database Notes

What is a database?
Organized collection of data, generally stored and accessed electronically from a computer system

What is a Relational Database?
A type of database that stores and provides access to data points that are related to one another.
The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.
A software system used to maintain relational databases is called a relational database management system.

ER Diagram -> visual of the relationships between the tables in a database

Primary key -> A primary key, also called a primary keyword, is a key in a relational database that is unique for each record. It is a unique identifier, such as a driver license number, telephone number (including area code), or vehicle identification number (VIN). A relational database must always have one and only one primary key.

Foreign key -> A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

Defining Relationships between tables in a database

One-to-one relationship -> Both tables can have only one record on either side of the relationship. Each primary key value relates to only one (or no) record in the related table. Ex: in a school database, each student has only one student ID, and each student ID is assigned to only one person.

One-to-many -> The primary key table contains only one record that relates to none, one, or many records in the related table. This relationship is similar to the one between you and a parent. Ex: in a university database, a dorm has many students, and each student lives in one dorm

Many-to-many -> Each record in both tables can relate to any number of records (or no records) in the other table. ex: in a university example, a teacher can have many students and each student can have many teachers

Join table -> A join table contains common fields from two or more other tables. In this way, it creates a many-to-many relationship between data

# PostgreSQL Resources

To Download PSQL: https://www.postgresql.org/download/

PSQL Documentation: https://www.postgresql.org/docs/13/index.html

# PSQL Commands

Check PSQL version -> psql --version

Log into PSQL from your terminal -> psql -U postgres

quit out of psql -> \q

connect to a database -> \c (dbname)

list all databases -> \l

describes a table and shows a list of the column parameters-> \d (table name)
^ also helpful if you want to check the primary key and foreign key associations in the tables

describes a table and shows a list of tables in the database -> \dt

# SQL Queries

create a database -> CREATE DATABASE (dbname);

# Queries for Tables

Creating table and defining column parameters -> example: CREATE TABLE players (id SERIAL PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, city VARCHAR, age INT);

Selecting a table to view data -> SELECT \* FROM table_name;

Adding a column to a table -> ALTER TABLE table_name ADD add_column_parameter data_type;

Deleting a column on a table -> ALTER TABLE table_name DROP COLUMN column_to_drop;

Renaming exisiting column -> ALTER TABLE table_name RENAME old_column_name TO new_column_name;

Adding primary key after table is created -> ALTER TABLE table_name ADD PRIMARY KEY (ID);

Adding foreign key to a table after a table is created -> ALTER TABLE table_name ADD FOREIGN KEY (name_of_foreign_key/id) REFERENCES table_name(id);

# Queries for Rows/Instances

Adding row/instance -> example: INSERT INTO players (first_name, last_name, city, age) VALUES ('David', 'Beckham', 'Manchester', 40);

Updating row -> example: UPDATE players SET first_name = 'david' WHERE id = 1;

Deleting row -> DELETE FROM table_name WHERE id = id_associated_to_the_row;

listing out instances that match the foreign key -> example: SELECT FROM table_name WHERE artist_id = 2
