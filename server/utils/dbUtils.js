import pool from './database.js';
import bcrypt from "bcrypt";

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

export async function insertUser(email, password, username) {
    const conn = await pool.getConnection();
    try {
        const query = `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`;
        const [results] = await conn.query(query, [email, password, username]);
        return results;
    } catch (error) {
        throw error;
    } finally {
        if (conn) {
            conn.release();
        }
    }
}

export async function signInUser(email, inputPassword) {
    console.log(`email: ${email}`)
    console.log(`inputPassword: ${inputPassword}\n`)
    const conn = await pool.getConnection();

    try {
        console.log('로그인 시도중 ... ... ...')
        const query = `SELECT * FROM users WHERE email = ?`;
        const [results] = await conn.query(query, [email]);
        console.log(results)

        if (results.length > 0) {
            const storedHash = results[0].password;
            const hashMatch = await bcrypt.compare(inputPassword, storedHash);
            console.log(`storedHash: ${storedHash}`)
            console.log(`hashMatch: ${hashMatch}`)

            if (hashMatch) {
                console.log('비밀번호 일치');
                return results[0];
            } else {
                console.log('비밀번호 불일치');
                return false;
            }
        } else {
            throw new Error('User not Found')
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

export const selectProductById = async (id) => {
    const conn = await pool.getConnection();

    try {
        const query = `SELECT * FROM products WHERE id = ?`;
        const [rows] = await conn.query(query, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

export const selectCartByUserId = async (userId) => {
    const conn = await pool.getConnection();

    try {
        const query = `SELECT * FROM cart WHERE id = ?`;
        const [rows] = await conn.query(query, [userId]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}