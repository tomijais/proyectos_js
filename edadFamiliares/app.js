/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonIngresar = document.querySelector("#ingresar-numero-familiares")

$botonIngresar.onclick = function(){
    const $numeroFamiliares = document.querySelector("#numero-familiares").value;
    agregarFamiliares($numeroFamiliares)
    document.querySelector("#numero-familiares").value = "";
        return false;
}

function agregarFamiliares ($numeroFamiliares){
    if ($numeroFamiliares<=0){
        alert ("Ingrese un número positivo");
        return false;
    }
    
    for (let i = 0; i < $numeroFamiliares; i++) {

        cantidadFamiliares = document.querySelectorAll('.familiar').length

        const $nodoForm = document.querySelector ('form');
        const $div = document.createElement('div');
        $div.className="familiar";
        
        const $label = document.createElement('label');
        $label.innerText = `Edad del integrante ${cantidadFamiliares + 1}`;
        $label.className = "labelIntegrantes"
        
    
        const $agregarIntegrante = document.createElement("input");
        $agregarIntegrante.type = "number";
        $agregarIntegrante.className = "edades"

        const $labelSalario = document.createElement('label');
        $labelSalario.innerText = `Salario anual`;
        $labelSalario.className = "labelSalarioIntegrantes"
        
        const $agregarIntegranteSalario = document.createElement("input");
        $agregarIntegranteSalario.type = "number";
        $agregarIntegranteSalario.className = "salario"


        const $saltoDeLinea = document.createElement('br')

        $div.appendChild($label);
        $div.appendChild($agregarIntegrante);
        $div.appendChild($labelSalario);
        $div.appendChild($agregarIntegranteSalario);
        $div.appendChild($saltoDeLinea)
        $nodoForm.append($div);
    }
    return false;
}


const $botonCalcularEdades = document.querySelector("#boton-calcular")
$botonCalcularEdades.onclick = function(){

    const $edadFamiliares = document.querySelectorAll('.edades')
    const arrayNumeros = Array.from($edadFamiliares);
    let arrayMapeado = arrayNumeros.map(function(elemento){
        return Number(elemento.value) 
    })

    let promedio = arrayMapeado.reduce(function(acumulador, elemento){
        return acumulador + elemento
    })
    promedio = promedio/ arrayNumeros.length

    let maximo = Math.max(...arrayMapeado);
    let minimo = Math.min(...arrayMapeado);

    document.querySelector('#promedio-edad').innerText = `La edad promedio es promedio es: ${promedio}`
    document.querySelector('#menor-edad').innerText = `El personas mas pequeña tiene: ${minimo}`
    document.querySelector('#mayor-edad').innerText = `El personas mas grande tiene: ${maximo}`

    return false
    
}



const $botonEmpezarDeNuevo = document.querySelector("#empezar-de-nuevo");
$botonEmpezarDeNuevo.onclick = function(){
    const $divs = document.querySelectorAll('.familiar')

    if(document.querySelectorAll('.familiar').length > 0){
        for(let i=0; i<$divs.length;i++){
            $divs[i].remove()
        }

        document.querySelector('#promedio-edad').innerText = `La edad promedio es promedio es: `
        document.querySelector('#menor-edad').innerText = `El personas mas pequeña tiene:`
        document.querySelector('#mayor-edad').innerText = `El personas mas grande tiene:`
        document.querySelector("#numero-familiares").value = "";
    }

}


const $botonAgregar = document.querySelector('#agregar');
$botonAgregar.onclick = function(){
    $cantidadFamiliares = document.querySelectorAll('.familiar').length

    const $nodoForm = document.querySelector ('form');
    const $div = document.createElement('div');
    $div.className="familiar";
    
    const $label = document.createElement('label');
    $label.innerText = `Integrante ${$cantidadFamiliares + 1}`;
    $label.className = "labelIntegrantes"
    
    const $agregarIntegrante = document.createElement("input");
    $agregarIntegrante.type = "number";
    $agregarIntegrante.className = "edades"

    const $labelSalario = document.createElement('label');
    $labelSalario.innerText = `Salario anual`;
    $labelSalario.className = "labelSalarioIntegrantes"
    
    const $agregarIntegranteSalario = document.createElement("input");
    $agregarIntegranteSalario.type = "number";
    $agregarIntegranteSalario.className = "salario"


    const $saltoDeLinea = document.createElement('br')

    $div.appendChild($label);
    $div.appendChild($agregarIntegrante);
    $div.appendChild($labelSalario);
    $div.appendChild($agregarIntegranteSalario);
    $div.appendChild($saltoDeLinea)
    $nodoForm.append($div);
}


const $botonQuitar = document.querySelector('#quitar');
$botonQuitar.onclick = function(){
    $cantidadFamiliares= document.querySelectorAll(".familiar");
    $cantidadFamiliares[$cantidadFamiliares.length-1].remove();
}

const $botonCalcularSalarioAnual = document.querySelector('#calcular-salario')
$botonCalcularSalarioAnual.onclick = function(){
    
    const $salarioFamiliares = document.querySelectorAll(".salario");
    
    const arrayNumeros = Array.from($salarioFamiliares);
    
    let arrayFiltrado = arrayNumeros.filter(function(elemento){
        if(Number(elemento.value) > 0){
            return Number(elemento.value)
        } 
    })

    

    let arrayMapeado = arrayFiltrado.map(function(elemento){
        return Number(elemento.value) 
    })

    let arraySalarioMensual = arrayMapeado.map(function(elemento){
        return elemento/12 
    })

    let salarioMensualTotal = arraySalarioMensual.reduce(function(acumulador, elemento){
        return acumulador + elemento
    })
    

    let salarioAnualTotal = arrayMapeado.reduce(function(acumulador, elemento){
        return acumulador + elemento
    })

    
    let promedioSalarial = salarioAnualTotal/arrayFiltrado.length
    let promedioSalarialMensual = salarioMensualTotal/arrayFiltrado.length


    
    let MayorSalario = Math.max(...arrayMapeado);
    let menorSalario = Math.min(...arrayMapeado);


    document.querySelector('#promedio-salario').innerText = `El promedio salarial es: ${promedioSalarial}`
    
    document.querySelector('#menor-salario').innerText = `El salario mas pequeño es: ${menorSalario}`
   
    document.querySelector('#mayor-salario').innerText = `El salario mas grande es: ${MayorSalario}`
    
    document.querySelector('#promedio-salario-mensual').innerText = `El promedio salarial mensual es: ${promedioSalarialMensual}`
}






/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
