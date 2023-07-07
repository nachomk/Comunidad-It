let peliculaInfo = {
    titulo : 'It',
    director : 'Andres Muschietti',
    genero : 'Terror',
    duracion : '2 horas 15 minutos',

    mostrarInfo: function () {
        console.log(`${this.titulo} es una película de ${this.genero} con una duración de ${this.duracion}. El director de la misma es ${this.director}.`)
    }
}   