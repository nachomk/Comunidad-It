const formulario = document.querySelector('#formulario')
const inputName = document.querySelector('#nombre')
const inputLastName = document.querySelector('#apellido')

formulario.addEventListener('submit', function(event){
    event.preventDefault(); // No actualiza al clickear el Submit (funcion que esta por defecto)
    // let nombre = formulario['nombre'].value
    // let apellido = formulario['nombre'].value
    let nombre = inputName.value;
    let apellido = inputLastName.value;
    console.log(nombre);
    console.log(apellido);





    // console.log(formulario['nombre'].value); // Guarda lo escrito en el Input de Nombre (Ej: escribo Galo --> aparece en consola 'Galo')
    // console.log(formulario['apellido'].value); // Guarda lo escrito en el Input de Apellido
});