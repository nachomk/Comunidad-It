const express = require('express');
const app = express();
const fs = require('fs/promises');


//Filtro de mascotas dependiendo el animal
app.get('/macotas/:animal', async (req, res) => {
    const { animal } = req.query;
    const data = await fs.readFile("./actividad.json", "utf-8");
    const mascotas = JSON.parse(data);
    const filtroAnimal = mascotas.filter((mascota) => mascotas.animal === animal);
    res.json(mascotas);
});

//Filtro de mascotas dependiendo si esta perdido (boolean)
app.get('/macotas/:perdido', async (req, res) => {

});

//Filtro de mascotas por su nombre
app.get('/macotas/:nombre', async (req, res) => {

});

//Agregar mascotas al archivo JSON
app.post('/macotas', async (req, res) => {

});