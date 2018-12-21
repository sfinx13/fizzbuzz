/*
Critère d'acceptance FizzBuzz: 
Ecrire une fonction qui retourne pour chaque nombre entre 1 à 100 :
- "Fizz" au lieu du nombre si multiple de 3
- "Buzz" au lieu du nombre si multiple de 5
- "FizzBuzz" au lieu du nombre si multiple de 3 et 5
- "Renvoie le nombre
-  Renvoie une exception si nombre n'est pas etre 1 et 100 inclus
*/ 

function fizzBuzz(number) {

    if (number>100 || number <0) throw 'error';

    return  (0 === number%3 && 0 === number%5)  ? 
                'FizzBuzz': 
                    ( 0 === number%3  ? 
                        'Fizz' : ( 0 === number%5 ? 
                                    'Buzz' : number
                                 )
                    )
}

module.exports= fizzBuzz;
