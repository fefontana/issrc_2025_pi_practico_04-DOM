// Obtén los elementos del DOM
const tareaInput = document.getElementById('tareaInput');
const agregarBtn = document.getElementById('agregarBtn');
const tareasLista = document.getElementById('tareasLista');

// Función para agregar tarea
function agregarTarea() {
    const tareaTexto = tareaInput.value.trim();
    if (tareaTexto !== '') {
        // Crear un nuevo elemento de lista (li)
        const tareaElemento = document.createElement('li');
        tareaElemento.textContent = tareaTexto;

        // Crear un botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('delete');
        eliminarBtn.addEventListener('click', () => {
            tareaElemento.remove();
        });

        // Agregar el botón de eliminar al elemento de la tarea
        tareaElemento.appendChild(eliminarBtn);

        // Agregar la nueva tarea a la lista
        tareasLista.appendChild(tareaElemento);

        // Limpiar el input
        tareaInput.value = '';
    } else {
        alert('Por favor, escribe una tarea');
    }
}

// Agregar tarea cuando se hace clic en el botón
agregarBtn.addEventListener('click', agregarTarea);

// También agregar tarea cuando se presiona "Enter"
tareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
