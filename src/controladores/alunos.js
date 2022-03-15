const knex = require('../conexao');

const listarAlunos = async (req, res) => {
    try {
        const alunos = await knex('alunos');

        return res.status(200).json(alunos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const buscarAluno = async (req, res) => {
    const { id } = req.params;

    try {
        const aluno = [];

        const alunoNome = await knex('alunos').where({ nome: id}).first();
        const alunoCpf = await knex('alunos').where({ cpf: id}).first();
        const alunoEmail = await knex('alunos').where({ email: id}).first();

        if(alunoNome) aluno.push(alunoNome);

        if(alunoCpf) aluno.push(alunoCpf);

        if(alunoEmail) aluno.push(alunoEmail);

        if (!alunoNome && !alunoCpf && !alunoEmail ) return res.status(400).json("Aluno não encontrado!");

        res.json(aluno);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarAlunos,
    buscarAluno
}