--criar banco de dados escola
CREATE DATABASE escola;

-- criar a tabela de alunos de escola
CREATE TABLE IF NOT EXISTS alunos (
  	id SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL,
  	cpf varchar(11) NOT NULL,
  	email text NOT NULL
 );

-- inserindo alunos na tabela
INSERT INTO alunos (nome, cpf, email)
VALUES
	('José Emanuel da Silva', '09489789055', 'jose@email.com'),
    ('Maria Oliveira da Silva', '11122244433', 'maria@email.com'),
    ('Rodrigo Lopes da Silva', '01020230399', 'lopes@email.com');