const express = require('express');
const app = express();
const fs = require('fs/promises');


//CONTROLLERS
const userController = require("./Controllers/UserController");



//MIDDLEWARE
app.use(express.json()); // No podemos recibir sin esto los datos de un PUT PATCH


app.get('/', (req,res) => {
    res.send('Esto es una prueba');
});

app.get('/usuarios', userController.getUsers);

app.post('/usuarios', async (req,res) => {
    const body = req.body
    const data = await fs.readFile("./usuarios.json", "utf-8")
    const usuarios = JSON.parse(data);
    usuarios.push(body)

    const error = await fs.writeFile("./usuarios.json", JSON.stringify(usuarios));
    console.log(body)

    if (error) {res.json({error:"No se pudo guardar el usuario"})}
    res.json({mensaje: "Usuario Guardado"})
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});