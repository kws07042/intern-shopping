import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Login Router')
});

module.exports = router;