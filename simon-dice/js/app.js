const $cuadro1 = document.querySelector("#cuadro-1");
const $cuadro2 = document.querySelector("#cuadro-2");
const $cuadro3 = document.querySelector("#cuadro-3");
const $cuadro4 = document.querySelector("#cuadro-4");

const $contadorRonda = document.querySelector("#contador");

const $buttonSR = document.querySelector(".button-start");

let ronda = 0;
let ordenMaquina = [];
let ordenJugador = [];

$buttonSR.onclick = comenzarJuego;

function comenzarJuego() {
  reiniciarTodo()
   manejarRonda()
   
}

function reiniciarTodo() {
  let ronda = 0;
  let ordenMaquina = [];
  let ordenJugador = [];
}

function manejarRonda() {
  ordenMaquina.push(obtenerCuadroAleatorio());

  const RETRASO_TURNO_JUGADOR = (ordenMaquina.length + 1) * 1000;

  ordenMaquina.forEach(function($cuadro, index) {
    const RETRASO_MS = (index + 1) * 1000;
    setTimeout(function() {
      resaltar($cuadro);
    }, RETRASO_MS);
  });

  setTimeout(function() {
  //  actualizarEstado('Turno del jugador');
    desbloquearInputUsuario();
  }, RETRASO_TURNO_JUGADOR);

  ordenJugador = [];
  ronda++;
  actualizarNumeroRonda(ronda);

}

function manejarInputUsuario(e) {
  const CuadroActual = e.target;
  console.log(CuadroActual);
  resaltar(CuadroActual);
  ordenJugador.push(CuadroActual);

  const CuadroActualDeLaMaquina = ordenMaquina[ordenJugador.length - 1];
  if (CuadroActual.id !== CuadroActualDeLaMaquina.id) {
    perder();
    return;
  }

  if (ordenJugador.length === ordenMaquina.length) {
    bloquearInputUsuario();
    setTimeout(manejarRonda, 1000);
  }
}


function obtenerCuadroAleatorio() {
  const $cuadros = document.querySelectorAll('.cuadro');
  const cuadro = Math.floor(Math.random() * $cuadros.length);
  return $cuadros[cuadro];
}


function resaltar(CuadroActual) {
  CuadroActual.style.opacity = 1;
  setTimeout(function() {
    CuadroActual.style.opacity = 0.5;
  }, 500);
}

function actualizarNumeroRonda(ronda) {
  $contadorRonda.innerHTML = `Ronda ${ronda}`;
}



function bloquearInputUsuario() {
  const todosLosCuadros = document.querySelectorAll('.cuadro')
  todosLosCuadros.forEach(function() {
    // Si saco lo dejo vacio no puede recibir el evento del onclick, entonces el e.target no funciona
  });
}

function desbloquearInputUsuario() {
  const todosLosCuadros = document.querySelectorAll('.cuadro')
  todosLosCuadros.forEach(function(unCuadro) {
    unCuadro.onclick = manejarInputUsuario;
  });
}