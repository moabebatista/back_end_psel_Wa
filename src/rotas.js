const express = require('express');
const alunos = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.buscarAluno);

module.exports = rotas;