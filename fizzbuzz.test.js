const fizzBuzz = require('./fizzbuzz.js');

test('4 return 4',()=>{
	expect(fizzBuzz(4)).toBe(4);
});

test('33 return Fizz',()=>{
	expect(fizzBuzz(33)).toBe('Fizz');
});

test('55 retur Buzz',()=>{
	expect(fizzBuzz(55)).toBe('Buzz');
});

test('90 retur FizzBuzz', ()=>{
	expect(fizzBuzz(90)).toBe('FizzBuzz');
});

test('101 retur error', () => {
  expect(() =>{
  	fizzBuzz(101);
  	}).toThrow('Error');
});

test('-10 retur error', () => {
  expect(() =>{
  	fizzBuzz(-10);
  	}).toThrow('Error');
});

