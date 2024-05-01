const sum = require('../exam');

describe('sum function tests', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 0 + 0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});