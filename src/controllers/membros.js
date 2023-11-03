const knex = require('../database/banco_de_dados');

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await knex('usuarios');
        return res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};

// Função para cadastrar um usuário
const cadastrarUsuario = async (req, res) => {
    const { nome, nascimento, cargo } = req.body;
    try {

        if (!nome || !nascimento || !cargo) {
            return res.status(400).json({ error: 'Todos os campos (nome, nascimento e cargo) são obrigatórios.' });
        }

        const query = 'INSERT INTO usuarios (nome, nascimento, cargo) VALUES ($1, $2, $3) RETURNING *';
        const newUser = await pool.one(query, [nome, nascimento, cargo]);
        return res.json(newUser);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
};

// Função para atualizar um usuário
const atualizarUsuario = async (req, res) => {
    const { nome, nascimento, cargo, id } = req.body;
    try {

        if (!nome || !nascimento || !cargo || !id) {
            return res.status(400).json({ error: 'Todos os campos (id, nome, nascimento e cargo) são obrigatórios.' });
        }

        const query = 'UPDATE usuarios SET nome = $1, nascimento = $2, cargo = $3 WHERE id = $4 RETURNING *';
        const updatedUser = await pool.one(query, [nome, nascimento, cargo, id]);
        return res.json(updatedUser);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Função para excluir um usuário
const excluirUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
        const deletedUser = await pool.one(query, id);
        return res.json(deletedUser);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
};

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}
