# PostgresQL Notes

To Download PSQL: https://www.postgresql.org/download/

# PSQL Commands

Check PSQL version -> psql --version

Log into PSQL from your terminal -> psql -U postgres

connect to a database -> \c (dbname)

list all databases -> \l

describe a table -> \d

# SQL Queries

create a database -> CREATE DATABASE (dbname);

Create table (column) in a database -> CREATE TABLE (tableName);

Selecting a table to view data -> SELECT \* FROM (tableName);

Adding row -> example: INSERT INTO users (first_name, last_name, city) VALUES ('David', 'Beckham', 'Manchester')
