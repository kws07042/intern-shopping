import pool from './database.js';

export async function selectAll(tableName) {
    const conn = await pool.getConnection();  // 연결 풀에서 연결을 가져옴
    try {
        const [rows, fields] = await conn.query(`SELECT * FROM ${tableName}`);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();  // 연결을 풀에 반환
    }
}

export async function insertUser(uid, password) {
    const conn = await pool.getConnection();
    try {
        const query = `INSERT INTO users (uid, password) VALUES (?, ?)`;
        const [results] = await conn.query(query, [uid, password]);
        return results;
    } catch (error) {
        throw error;
    } finally {
        if (conn) {
            conn.release();
        }
    }
}