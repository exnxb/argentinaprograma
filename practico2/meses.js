//Ejercicio 2
const readlineSync = require("readline-sync");
const unNumero = readlineSync.question("Ingrese un número del 1 al 12, donde dicho número corresponde en orden con alguno de los 12 meses del año: ");
console.log ("El número que ingresaste es: " + unNumero)

switch (unNumero){ 
    case "1":
        console.log ("La cantidad de días del mes de ENERO es 31");
        break;
    case "2":
        console.log ("La cantidad de días del mes de FEBRERO es 28 (o 29 en año bisiesto)");
        break;
    case "3":
        console.log ("La cantidad de días del mes de MARZO es 31");
        break;
    case "4":
        console.log ("La cantidad de días del mes de ABRIL es 30");
        break;
    case "5":
        console.log ("La cantidad de días del mes de MAYO es 31");
        break;
    case "6":
        console.log ("La cantidad de días del mes de JUNIO es 30");
        break;
    case "7":
        console.log ("La cantidad de días del mes de JULIO es 31");
        break;
    case "8":
        console.log ("La cantidad de días del mes de AGOSTO es 31");
        break;
    case "9":
        console.log ("La cantidad de días del mes de SEPTIEMBRE es 30");
        break;
    case "10":
        console.log ("La cantidad de días del mes de OCTUBRE es 31");
        break;
    case "11":
        console.log ("La cantidad de días del mes de NOVIEMBRE es 30");
        break;
    case "12":
        console.log ("La cantidad de días del mes de DICIEMBRE es 31");
        break;
    default:
        console.log ("Número de mes inválido");
        break;}