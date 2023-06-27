//A partir de un lista completa de nombres almacenados en un arreglo, armar dos listas.En la lista de admitidos poner a todos los nombres, salvo Jose y Sofia, quienes van en la de rechazados.

let listaCompleta = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
console.log ("La lista de personas (original) es:");
for (let i = 0; i < listaCompleta.length; i++) {
  console.log("> " + listaCompleta[i]);
}

let listaDeAdmitidos = [];

let listaDeRechazados = [];



//Verifica la persona del arreglo es igual a "Jose" o "Sofia" usando una declaración condicional:

for (let i = 0; i < listaCompleta.length; i++) {
    if (listaCompleta [i] === "Sofia" || listaCompleta [i] === "Jose"){
        listaDeRechazados.push(listaCompleta [i]);} 
    else {listaDeAdmitidos.push(listaCompleta [i]);}
}


//Lista de personas admitidas
console.log("La lista de invitados admitidos es:");
for (let i = 0; i < listaDeAdmitidos.length; i++) {
  console.log("* " + listaDeAdmitidos[i]);
}


//Lista de personas Rechazadas
console.log("La lista de invitados rechazados es:");
for (let i = 0; i < listaDeRechazados.length; i++) {
  console.log("- " + listaDeRechazados[i]);
}



