CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION pgcrypto;

CREATE DATABASE fullstack;

CREATE TYPE gender_type AS ENUM ('male', 'female', 'non-binary', 'transgender', 'prefer not to say');

CREATE TABLE users (
    username VARCHAR(255) NOT NULL UNIQUE,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender gender_type NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    ID SERIAL,
);

SELECT * FROM users;

INSERT INTO users (username, fullname, email, hashed_password, age, address, dob, gender)
VALUES ('test', 'Test Test', 'test@test.test', crypt('test123', gen_salt('bf', 8)), 23, '123 Main St.', '04-12-2020', 'female');

