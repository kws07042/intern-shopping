import express from 'express';
import {signInUser} from "../utils/dbUtils.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());
router.use(session({
    secret: 'your-secret-key',  // 세션 암호화 키
    resave: false,              // 세션을 항상 저장할지 결정
    saveUninitialized: false,   // 초기화되지 않은 세션을 저장소에 저장
    cookie: { secure: false, httpOnly: true }   // 쿠키 설정
}));

router.post('/', async (req, res) => {
    // DebugLog 요청 본문 로그 출력
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const {email, password, username} = req.body;
    try {
        const user = await signInUser(email, password, username);
        
        // 사용자 아이디 세션에 저장
        if (user) {
            req.session.userId = user.id;
            req.session.isLogin = true;
            res.status(200).json({
                message: 'Login successful',
                user,
                redirect: '/'
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        console.error(`SignIn error: ${error.message}`, error);
        res.status(500).json({ message: 'Error', error: error.message });
    }
});

export default router;