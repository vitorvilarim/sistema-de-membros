CREATE DATABASE membros;

CREATE TABLE usuarios (
	id serial primary key,
  nome text NOT NULL,
  sexo text NOT NULL,
  nascimento text NOT NULL,
  estado_civil text NOT NULL,
  grupo_id integer,
  cargo_id integer default 1
);


CREATE TABLE cargo (
	id serial primary key,
  cargo text NOT NULL
);

CREATE TABLE grupo (
	id serial primary key,
  grupo text NOT NULL
);


INSERT INTO cargo (cargo) VALUES 
('Membro'),
('Auxiliar'),
('Diácono'),
('Diaconisa'),
('Presbítero'),
('Evangelista'),
('Missionário'),
('Missionária'),
('Pastor');


INSERT INTO grupo (grupo) VALUES 
('Crianças'),
('Adolescentes'),
('Jovens'),
('Adultos'),
('Senhores'),
('Senhoras');