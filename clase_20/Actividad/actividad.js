const express = require('express');
const app = express();
const fs = require('fs/promises');


//Filtro de mascotas dependiendo el animal y estado (perdido)
app.get('/mascotas', async (req, res) => {
    const animal = req.query.animal;
    const perdido = req.query.perdido == "true" ? true : false;
    const data = await fs.readFile("./actividad.json", "utf-8");
    const mascotas =JSON.parse(data);
    if (animal) {
        mascotas = mascotas.filter((mascota) => mascota.animal == animal);
    }
    if (perdido) {
        let estaPerdido = perdido == "true" ? true : false 
        mascotas = mascotas.filter((mascota) => mascota.perdido == perdido);
    }
    res.json(mascotas);
});

//Filtro de mascotas por su nombre TERMINADO
app.get('/mascotas/:nombre', async (req, res) => {
    const nombre = req.params.nombre;
    const data = await fs.readFile("./actividad.json", "utf-8");
    let mascotas = JSON.parse(data);
    let mascota = mascotas.find((mascota) => mascota.nombre == nombre); // find me retorna un item
    res.json(mascota);
});

//Agregar mascotas al archivo JSON
app.post('/mascotas', async (req, res) => {
    const body = req.body;
    const data = await fs.readFile("./actividad.json", "utf-8");
    const mascotas = JSON.parse(data);
    mascotas.push(body);
    const error = await fs.writeFile("./actividad.json", JSON.stringify(mascotas));
    if (error) { res.json({ error: "No se pudo guardar la mascota"})};
    res.json ({ mensaje: "Mascota guardada"});
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});