import express from "express";

// import Models
import Cart from "../models/cart.js";

const router = express.Router();
router.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'Cart list'
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