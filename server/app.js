const express = require('express');
const pool = require('./utils/database');

const app = express();
console.log(pool)

app.get('/', async (req, res) => {
    let conn;
    try {
        // 임시 쿼리
        conn = await pool.getConnection();  // 연결 풀에서 연결을 가져옴
        const [rows, fields] = await conn.query('SELECT * FROM adv_employees');  // 쿼리 실행
        res.json(rows);  // 결과를 JSON 형식으로 클라이언트에 전달
    } catch (err) {
        console.error('Error during database query:', err);
        res.status(500).send('Database query failed');
    } finally {
        if (conn) conn.release();  // 연결을 풀에 반환
    }
})

app.listen('8080', () => {
    console.log('서버 시작')
});