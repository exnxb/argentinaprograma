//Ejercicio 3
const readlineSync = require("readline-sync");
const unNumeroEntero = readlineSync.question("Ingrese un número perteneciente al conjunto de los ENTEROS (Z): ");
console.log ("Ingresaste el número: " + unNumeroEntero);


if (unNumeroEntero > 0  && unNumeroEntero % 2 == 0){
    console.log ("El numero es positivo y par.")};

if (unNumeroEntero > 0  && unNumeroEntero % 2 != 0){
    console.log ("El numero es positivo e impar.")};

if (unNumeroEntero < 0){
    console.log ("El numero es negativo.")};
    
if (unNumeroEntero == 0){
    console.log ("El numero es cero.")};

