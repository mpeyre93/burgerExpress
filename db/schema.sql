--drop burgers_db is it currently exists--
DROP DATABASE IF EXISTS burgers_db;

--create database--
CREATE DATABASE burgers_db;

USE burgers_db;

--create a burgers table--
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);