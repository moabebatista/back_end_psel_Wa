const express = require('express');
const alunos = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', alunos.listarAlunos);

module.exports = rotas;