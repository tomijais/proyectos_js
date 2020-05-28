//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



const TODOS_LOS_NUMEROS = document.querySelectorAll('li');


const miArray = Array.from(TODOS_LOS_NUMEROS);

let arrayMapeado = miArray.map(function(elemento){
    return Number(elemento.textContent) 
})


    let promedio = arrayMapeado.reduce(function(acumulador, elemento){
        return acumulador + elemento
    })
    promedio = promedio/ miArray.length

    
let maximo = Math.max(...arrayMapeado);
let minimo = Math.min(...arrayMapeado)




    let contadorRepeticiones = 0;
    let contadorNumeroActual = 0
    let masFrecuente;
    let numeroActual;
for (let i = 0; i < arrayMapeado.length; i++) {
    numeroActual = arrayMapeado[i];
    
    
    for (let i = 0; i < arrayMapeado.length; i++) {
        
            if(numeroActual === arrayMapeado[i]){
                contadorNumeroActual++
            }

    }

    if(contadorNumeroActual>contadorRepeticiones){
        contadorRepeticiones = contadorNumeroActual;
        masFrecuente = numeroActual
        
    }
contadorNumeroActual = 0

}



document.querySelector('#promedio').innerText = `El promedio es: ${promedio}`
document.querySelector('#mas-chico').innerText = `El número más pequeño es: ${minimo}`
document.querySelector('#mas-grande').innerText = `El número más grande es: ${maximo}`
document.querySelector('#mas-frecuente').innerText = `El número más frecuente es: ${masFrecuente}`
