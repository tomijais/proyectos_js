  const $cuadro1 = document.querySelector("#cuadro-1");
  const $cuadro2 = document.querySelector("#cuadro-2");
  const $cuadro3 = document.querySelector("#cuadro-3");
  const $cuadro4 = document.querySelector("#cuadro-4");

  const $contadorRonda = document.querySelector("#contador");

  const $buttonSR = document.querySelector('.button-start')

  let contadorRonda = 0;
  let ordenJugada = [];
  let ordenJugador = [];
  

  $buttonSR.addEventListener('click', e => {
    cambiarBoton();
    nuevaRonda();
    empezarRonda();
  })

  
  
  
  
  
  
  
  
  
  
  
  // SUMA UNA RONDA Y LA MUESTRA  
  function nuevaRonda() {
    contadorRonda++;
    $contadorRonda.value = `Ronda ${contadorRonda}`;
  }
  // TE DEVUELVE UN CUADRO ALEATOREO  
  function obtenerCuadroAleatoreo() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const indice = Math.floor(Math.random() * $cuadros.length);
    return $cuadros[indice];
  }

  function empezarRonda(){
    ordenJugada.push(obtenerCuadroAleatoreo());
    ordenJugada.forEach(function(cuadro){
      resaltar(cuadro);
      generarOrdenUsuario()
    })
  }
  // RESALTA EL CUADRO SELECCIONADO
  function resaltar(cuadro) {
    cuadro.style.opacity = 1;
    setTimeout(function() {
      cuadro.style.opacity = 0.5;
    }, 500);
  }
// CAMBIA EL BOTON DE START A RESET, SI ES RESET REINICIA TODO
  function cambiarBoton() {
    if($buttonSR.innerHTML == "Start"){
      $buttonSR.innerHTML = "Reset"
    }else{
      $buttonSR.innerHTML = "Start";
      perdiste()
    }
  }
  function perdiste(){
    contadorRonda = 0
    ordenJugada = []
    ordenJugador = []
  }


  function generarOrdenUsuario(e){
    let cuadro = e.target
    console.log(cuadro);
    resaltar(cuadro);
  }
