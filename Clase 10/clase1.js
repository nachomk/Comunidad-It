let personas = [{
    nombre: 'Galo',
    edad: 27
},{
    nombre: 'Enzo',
    edad: 16
}]

let arrayVacio = [];

function filtrarMayoresDeEdad(personas) {
    for (let persona of personas) {
        if (persona.edad >= 18) {
            arrayVacio.push(persona);
        }
    }
    console.log(arrayVacio);
}
filtrarMayoresDeEdad(personas);