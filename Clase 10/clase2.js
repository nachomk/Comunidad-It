const personas = [{
    nombre: 'Galo',
    añoDeNacimiento: 2000
},{
    nombre: 'Enzo',
    añoDeNacimiento: 1998
}]

personas.forEach ((personas) => {
    personas.edad = 2023 - personas.añoDeNacimiento;
})

console.log(personas)   