#### API Rest e base de dados de alunos contendo: 
- nome 
- CPF
- e-mail

O presente projeto foi desenvolvido com `NodeJs`, `Express.js`, `Knex`, `cors` e padrão `REST`.

#### Como inicializar o projeto?

- Faça o Fork do repositório do projeto e clone-o em sua máquina.

- Certifique-se que tenha instalado em sua máquina as versões do `docker` e `docker-compose` caso não os tenha instale-os [clicando aqui](https://docs.docker.com/desktop/windows/install/).
- Tendo certeza que tanto o `docker` quanto `docker-compose` estão instalados em sua máquina utilize o seguinte comando: `docker-compose up` em seu terminal, preferencialmente, no `terminal do vscode`

- A partir daí serão geradas as imagens docker tanto da api rest quanto do banco de dados que no caso é o `PostgreSQL`.

- O projeto irá iniciar com o `nodemon` e apresentará o seguinte resultado no terminal:

##### - Atenção o `nodemon` pode estar not found, se isto ocorrer execute o comando `npm install nodemon --save-dev` e resolverá o problema.

> service-api| > back_end_psel_wa@1.0.0 start
service-api | > nodemon ./src/index.js
service-api | 
service-api | [nodemon] 2.0.15
service-api | [nodemon] to restart at any time, enter `rs`
service-api | [nodemon] watching path(s): *.*
service-api | [nodemon] watching extensions: js,mjs,json
service-api | [nodemon] starting `node ./src/index.js`

##### - Importante: ao executar o projeto o `nodemon` pode retornar not found, se isto ocorrer execute o comando `npm install nodemon --save-dev` e resolverá o problema.

- Após isto você deverá proceder com a criação da tabela alunos no banco de dado postgreSQL que foi criado, dica: utilize o `beequeper` ou outra tecnologia que esteja mais familizarizado.

- O nome do banco criado é `postgres` e a senha também é `postgres` tanto a criação da tabela quanto os dados dos alunos que serão inseridos, encontam-se no arquivo `squema.sql` na raiz do projeto.

- Feito tudo isso você pode fazer as requisições utilizando as rotas especificadas no arquivo `rotas` na pasta `src`.

#### Exemplo de requisições:

- Dica: utilize o `insominia` para fazer as reuisições.

- `http://localhost:3333/alunos`
    - resposta:
    > [
  {
    "id": 1,
    "nome": "José Emanuel da Silva",
    "cpf": "09489789055",
    "email": "jose@email.com"
  },
  {
    "id": 2,
    "nome": "Maria Oliveira da Silva",
    "cpf": "11122244433",
    "email": "maria@email.com"
  },
  {
    "id": 3,
    "nome": "Marta Costa da Silva",
    "cpf": "44334567256",
    "email": "marta123@email.com"
  },
  {
    "id": 4,
    "nome": "Marcos Oliveira da Santos",
    "cpf": "33467678967",
    "email": "marcos01@email.com"
  },
  {
    "id": 5,
    "nome": "Carmém Lúcia da Silva",
    "cpf": "10920944933",
    "email": "carminha@email.com"
  },
  {
    "id": 6,
    "nome": "Rodrigo Lopes da Silva",
    "cpf": "01020230399",
    "email": "lopes@email.com"
  },
  {
    "id": 7,
    "nome": "José Samuel da Silva",
    "cpf": "09484489055",
    "email": "josesamu@email.com"
  },
  {
    "id": 8,
    "nome": "Maria Barbara da Silva",
    "cpf": "11198244433",
    "email": "maria_007@email.com"
  },
  {
    "id": 9,
    "nome": "Marta Carla de Sousa",
    "cpf": "44334599256",
    "email": "marta123@email.com"
  },
  {
    "id": 10,
    "nome": "Marcos Ribeiro",
    "cpf": "30067678967",
    "email": "marcos_riba@email.com"
  },
  {
    "id": 11,
    "nome": "Mariana Lúcia da Silva",
    "cpf": "10920094933",
    "email": "lu_lu123@email.com"
  },
  {
    "id": 12,
    "nome": "Garcia Lopes Santos da Silva",
    "cpf": "01098230399",
    "email": "g_lopes@email.com"
  }
]

- pesquisando por cpf: `http://localhost:3333/alunos/01098230399`
    - resposta:
    > [
  {
    "id": 12,
    "nome": "Garcia Lopes Santos da Silva",
    "cpf": "01098230399",
    "email": "g_lopes@email.com"
  }
]

- pesquisando por nome: `http://localhost:3333/alunos/Marcos Ribeiro`
    - resposta:
    > [
  {
    "id": 10,
    "nome": "Marcos Ribeiro",
    "cpf": "30067678967",
    "email": "marcos_riba@email.com"
  }
]

- pesquisando por email: `http://localhost:3333/alunos/marta123@email.com`
    - resposta:
    > [
  {
    "id": 3,
    "nome": "Marta Costa da Silva",
    "cpf": "44334567256",
    "email": "marta123@email.com"
  }
]

