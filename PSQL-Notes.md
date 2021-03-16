# PostgresQL Notes

To Download PSQL: https://www.postgresql.org/download/

PSQL Documentation: https://www.postgresql.org/docs/13/index.html

# PSQL Commands

Check PSQL version -> psql --version

Log into PSQL from your terminal -> psql -U postgres

connect to a database -> \c (dbname)

list all databases -> \l

describe a table -> \d

# SQL Queries

create a database -> CREATE DATABASE (dbname);

Create table (column) in a database -> CREATE TABLE (tableName);

defining column variables -> CREATE TABLE users (id SERIAL, first_name VARCHAR(255), last_name VARCHAR(255), city VARCHAR(225), age INT);

Selecting a table to view data -> SELECT \* FROM (tableName);

adding a column to a table -> ALTER TABLE users ADD age INT;

deleting a column on a table -> ALTER TABLE users DROP COLUMN age;

renaming exisiting column -> ALTER TABLE users RENAME first_name TO firstName;

Adding row -> example: INSERT INTO users (first_name, last_name, city, age) VALUES ('David', 'Beckham', 'Manchester', 40);

Updating row -> examplle: data=# UPDATE users SET first_name = 'david' WHERE id = 1;

Deleting row -> DELETE FROM users WHERE id = 1;

Initializing primary key -> ALTER TABLE users ADD PRIMARY KEY (ID);

Initializing foreign key -> ALTER TABLE emails ADD FOREIGN KEY (user_id) REFERENCES users(id);
