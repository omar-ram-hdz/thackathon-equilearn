DROP DATABASE IF EXISTS equilearn;
CREATE DATABASE IF NOT EXISTS equilearn;
USE equilearn;

CREATE TABLE grades(
	id INT AUTO_INCREMENT PRIMARY KEY,
    grade_name VARCHAR (50)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE profile_pictures(
	id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(100) NOT NULL
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE users(
  id BINARY(16) PRIMARY KEY,
  full_name VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL,
  pass BLOB NOT NULL,
  grade INT DEFAULT 1,
  profile_image INT DEFAULT 1,
  FOREIGN KEY (grade) REFERENCES grades(id),
  FOREIGN KEY (profile_image) REFERENCES profile_pictures(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE courses(
  id VARCHAR(36) PRIMARY KEY,
  course_name VARCHAR(60) NOT NULL,
  image VARCHAR(100) DEFAULT "course_default.jpg",
  grade INT NOT NULL,
  FOREIGN KEY (grade) REFERENCES grades(id)
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

INSERT INTO grades(grade_name) VALUES ("Semestre 1"), ("Semestre 2"), ("Semestre 3"), ("Semestre 4"), ("Semestre 5"), ("Semestre 6");
INSERT INTO profile_pictures (url) VALUES ("profile_picture_option_default.svg");
INSERT INTO courses(id, course_name,grade) VALUES
(UUID(), "Pensamiento matemático",1),
(UUID(), "La materia y sus INT", 1),
(UUID(), "Cultura digital", 1),
(UUID(), "Lengua y comunicación", 1),
(UUID(), "Humanidades 1", 1),
(UUID(), "Recursos socio emocionales", 1),
(UUID(), "Ingles 1", 1),
(UUID(), "Ciencias sociales", 1),
(UUID(), "Pensamiento matemático 2", 2),
(UUID(), "Ingles 2", 2),
(UUID(), "Conocimiento de la energía", 2),
(UUID(), "Lengua y comunicación", 2),
(UUID(), "Cultura digital", 2),
(UUID(), "Recursos socio emocionales", 2),
(UUID(), "Ciencias sociales 2", 2),
(UUID(), "Ingles 3", 3),
(UUID(), "Ética", 3),
(UUID(), "Biología", 3),
(UUID(), "Geometría analítica", 3),
(UUID(), "Física 1", 4),
(UUID(), "Calculo diferencial", 4),
(UUID(), "Ingles 4", 4),
(UUID(), "Ecología", 4),
(UUID(), "Física 2", 5),
(UUID(), "Calculo Integral", 5),
(UUID(), "Ciencia Tecnología Sociedad y Valores", 5),
(UUID(), "Ingles 5", 5),
(UUID(), "Temas de Física", 6),
(UUID(), "Temas de Filosofía", 6),
(UUID(), "Probabilidad y estadística", 6),
(UUID(), "Dibujo técnico", 6);