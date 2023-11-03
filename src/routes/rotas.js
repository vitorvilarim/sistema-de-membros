const express = require('express');
const { listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario } = require('../controllers/membros');
const rotas = express();

rotas.get('/usuarios', listarUsuarios);
rotas.post('/usuarios', cadastrarUsuario);
rotas.put('/usuarios', atualizarUsuario);
rotas.delete('/usuarios/:id', excluirUsuario);

module.exports = rotas;