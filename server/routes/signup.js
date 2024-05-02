const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post('/', async (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`); // 요청 본문 로그 출력
    const { uid, password } = req.body;

    if (!uid || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const result = await User.create({ uid, password });
        res.status(200).json({ message: 'User created successfully', result });
    } catch (error) {
        console.error(`Signup error: ${error}`);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

module.exports = router;