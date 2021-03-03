CREATE DATABASE productos_db;

USE productos_db;

CREATE TABLE productos(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    descripcion VARCHAR(255),
    precio INT(50),
    cantidad INT(20),
    foto VARCHAR(250),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

DESCRIBE productos;