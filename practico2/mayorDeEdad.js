// Ejercicio 1
//a
const readlineSync = require("readline-sync");
const edad = readlineSync.question("Ingresa tu edad: ");
console.log ("Tu edad es: " + edad)

if (edad >= 18){console.log ("Eres mayor de edad")}
    else {console.log ("Eres menor de edad")};
