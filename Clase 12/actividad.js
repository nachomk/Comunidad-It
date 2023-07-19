let usuarios = [
    { // ITEM 1
    nombre: 'Pablo',
    apellido: 'Gonzalez'
    },
    { // ITEM 2
    nombre: 'Juan',
    apellido: 'Perez'
    }
];


const formulario = document.querySelector('#formulario');


function actualizarListaUsuarios () {
    
}
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let nombreInput = formulario['nombre'].value
    let apellidoeInput = formulario['apellido'].value
    let nuevoUsuario = {
        nombre: nombreInput,
        apellido: apellidoeInput
        }
    }
);
console.log(usuarios);
usuarios.forEach((usuario) => { // persona --> cada item del array de objetos
    let elementoLista = document.createElement('li'); // Creo un elemento de HTML
    elementoLista.innerText = `${usuario.nombre} ${usuario.apellido}`; // Formato de como quiero que aparezca (en este caso, primero los nombres y despues apellidos del array)
    listaUsuarios.appendChild(elementoLista); // Muestra todo lo anterior en la pagina
    }
);

