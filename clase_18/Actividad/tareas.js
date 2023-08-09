let tareas = [
    {
        description: 'ir a entrenar',
        done: true
    },
    {
        description: 'pasear al gato',
        done: false
    }
]

function mostrarTareas() {
    console.log(tareas)
}

function agregarTareas(nuevaTarea) {
    tareas.push(nuevaTarea)
}

function vaciarListas() {
    tareas = [];
}

module.exports = { mostrarTareas, agregarTareas, vaciarListas }