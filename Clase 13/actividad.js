let usuarios = [{
    id: 1,
    email: 'enzo@gmail.com',
    contraseña: 2015
},
{
    id: 2,
    email: 'bianca@gmail.com',
    contraseña: 1234
}];

const formulario = document.getElementById('form');
const listaUsuarios = document.getElementById('listaUsuarios');
const usuarioContraseña = document.getElementById('inputContraseña');
const usuarioEmail = document.getElementById('inputEmail');
let contadorId = 3;

function registraListaUsuarios() {
    listaUsuarios.innerHTML = '';
    usuarios.forEach((usuario) => {
        let elementoLista = document.createElement('li');
        elementoLista.innerText = `${usuario.email}`
        listaUsuarios.appendChild(elementoLista);
    })
};


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let usuario of usuarios) {
        if (usuarioEmail.value === usuario.email){
            alert('El correo ya esta registrado')
            return;
        }
    }
    if (usuarioContraseña.value.length === 0 && usuarioEmail.value.length === 0) {
        alert('Debe llenarse todos los campos obligatoriamente')
        return;
    };
    if (usuarioContraseña.value.length <= 3) {
        alert('La contraseña debe tener mas de 3 caracteres');
        return;
    }
    let emailInput = formulario['email'].value
    let contraseñaInput = formulario['contraseña'].value
    let nuevoUsuario = {
        id: contadorId,
        email: emailInput,
        contraseña: contraseñaInput
    };
    usuarios.push(nuevoUsuario);
    contadorId++;
    registraListaUsuarios()
});
registraListaUsuarios()

