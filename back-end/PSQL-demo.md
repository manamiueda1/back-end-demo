# connect to PostgreSQL

psql -U postgres

# List out databases

/l

# Create a database called gmail

CREATE DATABASE gmail;

# connect to database

\c gmail

# Create a table inside the gmail database with primary key

CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR, email VARCHAR, age INT);

# take a look at the users table

SELECT \* FROM users and \dt

# Add colum to users table

ALTER TABLE users ADD last_name VARCHAR;

# Delete a column

ALTER TABLE users DROP COLUMN last_name;

# Rename an existing column

ALTER TABLE users RENAME email TO email_address;

# add instances to users table

INSERT INTO users (first_name, last_name, email_address, age) VALUES ('john', 'Smith', 'johnsmith@gmail.com', 12);

# Adding foreign key

CREATE TABLE emails (id SERIAL, first_name VARCHAR NOT NULL, subject VARCHAR, body VARCHAR, users_id INT, CONSTRAINT fk_user FOREIGN KEY(users_id) REFERENCES users(id));

# Add instances to the emails table

INSERT INTO emails (first_name, subject, body, users_id) VALUES ('jogn', 'meeting for monday', 'we have a meeting on monday', 1);

# Update a row

UPDATE emails SET first_name = 'john' WHERE id = 1;

# Delete a row

SELECT \* FROM emails;

# listing out instances that match the foreign key

SELECT FROM emails WHERE users_id = 2;
