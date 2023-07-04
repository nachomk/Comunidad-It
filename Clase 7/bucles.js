// // 1) Imprimir por consola los números del 1 al 10 usando For
// for (i=1; i<=10; i++) {
//     console.log(i);
// }

// 2) Imprimir por consola los números del 10 al 1 usando For
// let numero_ = 10;
// for (i=1; i<=10; i++) {
//     console.log(numero_);
//     numero_--;
// }

// 3) Suma de los primeros 50 números naturales

let numero = 1;
let contador = 0;

for (i=1; i<=50; i++) {
    contador = contador + numero;
    numero++;
}
console.log(contador);