require('dotenv').config();
const express = require("express");

const Products = require('./schemas/UserSchema');
const userController = require('./controllers/userController')
const { conectarDB , desconectarDB } = require("./connection");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/products' , userController.getAll);
app.post('/product' , userController.create);
app.put('/product/:id' , userController.update);
app.delete('/product/:id' , userController.deleteProduct);

app.listen(PORT, () => {
    console.log(`Corriendo servidor ${PORT}`);
})

// app.get("/products" , async ( req , res ) => {
//     await conectarDB();
//     const products = await Products.find();
//     await desconectarDB();
//     res.json(products)
// })
// app.post("/products" , async ( req , res ) => {
//     const { name , price , brand } = req.body;
//     await conectarDB();
//     const product = new Products({ name , price , brand});
//     const newProduct = await product.save();
//     await desconectarDB()
//     res.json(newProduct);
// })
