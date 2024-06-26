--! DATABASE

CREATE DATABASE IF NOT EXISTS MarkEntry;

USE MarkEntry;

--! TABLES

DROP TABLE IF EXISTS Courses;
DROP TABLE IF EXISTS Subjects;
DROP TABLE IF EXISTS EvaluationScheme;
DROP TABLE IF EXISTS Course_Groups;
DROP TABLE IF EXISTS Staff;
DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS MarkEntry;

--! SET CONSTRAINTS OFF
SET FOREIGN_KEY_CHECKS = 0;

SET FOREIGN_KEY_CHECKS = 1;


CREATE TABLE IF NOT EXISTS Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255),
    description TEXT
);

CREATE TABLE IF NOT EXISTS Subjects (
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(255),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE IF NOT EXISTS EvaluationScheme (
    scheme_id INT AUTO_INCREMENT PRIMARY KEY,
    scheme_name VARCHAR(255),
    theory_weightage INT,
    lab_weightage INT,
    ia1_weightage INT,
    ia2_weightage INT,
    description TEXT,
    subject_id INT,
    FOREIGN KEY (subject_id) REFERENCES Subjects(subject_id)
);

CREATE TABLE IF NOT EXISTS Course_Groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_name VARCHAR(255),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE IF NOT EXISTS Staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_number INT,
    staff_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role ENUM('staff', 'coordinator', 'admin') DEFAULT 'staff',
    course_name VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    roll_number INT,
    student_name VARCHAR(255),
    course_id INT,
    group_id INT,
    email VARCHAR(255),
    password VARCHAR(255),
    FOREIGN KEY (course_id) REFERENCES Courses (course_id),
    FOREIGN KEY (group_id) REFERENCES Course_Groups(group_id)
);

DROP TABLE IF EXISTS MarksEntry;
CREATE TABLE IF NOT EXISTS MarksEntry (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    group_id INT,
    course_id INT,
    staff_id INT,
    theory INT,
    lab INT,
    IA1 INT,
    IA2 INT,
    from_date DATE,
    till_date DATE,
    approved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (subject_id) REFERENCES Subjects(subject_id),
    FOREIGN KEY (group_id) REFERENCES Course_Groups(group_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id),
    FOREIGN KEY (staff_id) REFERENCES Staff(staff_id)
);


-- TEST
CREATE TABLE IF NOT EXISTS MarksEntryWithType (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    group_id INT,
    course_id INT,
    staff_id INT,
    theory INT,
    lab INT,
    IA1 INT,
    IA2 INT,
    from_date DATE,
    till_date DATE,
    approved BOOLEAN DEFAULT FALSE,
    Type VARCHAR(255), -- New column for type
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (subject_id) REFERENCES Subjects(subject_id),
    FOREIGN KEY (group_id) REFERENCES Course_Groups(group_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id),
    FOREIGN KEY (staff_id) REFERENCES Staff(staff_id)
);

