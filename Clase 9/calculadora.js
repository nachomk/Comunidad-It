let calculadora = {
    numero_1 : 16,
    numero_2 : 5,
    sumar: function () {
        console.log(`La suma de ambos números es igual a ${this.numero_1 + this.numero_2}`)
    },
    restar: function () {
        console.log(`La diferencia de ambos números es igual a ${this.numero_1 - this.numero_2}`)
    },
    multiplicacion: function () {
        console.log(`El producto de ambos números es igual a ${this.numero_1 * this.numero_2}`)
    },
    division: function () {
        console.log(`La división de ambos números es igual a ${this.numero_1 + this.numero_2}`)
    }
}