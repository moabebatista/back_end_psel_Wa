-- criar a tabela de alunos
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
    ('Marta Costa da Silva', '44334567256', 'marta123@email.com'),
    ('Marcos Oliveira da Santos', '33467678967', 'marcos01@email.com'),
    ('Carmém Lúcia da Silva', '10920944933', 'carminha@email.com'),
    ('Carlos Lopes da Silva', '39911123490', 'carloslss@email.com'),
	('José Samuel da Silva', '09484489055', 'josesamu@email.com'),
    ('Maria Barbara da Silva', '11198244433', 'maria_007@email.com'),
    ('Marta Carla de Sousa', '44334599256', 'marta123@email.com'),
    ('Marcos Ribeiro', '30067678967', 'marcos_riba@email.com'),
    ('Mariana Lúcia da Silva', '10920094933', 'lu_lu123@email.com'),
    ('Garcia Lopes Santos da Silva', '01098230399', 'g_lopes@email.com');