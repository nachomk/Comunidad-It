// 1)
const botonTexto = document.getElementById('botonAgregaTexto');
const nuevoTexto = document.getElementById('nuevoTexto');

botonTexto.addEventListener('click', function(){
    let texto = document.createElement('h2');
    nuevoTexto.appendChild(texto);
    texto.innerText = 'Nuevo Texto Agregado';
});

// 2)
const botonOcultar = document.getElementById('botonOcultaTexto');
let ocultar = true;

botonOcultar.addEventListener('click', function(){
    if (ocultar) {
        nuevoTexto.classList.add('ocultar');
        ocultar = false;
    } else {
        nuevoTexto.classList.remove('ocultar');
        ocultar = true;
    }
});