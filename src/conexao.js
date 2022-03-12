const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host : 'db',
      user : 'postgres',
      password : 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  });

  module.exports = knex;