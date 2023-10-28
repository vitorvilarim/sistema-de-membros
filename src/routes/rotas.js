const express = require('express');
const { listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario } = require('../controllers/membros');
const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
rotas.put('/usuarios', atualizarUsuario);
rotas.get('/usuarios', listarUsuarios);
rotas.delete('/usuarios/:id', excluirUsuario);

module.exports = rotas;