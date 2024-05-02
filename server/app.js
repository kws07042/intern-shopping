const express = require('express');
const app = express();

// 미들웨어 설정
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // JSON 요청 본문을 파싱목적
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱목적

// Import Route modules
const indexRouter = require('./routes/index')
const signupRouter = require('./routes/signup')
console.log(indexRouter)
console.log(signupRouter)
// Use route
app.use('/', indexRouter);
app.use('/signup', signupRouter);


app.listen(8080, () => {
    console.log('서버 시작')
});