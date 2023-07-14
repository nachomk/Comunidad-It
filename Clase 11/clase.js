const tituloElement = document.getElementById('titulo');
const seccionNueva = document.getElementById('nueva-seccion');
const botonAgregar = document.getElementById('boton');
const botonCambiarColor = document.getElementById('botonEstilos');
let darkMode = false;

console.log(tituloElement);
tituloElement.innerHTML = 'Cambio de H1'; //Cambio de texto del H1, puede usarse tmb innerText (no me permite cambiar de etiqueta o agregar nuevas, con HTMl si)


//-------------------------------------------
let subtitulo = document.createElement('h2');
nuevaSeccion.appendChild(subtitulo); // Puedo usar tambien document.body.AppendChild --> esto muestra lo creado en el body, que hacerlo sin document.body, no lo hace
subtitulo.innerText = 'Prueba de H2';
console.log(subtitulo);

//---------------------------------------------EVENTOS-----------------------------

botonAgregar.addEventListener('click', function() {
    let subtitulo = document.createElement('h2');
    nuevaSeccion.appendChild(subtitulo); 
    subtitulo.innerText = 'Prueba de H2';
});

botonCambiarColor.addEventListener('click', function() {
    if (darkMode){
    document.body.style.backgroundColor ='white';
    darkMode = false;
    } else {
    document.body.style.backgroundColor ='black';
    darkMode = true;
    }
});