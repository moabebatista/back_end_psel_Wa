const express = require('express');
const cors = require('cors');
const rotas = require('./rotas');


const PORT = 3333;
const HOST = "0.0.0.0"
const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(PORT, HOST);