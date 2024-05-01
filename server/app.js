const express = require('express');
const bodyParser = require('body-parser');

const pool = require('./utils/database');
const User = require("./models/User");

const app = express();

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱목적
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱목적

app.get('/', async (req, res) => {
    let conn;
    try {
        // 임시 쿼리
        conn = await pool.getConnection();  // 연결 풀에서 연결을 가져옴
        const [rows, fields] = await conn.query('SELECT * FROM adv_employees');  // 쿼리 실행
        console.log('db ok')
        res.json(rows);  // 결과를 JSON 형식으로 클라이언트에 전달
    } catch (err) {
        console.error('Error during database query:', err);
        res.status(500).send('Database query failed');
    } finally {
        if (conn) conn.release();  // 연결을 풀에 반환
    }
})

// 회원가입 라우트
app.post('/signup', async (req, res) => {
    console.log(`req.body: ${req.body}`); // 요청 본문 로그 출력
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const result = await User.create({ uid, password });
        res.status(200).json({ message: 'User created successfully', result });
    } catch (error) {
        console.error(`Signup error: ${error}`);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

app.listen('8080', () => {
    console.log('서버 시작')
});