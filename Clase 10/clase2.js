const personas = [{
    nombre: 'Galo',
    añoDeNacimiento: 2000
},{
    nombre: 'Enzo',
    añoDeNacimiento: 1998
}]

personas.forEach ((persona) => {
    persona.edad = 2023 - persona.añoDeNacimiento;
})

console.log(personas);   