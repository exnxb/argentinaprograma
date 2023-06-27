//Listas
let listaCompleta = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let listaDeAdmitidos = [];
let listaDeRechazados = [];


//Declaración condicional:
for (let i = 0; i < listaCompleta.length; i++) {
    if (listaCompleta [i] === "Sofia" || listaCompleta [i] === "Jose"){
        listaDeRechazados.push(listaCompleta [i]);} 
    else {listaDeAdmitidos.push(listaCompleta [i]);}
}


//Para ordenar los arreglos de STRINGS alfabeticamente uso el método ".sort()".Como no presencié todas las clases teóricas/prácticas, no estoy seguro si fué mostrado.

//Lista de personas admitidas
listaDeAdmitidos.sort();
console.log("La lista ordenada de invitados admitidos es:");
for (let i = 0; i < listaDeAdmitidos.length; i++) {
  console.log("* " + listaDeAdmitidos[i]);
}


//Lista de personas Rechazadas
listaDeRechazados.sort();
console.log("La lista ordenada de invitados rechazados es:");
for (let i = 0; i < listaDeRechazados.length; i++) {
  console.log("- " + listaDeRechazados[i]);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort