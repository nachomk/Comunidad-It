const UserModel = require('../Models/User') // Usamos (..) porque tenemos que salir de una carpeta para despues entrar en otra

async function getUsers(req,res){
    console.log("ESTOY EN EL CONTROLADOR")
    const { genero } = req.query;
    const usuariosFiltrados = await UserModel.getAll(genero)
    res.json(usuariosFiltrados);
};

module.exports = {
    getUsers
};