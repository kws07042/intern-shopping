import request from 'supertest'
import app from '../app';
/*const request = require('supertest');*/
/*const app = require('../app');*/ // Express 애플리케이션의 인스턴스를 임포트합니다.

describe('POST /signup', () => {
    it('should create a new user and return 200 status', async () => {
        const userData = {
            uid: 'newuser@example.com',
            password: 'password123'
        };

        const response = await request(app)
            .post('/signup')
            .send(userData)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.message).toEqual('User created successfully');
        expect(response.body).toHaveProperty('result');
    });

    it('should return 400 if uid or password is missing', async () => {
        const userData = {
            password: 'password123'
        };

        await request(app)
            .post('/signup')
            .send(userData)
            .expect(400);
    });
});