const persona1 = {
    nombre: 'Galo',
    añoDeNacimiento: 1996,
}

const persona2 = {
    nombre: 'Bianca',
    añoDeNacimiento: 2000,
    
}

function agregarEdad(persona) {
    persona.edad = 2023 - persona.añoDeNacimiento;
}

console.log(persona1,persona2);
agregarEdad(persona1);
agregarEdad(persona2);
console.log(persona1,persona2);