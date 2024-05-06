import os from 'os';
import path from 'path';
import fs from 'fs';

// 로그 파일 경로
const logDir = path.join(__dirname, 'logs');
const logFile = path.join(logDir, 'server.log');

// 로그 디렉터리 생성
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// 로그 파일 생성
const createLogFile = () => {
    const timeStamp = new Date().toISOString();
    const logEntry = `${timeStamp} - Server started on ${os.hostname()}\n`;

    // 로그 파일에 로그 작성
    fs.appendFile(logFile, logEntry, { encoding: 'utf-8'}, (err) => {
        if (err) console.error(`Error writing to log file: ${err.message}`);
    });
}

// 로그 레벨별 로깅 함수
module.exports = {
    info: (message) => logMessage('info', message),
    error: (message) => logMessage('error', message),
    warn: (message) => logMessage('warn', message),
};