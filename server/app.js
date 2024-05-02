import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import Route modules
import indexRouter from './routes/index.js';
import signUpRouter from './routes/signUp.js';
import signInRouter from './routes/signIn.js';
import productsRouter from './routes/products.js';

// Express 객체 생성
const app = express();

// CORS 설정
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱목적
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱목적

// Use route
app.use('/', indexRouter);
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);
app.use('/products', productsRouter);
app.use('/cart', productsRouter);

// 서버 실행
app.listen(8080, () => {
    console.log('서버 시작')
});