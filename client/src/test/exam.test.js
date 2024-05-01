function examTest(a, b) {
  return a + b;
}

describe('exam', () => {
  it('should return 3', () => {
    expect(examTest(1, 2)).toBe(3);
  });
});