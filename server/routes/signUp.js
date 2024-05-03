import express from 'express';
import user from '../models/user.js';

const router = express.Router();
router.post('/', async (req, res) => {
    // DebugLog 요청 본문 로그 출력
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const {email, password, username} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }

    try {
        const result = await user.create({email, password, username});
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