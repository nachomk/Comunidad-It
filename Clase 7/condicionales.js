// 1) Verificar si un número es positivo y mostrar el mensaje por consola ("El número es positivo")
let numero = 16;
if (numero > 0) {
    console.log('El número es positivo');
} else {
    console.log('El número es negativo');
}

// 2) Determinar si un número es par o impar y en ambos casos mostrar un mensaje por consola ("El número es par" o "El número es impar")
let numero_ = 30;
if (numero_ % 2 === 0) {
    console.log('El número es par');
} else {
    console.log('El número es impar');
}

// 3) ...
let cantidadCompras = 190;
if (cantidadCompras <= 5){
    console.log('El nivel de membresía es Básico');
} else if (cantidadCompras <= 10) {
    console.log('El nivel de membresía es Intermedio');
} else if (cantidadCompras <= 15) {
    console.log('El nivel de membresía es Avanzado');
} else {
    console.log('El nivel de membresía es VIP');
}