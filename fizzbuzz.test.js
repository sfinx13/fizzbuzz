const fizzBuzz = require('./fizzbuzz.js');

test('4 returns 4',() => {
	expect(fizzBuzz(4)).toBe(4);
});

test('33 returns Fizz',() => {
	expect(fizzBuzz(33)).toBe('Fizz');
});

test('55 returns Buzz',() => {
	expect(fizzBuzz(55)).toBe('Buzz');
});

test('90 returns FizzBuzz', () => {
	expect(fizzBuzz(90)).toBe('FizzBuzz');
});

test('101 returns Error', () => {
  expect(() => {
  	fizzBuzz(101);
  	}).toThrow('Error');
});

test('-10 returns Error', () => {
  expect(() => {
  	fizzBuzz(-10);
  	}).toThrow('Error');
});
