-- Database: deposits-db
-- DROP DATABASE IF EXISTS "deposits-db";

CREATE DATABASE "deposits-db"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- CREATE Table: tasks
CREATE TABLE deposits (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(255) NOT NULL,
		tx VARCHAR(64) NOT NULL,
    amount DECIMAL NOT NULL
);
