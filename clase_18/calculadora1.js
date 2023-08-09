const calculadora = require('./calculadora') //Trayendo la funcion sumar y restar del archivo calculadora.js a este archivo

//console.log(calculadora.sumar(15,6)) // Usando Node.Js, muestro la suma de 2 números exportados del otro archivo (calculadora.js)

// Destructuring con OBJETOS
// const persona = {
//     nombre: 'Galo',
//     apellido: 'Vazquez'
// }

// const { nombre, apellido } = persona

// console.log(nombre,apellido)

// Destructuring con ARRAYS
const numeros = [1 ,2 ,3 ,4 ,5];

const [primero, segundo, tercero, cuarto, quinto] = numeros;

console.log(primero, quinto);