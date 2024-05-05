import express from 'express';
import bodyParser from 'body-parser';

// CORS, Session 설정
import cors from 'cors';
import session from "express-session";
import cookieParser from 'cookie-parser';

// Import Route modules
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';
import userInfoRouter from './routes/user-info.js';
import SearchByProductsRouter from './routes/product-search.js';

// Express 객체 생성
const app = express();
const port = 5000;

// CORS 설정
app.use(cors({
    origin: 'http://localhost:3000', // 특정 출처 허용
    methods: ['GET', 'POST'], // 허용할 HTTP 메소드
    credentials: true // 쿠키를 포함할지 설정
}));

// 쿠키 파서, 사용자 세션 설정
app.use(cookieParser());
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 30  // 30분
    }
}))

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱목적
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱목적

// Use route
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/products/search/product', SearchByProductsRouter);
app.use('/cart', cartRouter);
app.use('/user-info', userInfoRouter);

// 서버 실행
app.listen(port, () => {
    console.log(`서버 시작 port: ${port}`);
});