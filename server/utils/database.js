const mysql = require('mysql2/promise');

/**
 * 데이터베이스 연결 풀 생성
 * @param {string} host - 데이터베이스 서버의 호스트 이름.
 * @param {string} user - 데이터베이스 접속을 위한 사용자 아이디.
 * @param {string} password - 데이터베이스 접속을 위한 비밀번호.
 * @param {string} database - 접근할 데이터베이스의 이름.
 * @param {boolean} waitForConnections - 연결을 기다릴지 여부. 이 값이 true이면 연결 가능할 때까지 요청 대기
 * @param {number} connectionLimit - 풀에 생성할 수 있는 최대 연결 수.
 * @param {number} queueLimit - 대기열의 최대 크기. 0은 큐 크기 제한 없음을 의미
 */
/*const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});*/
const pool = mysql.createPool({
    user: 'root',
    password: '1234',
    database: 'cupang',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;