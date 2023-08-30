require('dotenv').config();
const express = require("express");

const Products = require('./schemas/UserSchema');
const { conectarDB , desconectarDB } = require("./connection");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

// app.get ("/users" , async (req,res) => {
//     console.log("Nueva petición en users");
//     await conectarDB();
//     const users = await User.find()
//     await desconectarDB();
//     res.json(users)
// });

// app.post('/user' , async ( req , res ) => {
//     const { name, email, age} = req.body;
//     await conectarDB();
//     const user = new User({ name, email, age });
//     const newUser = await user.save();
//     await desconectarDB;
//     res.json(newUser)
// })

app.get("/products" , async ( req , res ) => {
    await conectarDB();
    const products = await Products.find();
    await desconectarDB();
    res.json(products)
})
app.get("/product" , async ( req , res ) => {
    const { name , price , brand } = req.body;
    await conectarDB();
    const product = new Product({ name , price , brand});
    const newProduct = await product.save();
    await desconectarDB()
    res.json(newProduct);
})


app.listen(PORT, () => {
    console.log(`Corriendo servidor ${PORT}`);
})