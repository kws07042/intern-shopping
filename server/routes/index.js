import express from 'express';
import {selectAll} from '../utils/dbUtils.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rows = await selectAll('users');
        // 결과를 JSON 형식으로 클라이언트에 전달
        res.status(200).json({
            message: 'Product list',
            rows
        });
    } catch (err) {
        console.error('Error during database query:', err);
        res.status(500).send('Database query failed');
    }
});

export default router;