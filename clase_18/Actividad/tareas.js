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

function eliminarUltTarea() {
    tareas.pop()
}

function eliminarUnaTarea(indice, cantidad) {
    tareas.splice(indice,cantidad)
}

module.exports = { mostrarTareas, agregarTareas, vaciarListas, eliminarUltTarea, eliminarUnaTarea }