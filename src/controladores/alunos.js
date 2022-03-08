const knex = require('../conexao');

const listarAlunos = async (req, res) => {
    try {
        const alunos = await knex('alunos');

        return res.status(200).json(alunos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarAlunos
}