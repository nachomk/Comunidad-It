// Calcular el promedio de un array
function promedio(arrayNumeros) {
    let suma = 0;
    for (let item of arrayNumeros) {
        suma = suma + item;
    }
    console.log(`El promedio del array es igual a ${suma/arrayNumeros.length}`);
}
promedio([1,3,9,10,21,32]);