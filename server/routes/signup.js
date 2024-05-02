import express from 'express';
import user from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
    // 요청 본문 로그 출력
    // console.log(`req.body: ${JSON.stringify(req.body)}`);
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const result = await user.create({ uid, password });
        res.status(200).json({ message: 'User created successfully', result });
    } catch (error) {
        console.error(`Signup error: ${error.message}`, error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

export default router;