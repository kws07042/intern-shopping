import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import {signInUser} from "../utils/dbUtils.js";
import {isEmailValid, isPasswordValid} from "../controllers/validation.js";

const SECRET_KEY = process.env.SECRET_KEY;
console.log(`SECRET_KEY: ${SECRET_KEY}`);
const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    };

    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });
}

const router = express.Router();
router.post('/', async (req, res) => {
    // DebugLog 요청 본문 로그 출력
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const {email, password, username} = req.body;

    // 이메일과 비밀번호가 모두 입력되었는지 확인
    if (!email || !password) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 이메일 유효성 검사
    if (!isEmailValid(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    
    // 비밀번호 유효성 검사
    // if (!isPasswordValid(password) === false) {
    //     return res.status(400).json({ message: 'Invalid password format' });
    // }

    try {
        const user = await signInUser(email, password, username);
        
        // 사용자 아이디 토큰에 저장
        if (user) {
            const token = generateToken(user);
            res.status(200).json({
                message: 'Login successful',
                user,
                token,
                redirect: '/'
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        console.error(`SignIn error: ${error.message}`, error);
        res.status(500).json({ message: 'Error', error: error.message });
    }
});

export default router;