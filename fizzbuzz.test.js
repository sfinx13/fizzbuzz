const fizzBuzz = require('./fizzbuzz.js');

test('4 renvoie 4',()=>{
	expect(fizzBuzz(4)).toBe(4);
});

test('33 renvoie Fizz',()=>{
	expect(fizzBuzz(33)).toBe('Fizz');
});

test('55 renvoie Buzz',()=>{
	expect(fizzBuzz(55)).toBe('Buzz');
});

test('90 renvoie FizzBuzz', ()=>{
	expect(fizzBuzz(90)).toBe('FizzBuzz');
});

test('101 renvoie error', () => {
  expect(() =>{
  	fizzBuzz(101);
  	}).toThrow('error');
});

test('-10 renvoie error', () => {
  expect(() =>{
  	fizzBuzz(-10);
  	}).toThrow('error');
});

