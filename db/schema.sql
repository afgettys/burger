CREATE burgers_db;
DROP DATABASE IF EXISTS burguers_db;
USE burgers_db;

CREATE  TABLE burgers (
    id AUTO_INCREMENT NOT NULL,
    burguer_name VARCHAR (30) NOT NULL,
    devoured boolean 
)