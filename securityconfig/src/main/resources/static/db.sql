CREATE TYPE Role AS ENUM ('STUDENT', 'FACULTY_MEMBER', 'ADMINISTRATOR');

-- User Table
CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role Role NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15)
);

-- Department Table
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- StudentProfile Table
CREATE TABLE StudentProfile (
    user_id INTEGER PRIMARY KEY,
    photo VARCHAR(255),
    department_id INTEGER NOT NULL,
    year VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (department_id) REFERENCES Department(id) ON DELETE CASCADE
);

-- FacultyProfile Table
CREATE TABLE FacultyProfile (
    user_id INTEGER PRIMARY KEY,
    photo VARCHAR(255),
    department_id INTEGER NOT NULL,
    office_hours VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (department_id) REFERENCES Department(id) ON DELETE CASCADE
);
