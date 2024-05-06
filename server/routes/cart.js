import express from "express";
import pool from "../utils/database.js";

const router = express.Router();

// TEST: 사용자 데이터
const user = {
    id: 1,
    username: '1234',
    email: 'exam01@anasan.ac.kr',
}

// GET: 로그인한 사용자의 장바구니 목록
router.get('/', async (req, res) => {
    console.log(`req.session: ${JSON.stringify(req.session)}`);

    const conn = await pool.getConnection();
    //const sql = `SELECT * FROM cart WHERE user_id = ?`;
    const sql = `
        SELECT
            cart.user_id,
            cart.product_id,
            cart.quantity,
            products.id,
            products.name,
            products.price,
            products.description
        FROM cart
        JOIN products ON cart.product_id = products.id
        WHERE cart.user_id = ?`;
    const [rows] = await conn.query(sql, [user.id]);
    console.log(`cart: ${JSON.stringify(rows)}`);

    res.status(200).json({
        message: 'Cart list',
        cart: rows
    });
});


// POST: 로그인한 사용자의 장바구니에 아이템 추가
router.post('/add', async (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const { user_id, product_id } = req.body;

    // 유효성 검사
    if (!user_id || !product_id) {
        return res.status(400).json({
            message: 'Item id, name, and price are required'
        });
    }

    const conn = await pool.getConnection();
    const sql = `INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)`;
    const [result] = await conn.query(sql, [user_id, product_id, 1]);
    console.log(`result: ${JSON.stringify(result)}`);

    res.status(200).json({
        message: 'Item added to cart',
        result
    });
});


// POST: 로그인한 사용자의 장바구니에 아이템 삭제
router.post('/remove', async (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const { user_id, product_id } = req.body;

    // 유효성 검사
    if (!user_id || !product_id) {
        return res.status(400).json({
            message: 'Item id and user id are required'
        });
    }

    const conn = await pool.getConnection();
    const sql = `DELETE FROM cart WHERE user_id = ? AND product_id = ?`;
    const [result] = await conn.query(sql, [user_id, product_id]);
    console.log(`result: ${JSON.stringify(result)}`);

    res.status(200).json({
        message: 'Item removed from cart',
        result
    });

    res.status(200).json({
        message: 'Item removed from cart'
    });
});

export default router;