# PostgresQL Notes

To Download PSQL: https://www.postgresql.org/download/

# PSQL Commands

Check PSQL version -> psql --version

Log into PSQL from your terminal -> psql -U postgres

create a database -> REATE DATABASE (dbname);

Create table (column) in a database -> CREATE TABLE (tableName);

connect to a database -> \c (dbname)

list all databases -> \l

describe a table -> \d

Selecting a table to view data -> SELECT \* FROM (tableName);

Adding row -> example: INSERT INTO users (first_name, last_name, city) VALUES ('David', 'Beckham', 'Manchester')
