// PIEDRA-PAPEL-TIJERAS. Objetivo: desarrollar un programa que permita jugar al "Piedra, Papel o Tijeras" contra la computadora.

// 2 - Creo la función "obtenerJugadaComputadora"

function obtenerJugadaComputadora() {
  let numeroAlAzar = Math.floor(Math.random() * 3); //Observación: no pude encontrar la clase a la que hace referencia la Ayuda2. Pongo mi fuente:
  //www.freecodecamp.org/espanol/news/funciones-math-en-javascript-explicadas/#:~:text=Math%20Floor-,Math.,absoluto%20debido%20a%20que%20Math

  if (numeroAlAzar === 0) {
    return "piedra";
  } else if (numeroAlAzar === 1) {
    return "papel";
  } else {
    return "tijeras";
  }
}

// 3 -  Definir la función obtenerJugadaUsuario

function obtenerJugadaUsuario() {
  const readlineSync = require("readline-sync");
  const preguntaAlUsuario = readlineSync.question(
    "Elegís piedra, papel o tijeras?: "
  );
  let jugadaUsuario = preguntaAlUsuario.toLowerCase(); //Convierto "preguntaAlUsuario" a minúsculas para evitar errores
  if (
    jugadaUsuario === "piedra" ||
    jugadaUsuario === "papel" ||
    jugadaUsuario === "tijeras"
  ) {
    return jugadaUsuario;
  } else {
    console.log("Ingresa solo PIEDRA, PAPEL o TIJERAS.");
    return obtenerJugadaUsuario();
  }
}

// 4 -  Definir la función determinarGanador

function determinarGanador(jugadaDeLaComputadora, jugadaDelUsuario) {
  if (jugadaDeLaComputadora === jugadaDelUsuario) {
    return "Empate";
  } else if (
    (jugadaDeLaComputadora === "papel" && jugadaDelUsuario === "piedra") ||
    (jugadaDeLaComputadora === "piedra" && jugadaDelUsuario === "tijeras") ||
    (jugadaDeLaComputadora === "tijeras" && jugadaDelUsuario === "papel")
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

// 5 -  Llamo a las funciones en orden

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaDelUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaDelUsuario);

// 6 -  Imprimir el resultado

console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaDelUsuario);
console.log("El resultado fue: " + resultado);
