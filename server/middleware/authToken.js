import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// 환경변수 로딩
dotenv.config();

// 임시 미들웨어
const authenticateToken = (req, res, next) => {
    // 쿠키 or 헤더에서 토큰 가져오기
    const token = req.cookies['token'] || req.headers['x-access-token']?.split(' ')[1];
    console.log(`Token: ${token}`)

    const data = {
        token: token,
        user: req.user
    }

    console.log(`data: ${JSON.stringify(data)}\n`);

    // 토큰이 없다면 401 에러 반환
    if (!token) return res.status(401).json({ message: 'Access denied, no token provided', data: data });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        // 토큰이 만료되거나 유효하지 않다면 403 에러 반환
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });
        
        // 유요하면 다음 미들웨어 실행
        req.user = user;
        next();
    });
};

export default authenticateToken;