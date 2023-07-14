const cambioDeTexto = document.getElementById('cambiarTexto');
const cambioColorFondo = document.getElementById('botonCambioColor')


// cambioDeTexto.innerHTML = 'Texto cambiado';
cambioDeTexto.innerHTML = '<p>Texto cambiado y etiqueta cambiada</p>'
cambioColorFondo.addEventListener('click', function(){
    document.body.style.backgroundColor = '#1D8'
});

