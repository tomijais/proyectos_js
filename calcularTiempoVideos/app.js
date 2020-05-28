//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let contadorHoras = 0;
let contadorMinutos = 0;
let contadorSegundos = 0;

document.querySelector("strong").innerText = `Aqui se mostrara la duracion total de los videos`;

document.querySelector('#ingresar').onclick = function(){

    
    const horasVideos = Number(document.querySelector('#horas-video').value)
    const minutosVideos = Number(document.querySelector('#minutos-video').value)
    const segundosVideos = Number(document.querySelector('#segundos-video').value)    

    contadorHoras = contadorHoras + horasVideos;
    contadorMinutos = contadorMinutos + minutosVideos;
    contadorSegundos = contadorSegundos + segundosVideos;


    
    document.querySelector("strong").innerText = `El/los video/s tiene/n una duracion de ${contadorHoras} hora/s, ${contadorMinutos} minuto/s, ${contadorSegundos} segundos.`;

    document.querySelector('#horas-video').value = "";
    document.querySelector('#minutos-video').value = "";
    document.querySelector('#segundos-video').value = "";
 
  
  }

  
document.querySelector('#limpiar').onclick = function(){
     contadorHoras = 0;
     contadorMinutos = 0;
     contadorSegundos = 0;

    document.querySelector("strong").innerText = `Aqui se mostrara la duracion total de los videos`;
}


if(segundosVideos >= 60){
  minutosVideos++
  segundosVideos = segundosVideos - 60
} else if(minutosVideos >= 60){
  horasVideos++
  minutosVideos = minutosVideos - 60
}