// function pedirDatos () {

// }
// let miPromesa = new Promise((resolve,reject) => {

// })

const listaUsuarios = document.getElementById('listaUsuarios');
const listaTitulos = document.getElementById('listaTitulos');
const listaId = document.getElementById('listaId');
const listaFoto = document.getElementById('listaFoto');


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

function mostrarInfoDeUsuario(idAlbum) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${idAlbum}`)
    .then(response => response.json())
    .then((datosAlbum) => {
        // console.log(datosAlbum)
        listaTitulos.innerHTML = '';
        listaId.innerHTML = '';
        datosAlbum.forEach((dato) => {
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
    })
}


function mostrarFotoTitulo(id) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(response => response.json())
    .then((datoFotos) => {
        listaFoto.innerHTML= '';
        datoFotos.forEach ((datoFoto) => {
            let elementoListaFoto = document.createElement('li')
            elementoListaFoto.innerText = `${datoFoto.title}`
            listaFoto.appendChild(elementoListaFoto)

            let elementoFoto = document.createElement('img')
            elementoFoto.setAttribute('src',datoFoto.url)
            listaFoto.appendChild(elementoFoto)

        })
    })
}