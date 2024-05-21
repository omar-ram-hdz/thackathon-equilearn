DROP DATABASE IF EXISTS equilearn;
CREATE DATABASE IF NOT EXISTS equilearn;
USE equilearn;

CREATE TABLE users(
  id BINARY(16) PRIMARY KEY,
  full_name VARCHAR(60) NOT NULL,
  email VARCHAR(60) UNIQUE NOT NULL,
  pass BLOB NOT NULL
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE type_courses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name_type VARCHAR(20)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE courses(
  id BINARY(16) PRIMARY KEY,
  course_type INT NOT NULL,
  course_name VARCHAR(60) NOT NULL,
  course_description VARCHAR(105),
  FOREIGN KEY(course_type) REFERENCES type_courses(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE registers(
  id BINARY(16) PRIMARY KEY,
  user BINARY(16) NOT NULL,
  register_start DATE NOT NULL,
  register_end DATE,
  course BINARY(16) NOT NULL,
  FOREIGN KEY(user) REFERENCES users(id),
  FOREIGN KEY(course) REFERENCES courses(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE results(
  id BINARY(16) NOT NULL,
  lesson BINARY(12) NOT NULL,
  user BINARY(16) NOT NULL,
  rating DECIMAL(5,2),
  FOREIGN KEY(user) REFERENCES users(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;