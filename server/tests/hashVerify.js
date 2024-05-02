import bcrypt from 'bcrypt';

const originalPassword = 'password123';
const storedHash1 = '$2b$10$MQWgxBbfdQqBkkzw/bREeOd4dlUVCJulscUEIGL90sqcyW9ccWTiG';
const storedHash2 = '$2b$10$F5FWbP6Plm8hsdTuR.6chuozS8TDo2LGTXsHRriScL6ktSCkMofqC';

async function verifyPassword() {
    // 첫 번째 해시 검증
    const match1 = await bcrypt.compare(originalPassword, storedHash1);
    console.log('First hash match:', match1);  // true 이어야 합니다.

    // 두 번째 해시 검증
    const match2 = await bcrypt.compare(originalPassword, storedHash2);
    console.log('Second hash match:', match2);  // true 이어야 합니다.
}

verifyPassword();