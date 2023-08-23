const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors')

//MIDDLEWARE
app.use(express.static(path.join(__dirname,'./client'))); //Se puede usar css en ambos
app.use(cors());

app.get('/contacto', (req, res) => {
    console.log('Hola');
    const fileContacto = path.join(__dirname, './client/contacto.html');
    console.log(fileContacto);
    res.sendFile(fileContacto);
});

app.get('/home', (req, res) => {
    const fileInicio = path.join(__dirname, './client/home.html');
    res.sendFile(fileInicio);
})

app.get('/nosotros', (req, res) => {
    const fileNosotros = path.join(__dirname, './client/home.html');
    res.sendFile(fileNosotros);
})

app.get('/api/usuarios', (req,res) => {
    res.header('Access-Control-Allow-Origin','*') //Dando permiso a cualquiera que quiera acceder a esta informacion (en el * se aclara si es a una pagina en especifico)
    res.json({ name:'ignacio', apellido: 'mk' });
})

app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080');
});