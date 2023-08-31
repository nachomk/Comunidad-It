const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("Conectando a la Base de Datos")
    } catch ( error ) {
        console.log(error)
    }
}

const desconectarDB = async () => {
    try {
        await mongoose.disconnect("Desconectando de la Base de Datos")
    } catch ( error ) {
        console.log(error)
    }
}

// const conectarDB = async () => {
//     try {
//         mongoose.connect(process.env.DB_URL);
//         console.log("conectado a la base de datos")
//     } catch (error) {
//         console.log(error);
//     }
// }
// const desconectarDB = async () => {
//     try {
//         await mongoose.disconnect();
//         console.log("desconectado de la base de datos")
//     } catch ( error ) {
//         console.log(error)
//     }
// }

module.exports = { conectarDB, desconectarDB }