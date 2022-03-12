const express = require('express');
const rotas = require('./rotas');

const PORT = 3000;
const HOST = "0.0.0.0"
const app = express();

app.use(express.json());
app.use(rotas);

app.listen(PORT, HOST);