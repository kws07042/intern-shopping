import express from 'express';
import {selectAll} from '../utils/dbUtils.js';

/*const {selectAll} = require("../utils/dbUtils");
const express = require('express');
*/
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rows = await selectAll('users')  // 쿼리 실행
        console.log('db ok')
        res.json(rows);  // 결과를 JSON 형식으로 클라이언트에 전달
    } catch (err) {
        console.error('Error during database query:', err);
        res.status(500).send('Database query failed');
    }
});

export default router;