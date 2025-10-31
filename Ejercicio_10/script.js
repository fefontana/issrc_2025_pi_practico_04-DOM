/* 💡 Qué hace este Mini Kanban
Funcionalidad	Descripción
🆕 Agregar tareas	Desde el formulario, se agregan a la columna “Pendiente”.
🎯 Drag & Drop	Se pueden arrastrar entre las columnas “Pendiente”, “En progreso” y “Hecho”.
💾 Persistencia	El estado completo se guarda en localStorage y se restaura al recargar la página.
🧭 Visual	El área donde se suelta la tarea se ilumina para mayor claridad. */

const form = document.getElementById('form-tarea');
const input = document.getElementById('nuevaTarea');
const columnas = document.querySelectorAll('.columna');

// Cargar desde localStorage
let tablero = JSON.parse(localStorage.getItem('kanban')) || {
  pendiente: [],
  progreso: [],
  hecho: []
};

// 🔹 Renderizar tablero completo
function render() {
  columnas.forEach(col => {
    const estado = col.dataset.estado;
    const contenedor = col.querySelector('.contenedor-tareas');
    contenedor.innerHTML = '';

    tablero[estado].forEach((tarea, i) => {
      const div = document.createElement('div');
      div.classList.add('tarea');
      div.textContent = tarea;
      div.draggable = true;
      div.dataset.index = i;
      div.dataset.estado = estado;

      // Eventos de arrastre
      div.addEventListener('dragstart', handleDragStart);
      contenedor.appendChild(div);
    });
  });

  localStorage.setItem('kanban', JSON.stringify(tablero));
}

// 🔹 Agregar nueva tarea
form.addEventListener('submit', e => {
  e.preventDefault();
  const texto = input.value.trim();
  if (!texto) return;

  tablero.pendiente.push(texto);
  input.value = '';
  render();
});

// 🔹 Eventos de arrastre
let tareaArrastrada = null;

function handleDragStart(e) {
  tareaArrastrada = {
    texto: e.target.textContent,
    estado: e.target.dataset.estado,
    index: e.target.dataset.index
  };
}

columnas.forEach(col => {
  const contenedor = col.querySelector('.contenedor-tareas');

  contenedor.addEventListener('dragover', e => {
    e.preventDefault();
    col.classList.add('dragover');
  });

  contenedor.addEventListener('dragleave', () => {
    col.classList.remove('dragover');
  });

  contenedor.addEventListener('drop', () => {
    col.classList.remove('dragover');
    if (!tareaArrastrada) return;

    // Eliminar de la columna anterior
    tablero[tareaArrastrada.estado].splice(tareaArrastrada.index, 1);

    // Agregar a la nueva columna
    const nuevoEstado = col.parentElement.dataset.estado || col.dataset.estado;
    tablero[nuevoEstado].push(tareaArrastrada.texto);

    tareaArrastrada = null;
    render();
  });
});

// Inicializar
render();
