//Ejercicio 1
//b
const readlineSync = require("readline-sync");
const unNumero = readlineSync.question("Ingrese un número: ");
console.log ("El número que ingresaste es: " + unNumero)

if (unNumero > 0){console.log ("El número es positivo")};
if (unNumero < 0){console.log ("El número es negativo")};
if (unNumero == 0) {console.log ("El número es cero")};
