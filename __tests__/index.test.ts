import { greeter } from '../lib/index';
test('Should return my name', () => {
  expect(greeter('abc')).toBe('Hello abc');
});
