import express from "express";

// import Models
import Cart from "../models/cart.js";

const router = express.Router();

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

export default router;