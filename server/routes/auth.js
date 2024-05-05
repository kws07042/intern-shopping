import express from "express";
import jwt from 'jsonwebtoken';

// 환경변수 설정
import dotenv from 'dotenv';
dotenv.config();

// 모델 import
import userModel from '../models/userModel.js';

// validation 함수 import
import {signInUser} from "../utils/dbUtils.js";
import {isEmailValid, isPasswordValid} from "../controllers/validation.js";

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    };

    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });
}

const router = express.Router();

// POST: 회원가입
router.post('/register', async (req, res) => {
    // DebugLog 요청 본문 로그 출력
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const {email, password, username} = req.body;

    // 이메일과 비밀번호 null 체크
    if (!email || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }

    // 이메일 형식 유효성 검사
    if (!isEmailValid(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // 비밀번호 형식 유효성 검사
    // if (!isPasswordValid(password)) {
    //     return res.status(400).json({ message: 'Invalid password format' });
    // }

    try {
        // 사용자가 존재하지 않으면 새로운 사용자 생성
        const result = await userModel.create({email, password, username});
        res.status(200).json({
            message: 'User created successfully',
            result,
            redirect: '/'
        });
    } catch (error) {
        console.error(`Signup error: ${error.message}`, error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

// POST: 로그인
router.post('/login', async (req, res) => {
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
            console.log(`Token generated: ${token}`)

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