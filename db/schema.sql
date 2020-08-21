CREATE DATABASE burgers_db;
DROP DATABASE IF EXISTS burgers_db;
USE burgers_db;

DROP TABLE burgers;

CREATE  TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (30) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY (id)
);