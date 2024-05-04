import express from "express";
import jwt from "jsonwebtoken";
import {selectUserById} from "../utils/dbUtils.js";

const router = express.Router();
router.get('/', async (req, res) => {
    // 클라이언트가 보낸 인증 토큰을 가져옴
    const token = req.headers.authorization;

    // 토큰이 없거나 형식이 잘못된 경우 에러 응답
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        // 토큰에서 사용자 정보 추출
        const decodedToken = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);

        const user = await selectUserById(id);
        console.log(user)

        res.json(user);
    } catch (error) {
        console.error('Error while decoding token:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
})

export default router;