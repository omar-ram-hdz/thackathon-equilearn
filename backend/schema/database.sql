DROP DATABASE IF EXISTS equilearn;
CREATE DATABASE IF NOT EXISTS equilearn;
USE equilearn;

CREATE TABLE users(
  id BINARY(16) PRIMARY KEY,
  full_name VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL,
  pass BLOB NOT NULL
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE type_courses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name_type VARCHAR(20) UNIQUE
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE courses(
  id VARCHAR(36) PRIMARY KEY,
  course_type INT NOT NULL,
  course_name VARCHAR(60) NOT NULL,
  FOREIGN KEY(course_type) REFERENCES type_courses(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE registers(
  id BINARY(16) PRIMARY KEY,
  user BINARY(16) NOT NULL,
  register_start DATE NOT NULL,
  register_end DATE,
  course VARCHAR(36) NOT NULL,
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

INSERT INTO type_courses(name_type) VALUES ("Matemáticas"), ("Idiomas"), ("Física"), ("Química"), ("Filosofía"), ("Sociales"),("Lectura - Escritura"),("Ecología"),("Tecnología"),("Tips");
INSERT INTO courses(id,course_type,course_name) VALUES 
(UUID() ,1,"Algebra"),
(UUID(),1,"Geometría y Trigonometría"),
(UUID(),1,"Geometría Analítica"),
(UUID(),1,"Calculo diferencial"),
(UUID(),1,"Calculo Integral"),
(UUID(),1,"Probabilidad y estadística"),
(UUID(),3,"Física 1"),
(UUID(),3,"Física 2"),
(UUID(),10, "Consejos para obtener mejores calificaciones");