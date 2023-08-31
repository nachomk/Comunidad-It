const { conectarDB , desconectarDB } = require("../connection");
const Products = require("../schemas/UserSchema");

const getAll = async ( req , res) => {
    console.log("Nueva petición en users");
    await conectarDB()
    // User.find promesa que me retorna un array de usuarios (en este caso productos)
    const users = await Products.find({});
    await desconectarDB();
    res.json(users);
};

const create = async ( req , res) => {
    console.log("create")
    const { name , price , brand } = req.body;
    await conectarDB();
    // Creamos un producto con new Product y lo guardamos en la DB con save()
    const product = new Products({ name , price , brand});
    //product.save() es una promesa que me retornara el usuario guardado
    const newProduct = await product.save()
    await desconectarDB();
    res.json(newProduct);
};

const update = async ( req , res ) => {
    const { id } = req.params;
    const { name, price , brand } = req.body;
    await conectarDB();
    const response = await Products.findByIdAndUpdate(id,{ name, price, brand});
    await desconectarDB();
    res.json(response);
};

const deleteProduct = async ( req , res) => {
    const { id } = req.params;
    await conectarDB();
    const response = await Products.findByIdAndDelete(id);
    await desconectarDB();
    res.json(response);
}

module.exports = { getAll , create , update , deleteProduct };