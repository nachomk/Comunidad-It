// function pedirDatos () {

// }
// let miPromesa = new Promise((resolve,reject) => {

// })

const listaUsuarios = document.getElementById('listaUsuarios');
const listaTitulos = document.getElementById('listaTitulos');
const listaId = document.getElementById('listaId');
const listaFoto = document.getElementById('listaFoto');



async function obtenerUsuarios() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let usuarios = await response.json();
        usuarios.forEach((data) => {
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
    } catch(error) {
        console.log(error)
    } finally {

    }
}
obtenerUsuarios()


async function mostrarInfoDeUsuario (idAlbum) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${idAlbum}`)
        let infoUsuarios = await response.json();
        listaTitulos.innerHTML = '';
        listaId.innerHTML = '';
        infoUsuarios.forEach((dato) => {
            let elementoListaTitulo = document.createElement('li')
            let elementoListaTituloBoton = document.createElement('button')
            elementoListaTituloBoton.innerText = `${dato.title}`
            listaTitulos.appendChild(elementoListaTitulo)
            elementoListaTitulo.appendChild(elementoListaTituloBoton)

            let elementoListaId = document.createElement('li')
            elementoListaId.innerText = `${dato.id}`
            listaId.appendChild(elementoListaId)

            elementoListaTituloBoton.addEventListener('click', () => {
                mostrarFotoTitulo(dato.id)
            })
        })
    } catch(error) {
        console.log(error) 
    } finally {

    }
}
mostrarInfoDeUsuario()


async function mostrarFotoTitulo (id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    let fotoTitulo = await response.json();
    listaFoto.innerHTML= '';
    fotoTitulo.forEach ((datoFoto) => {
        let elementoListaFoto = document.createElement('li')
        elementoListaFoto.innerText = `${datoFoto.title}`
        listaFoto.appendChild(elementoListaFoto)

        let elementoFoto = document.createElement('img')
        elementoFoto.setAttribute('src',datoFoto.url)
        listaFoto.appendChild(elementoFoto)
    })
    } catch(error) {
        console.log(error)
    } finally {

    }
}
mostrarFotoTitulo()



async function mostrarDatos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    });
    const result = await response.json();
    console.log(result)
}
mostrarDatos()