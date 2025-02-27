CREATE DATABASE lms_db;
USE lms_db;

CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO users (name, email, password) VALUES 
('John Doe', 'john@example.com', 'hashedpassword'),
('Jane Smith', 'jane@example.com', 'hashedpassword');

INSERT INTO courses (name, description) VALUES 
('Scala Basics', 'Introduction to Scala'),
('Play Framework', 'Building web apps with Play');
