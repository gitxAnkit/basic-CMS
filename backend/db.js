const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "9098",
    host: "localhost",
    port: 5432,
    database: "vahancms",
});

module.exports = pool;