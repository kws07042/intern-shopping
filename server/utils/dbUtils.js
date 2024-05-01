const dbPool = require('./database');

async function fetchAll(tableName) {
    const [rows] = await dbPool.query(`SELECT * FROM ${tableName}`);
    return rows;
}

console.log(fetchAll())