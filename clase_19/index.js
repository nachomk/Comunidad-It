const express = require('express');
const app = express();
let usuarios = [
    {id:1, nombre: 'galo', apellido: 'vazquez', profesion: 'programador'},
    {id:2, nombre: 'lucas', apellido: 'gomez', profesion: 'arquitecto'},
    {id:3, nombre: 'fran', apellido: 'martinez', profesion: 'contador'},
    {id:4, nombre: 'tobias', apellido: 'lopez', profesion: 'programador'},
    {id:5, nombre: 'carlos', apellido: 'garcia', profesion: 'abogado'}
];

app.listen(3000, () => {
    console.log('Servidor Corriendo');
})

app.get ('/usuarios', (req, res) => {
    const { profesion } = req.query;
    console.log(profesion)
    const usuariosFiltrados = usuarios.filter((usuario) => {
        return usuario.profesion === profesion
    });
    res.json(usuariosFiltrados);
});

app.get ('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const userFiltered = usuarios.find((usuario) => {
        return usuario.id === parseInt(id)
    });
    res.json(userFiltered)
});


// app.get('/', function(request,response) {
//     console.log('Recibimos una petición');
// })

// app.get('/perfil/:id', function(request,response) {
//     const params = request.params;
//     console.log(params);
//     console.log('Recibimos una petición en el Perfil');
//     response.send(`Bienvenido, ${params.id}`);
// })

// app.get('/usuarios', function(request,response) {
//     // QUERY    
//     console.log(request.query);
//     const { nombre, apellido, edad } = request.query // CON DESTRUCTURING
//     console.log( nombre, apellido, edad )
//     response.json({ nombre, apellido, edad });
// })
