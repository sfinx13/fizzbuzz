/*
Acceptance FizzBuzz: 
Write a function that returns for a number between 1 to 100:

Returns an exception if number is not 1 and 100 inclusive
"Fizz" instead of the number if multiple of 3
"Buzz" instead of the number if multiple of 5
"FizzBuzz" instead of the number so multiple of 3 and 5
Returns the number if no multiple of 3 or 5
*/
function fizzBuzz(number) 
{
    if (number>100 || number <0) throw 'Error';

    return  0 === number%3 && 0 === number%5 ? 
                'FizzBuzz': ( 0 === number%3 ? 
                   'Fizz' : ( 0 === number%5 ? 
                   'Buzz' : number))
}

module.exports= fizzBuzz;
