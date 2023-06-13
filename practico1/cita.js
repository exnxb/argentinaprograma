//Manejo de strings

//a
let cita = "Tres tristes tigres comen trigo en un trigal";
let tamañoDeCita = (cita.length);
    console.log ("El tamaño de la cita es: " + tamañoDeCita);
//b (substring = "tigres comen trigo")
let index = cita.substring (13,31)
console.log (index)
let indice = ["(13 , 31)"];
console.log ("El indice del substring es: " + indice);
//c
let citaRevisada = cita.substring (0,31)
console.log (citaRevisada)

