import express from "express";

// import Models
import Cart from "../models/cart.js";

const router = express.Router();

// 미들웨어
router.use((req, res, next) => {
    console.log('Cart middleware');
    /*if (!req.session.cart) {
        req.session.cart = new Cart();
    }*/
    next();
})

// GET: 장바구니 목록
router.get('/', (req, res) => {
    const cart = new Cart();
    const products = cart.getProducts();

    try {
        res.status(200).json({
            message: 'Cart list',
            products: products
        });
    } catch (error) {
        console.error(`Cart list error: ${error.message}`, error);
        res.status(500).send({
            message: 'Error getting cart list',
            error: error.message
        });
    }
});

// POST: 장바구니 추가
router.post('/', (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
});

export default router;