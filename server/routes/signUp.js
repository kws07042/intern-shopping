import express from 'express';

// 모델 import
import userModel from '../models/userModel.js';

// 유효성 검사 함수 import
import {isEmailValid, isPasswordValid} from "../controllers/validation.js";

const router = express.Router();
router.post('/', async (req, res) => {
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

export default router;