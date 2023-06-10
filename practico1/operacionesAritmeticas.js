//Operadores aritméticos

//a
let valorNumerico1 = 10;
let valorNumerico2 = 12;
let valorNumerico3 = 2.67;
let valorNumerico4 = 0.67;
//b
let sumaValor1y2 = (valorNumerico1 + valorNumerico2);
    console.log (sumaValor1y2);
//c
let restaValor3y4 = (valorNumerico3 - valorNumerico4)
    console.log (restaValor3y4);
//d
let resultadoFinal = (sumaValor1y2 * restaValor3y4)
    console.log (resultadoFinal);
//e (numero par = al dividir un numero por 2, el resto debe ser igual a cero; % devuelve el resto)
let esPar = (resultadoFinal % 2)
    console.log (esPar);
//f
console.log ("Mis variables iniciales fueron: %d, %d, %d y %d. La respuesta a verificar si el resultado final es par es: %d" 
, valorNumerico1, valorNumerico2, valorNumerico3, valorNumerico4, esPar);

