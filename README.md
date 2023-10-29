# sistema-de-membros
# API REST com Express e PostgreSQL

Este é um projeto de exemplo que demonstra como criar uma API REST simples usando Node.js, Express e um banco de dados PostgreSQL para gerenciar usuários. Você pode usar este projeto como base para criar seu próprio sistema de gerenciamento de usuários.

## Pré-requisitos

- Node.js instalado no seu sistema
- Banco de dados PostgreSQL instalado e configurado
- Biblioteca `pg-promise` instalada (você pode instalá-la com `npm install pg-promise`)
- Biblioteca `express` instalada (você pode instalá-la com `npm install express`)
- Biblioteca `body-parser` instalada (você pode instalá-la com `npm install body-parser`)

## Instalação

1. Clone este repositório para o seu sistema:

   ``
   git clone https://github.com/vitorvilarim/sistema-de-membros
Navegue até o diretório do projeto:


cd api-express-pg
Instale as dependências do projeto:
npm install

Configure as informações de conexão com o banco de dados PostgreSQL no arquivo banco_de_dados.js:

const pool = require('./database/banco_de_dados');

Uso
Inicie o servidor:

npm run dev
A API estará disponível em http://localhost:3000.

Rotas
A API possui as seguintes rotas:

POST /usuarios: Cadastra um novo usuário. Envie um JSON com nome, nascimento e cargo.

PUT /usuarios: Atualiza um usuário existente. Envie um JSON com id, nome, nascimento e cargo.

GET /usuarios: Lista todos os usuários no banco de dados.

DELETE /usuarios/:id: Exclui um usuário com o ID especificado.



Exemplo de Requisições
Aqui estão exemplos de como usar as rotas da API:

Cadastrar um usuário:
POST http://localhost:3000/usuarios
Body: {"nome": "John Doe", "nascimento": "1990-01-01", "cargo": "Desenvolvedor"}

Atualizar um usuário:
PUT http://localhost:3000/usuarios
Body: {"id": 1, "nome": "Jane Doe", "nascimento": "1995-02-15", "cargo": "Gerente"}


Listar todos os usuários:
GET http://localhost:3000/usuarios


Excluir um usuário:
DELETE http://localhost:3000/usuarios/1