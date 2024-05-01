const bcrypt = require('bcrypt');
const pool = require('../utils/database');

const User = {
    create: async (userData) => {
        console.log(`userData: ${userData}`)
        console.log(`userData: ${userData.uid}`)
        console.log(`userData: ${userData.password}`)
        try {
            // 비밀번호 해싱
            const hash = await bcrypt.hash(userData.password, 10);
            console.log(hash)

            // 데이터베이스에 사용자 정보 삽입
            const [results] = await pool.query(`
                INSERT INTO users (uid, password)
                VALUES (?, ?)`,
                [userData.uid, hash]
            );

            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = User;