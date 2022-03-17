
## API Rest e base de dados de alunos contendo: 
- nome 
- CPF
- e-mail

##### O presente projeto foi desenvolvido com `NodeJs`, `Express.js`, `Knex`, `cors` e padrão `REST`.

## Como inicializar o projeto com DOCKER?

- Faça o Fork do repositório do projeto e clone-o em sua máquina.

- Certifique-se que tenha instalado em sua máquina as versões do `docker` e `docker-compose` caso não os tenha instale-os [clicando aqui](https://docs.docker.com/desktop/windows/install/).
- Tendo certeza que tanto o `docker` quanto `docker-compose` estão instalados em sua máquina utilize o seguinte comando: `docker-compose up` em seu terminal, preferencialmente, no `terminal do vscode`

- A partir daí serão geradas as imagens docker tanto da api rest quanto do banco de dados que no caso é estamos usando `PostgreSQL`.

- O projeto irá iniciar com o `nodemon` e apresentará o seguinte resultado no terminal:

[](![image](https://user-images.githubusercontent.com/83438974/158681850-8873d389-9842-4a1f-836b-362cc882cb32.png)

##### - Atenção o `nodemon` pode estar `not found`, se isto ocorrer execute o comando `npm install nodemon --save-dev` e resolverá o problema.

- Agora devemos ser capazes de nos conectar ao banco de dados usando uma ferramenta como `Beekeeper Studio`, `DBeaver`, `pgAdmin` ou outra tecnologia que esteja mais familizarizado.

- Utilize o usuario `postgres` e a senha `postgres` estando conectado você verá que foi criado um banco de dados como nome `postgres`, sendo assim crie a tabela alunos e insira os dados fakes. As instruções de Criação da Tabela e Inserção dos dados dos alunos encontran-se no arquivo `squema.sql` na raiz do projeto.

- Feito tudo isso você pode fazer as requisições utilizando as rotas especificadas no arquivo `rotas` na pasta `src`.

#### Exemplo de requisições:

- Dica: utilize o `insominia` para fazer as reuisições.

- `http://localhost:3333/alunos`
    - resposta:
```json 
 [
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
```

- pesquisando por cpf: `http://localhost:3333/alunos/01098230399`
    - resposta:
```json
[
  {
    "id": 12,
    "nome": "Garcia Lopes Santos da Silva",
    "cpf": "01098230399",
    "email": "g_lopes@email.com"
  }
]
```
- pesquisando por nome: `http://localhost:3333/alunos/Marcos Ribeiro`
    - resposta:
```json
[
  {
    "id": 10,
    "nome": "Marcos Ribeiro",
    "cpf": "30067678967",
    "email": "marcos_riba@email.com"
  }
]
```

- pesquisando por email: `http://localhost:3333/alunos/marta123@email.com`
    - resposta:
 ```json
 [
  {
    "id": 3,
    "nome": "Marta Costa da Silva",
    "cpf": "44334567256",
    "email": "marta123@email.com"
  }
]
```
