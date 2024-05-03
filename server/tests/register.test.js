const {isEmailValid} = require('../controllers/validation');
const {isPasswordValid} = require('../controllers/validation');
const {validateCredentials} = require('../controllers/validation');
//import { isEmailValid, isPasswordValid, validateCredentials } from '../controllers/validation.js';

describe('createUser function', () => {
    it('should return true if email and password are valid', () => {
        // Given
        const email = 'test@example.com';
        const password = 'TestPassword123!'; // 유효한 비밀번호

        // When
        const isValid = isEmailValid(email, password);

        // Then
        expect(isValid).toBe(true);
    });

    it('should return false if email is invalid', () => {
        // Given
        const email = 'invalidemail'; // 유효하지 않은 이메일 형식
        const password = 'TestPassword123!';

        // When
        const isValid = isPasswordValid(email, password);

        // Then
        expect(isValid).toBe(false);
    });

    it('should return false if password is invalid', () => {
        // Given
        const email = 'test@example.com';
        const password = 'short'; // 유효하지 않은 비밀번호 형식

        // When
        const isValid = validateCredentials(email, password);

        // Then
        expect(isValid).toBe(false);
    });
});