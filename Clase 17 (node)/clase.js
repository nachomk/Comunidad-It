const formulario = document.getElementById('form');
const elInputTitulo = document.getElementById('inputTitulo');
const elInputBody = document.getElementById('inputBody');
const elInputUserId = document.getElementById('inputUserId');
const sectorError = document.getElementById('asideError');
const sectorNoError = document.getElementById('asideNoError')
let contador = 0

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const valorTitulo = elInputTitulo.value
    const valorBody = elInputBody.value.value
    const valorUserId = elInputUserId.value
    enviarDatos(valorTitulo,valorBody,valorUserId);
})

async function enviarDatos(titulo,body,userId) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titulo,
            body: body,
            userId: userId
        })
    })
    const result = await response.json();
    console.log(result)
    contador++;
    let cartelNoError = document.createElement('h3');
    cartelNoError.innerText = `Se ha completado el proceso número ${contador} existosamente.`
    sectorNoError.appendChild(cartelNoError)
    } catch (error) {
        let cartelError = document.createElement('h1');
        cartelError.innerText = `Ha ocurrido un error, intente nuevamente.`
        sectorError.appendChild(cartelError)
    } 

}