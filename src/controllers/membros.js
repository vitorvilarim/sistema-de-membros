const pool = require('../database/banco_de_dados');

const listarUsuarios = async (req, res) => {
    try {
        const query = 'SELECT * FROM usuarios';
        const users = await pool.any(query);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};

// Função para cadastrar um usuário
const cadastrarUsuario = async (req, res) => {
    try {
        const { nome, nascimento, cargo } = req.body;

        if (!nome || !nascimento || !cargo) {
            return res.status(400).json({ error: 'Todos os campos (nome, nascimento e cargo) são obrigatórios.' });
        }

        const query = 'INSERT INTO usuarios (nome, nascimento, cargo) VALUES ($1, $2, $3) RETURNING *';
        const newUser = await pool.one(query, [nome, nascimento, cargo]);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
};

// Função para atualizar um usuário
const atualizarUsuario = async (req, res) => {
    try {
        const { nome, nascimento, cargo, id } = req.body;

        if (!nome || !nascimento || !cargo || !id) {
            return res.status(400).json({ error: 'Todos os campos (id, nome, nascimento e cargo) são obrigatórios.' });
        }

        const query = 'UPDATE usuarios SET nome = $1, nascimento = $2, cargo = $3 WHERE id = $4 RETURNING *';
        const updatedUser = await pool.one(query, [nome, nascimento, cargo, id]);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Função para excluir um usuário
const excluirUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
        const deletedUser = await pool.one(query, id);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
};

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}
