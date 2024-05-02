import express from "express";
import {selectAll} from "../utils/dbUtils.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rows = await selectAll('products');
        res.status(200).json({
            message: 'Product list',
            rows
        });
    } catch (error) {
        console.error(`Product list error: ${error.message}`, error);
        res.status(500).send({
            message: 'Error getting product list',
            error: error.message
        });
    }
});

export default router;