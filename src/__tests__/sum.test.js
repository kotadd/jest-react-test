import Sum from '../Sum';

test('test add 1 and 2 = 3', () => {
  const result = Sum(1, 2);
  expect(result).toBe(3);
});
