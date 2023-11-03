const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '1618',
        database: 'membros'
    }
});

module.exports = knex;