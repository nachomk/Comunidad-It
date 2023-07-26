// function pedirDatos () {

// }
// let miPromesa = new Promise((resolve,reject) => {

// })

const listaUsuarios = document.getElementById('listaUsuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((datos) => {
        //console.log(datos);
        datos.forEach((data) => {
        let elementoLista = document.createElement('li');
        let elementoListaBoton = document.createElement('button')
        elementoListaBoton.innerText = `${data.name}`
        listaUsuarios.appendChild(elementoLista);
        elementoLista.appendChild(elementoListaBoton);
        
        elementoListaBoton.addEventListener ('click', (e) => {
        e.preventDefault();
        mostrarInfoDeUsuario(data.id);
        })
        })
    })
    


function mostrarInfoDeUsuario(id) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then(response => response.json())
    .then((datos) => {
        console.log(datos)
    })
}

