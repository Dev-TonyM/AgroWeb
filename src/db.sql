create database agropecuaria;
CREATE TABLE productos (
  id int PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(64),
  codigo int,
  categoria_id int,
  cantidad int,
  precio decimal(11,2),
  marca varchar(64),
  descripcion varchar(500)
);
CREATE TABLE categorias (
  id int PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(64) not NULL
);
CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  user varchar(32) NOT NULL,
  pass varchar(256) NOT NULL,
  nombre varchar(64) NOT NULL,
  apellido varchar(64) NOT NULL,
  tipoU_id int NOT NULL
);
INSERT INTO users (user, pass, nombre, apellido, tipoU_id) VALUES
('PerroMojado225', '1234567890', 'Miguel', 'Cervantes', 2),
('Crayoraroja55tu', '123454321', 'Carolina', 'Herrera', 1);

CREATE TABLE tipo_user (
  id int PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(64) not NULL
);
INSERT INTO tipo_user (nombre) VALUES
('Admin'),
('Cliente');
