/* 💡 Qué hace este código
Funcionalidad	Descripción
Agregar fila	Desde el formulario, los datos se guardan en un array personas y se muestran en la tabla.
Ordenar por encabezado	Al hacer clic en un encabezado (“Nombre” o “Edad”), la tabla se ordena.
Alternar orden	Cada clic cambia entre ascendente y descendente.
Señal visual	La columna activa se resalta con una clase .activo. */

const form = document.getElementById('form-persona');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const tablaBody = document.querySelector('#tabla tbody');
const encabezados = document.querySelectorAll('#tabla thead th');

let personas = [];
let ordenActual = { columna: null, asc: true };

// 🔹 Agregar fila
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = nombreInput.value.trim();
  const edad = parseInt(edadInput.value);

  if (nombre && !isNaN(edad)) {
    personas.push({ nombre, edad });
    actualizarTabla();
    form.reset();
  }
});

// 🔹 Renderizar tabla
function actualizarTabla() {
  tablaBody.innerHTML = '';

  personas.forEach(p => {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${p.nombre}</td><td>${p.edad}</td>`;
    tablaBody.appendChild(fila);
  });
}

// 🔹 Ordenar por columna
encabezados.forEach(th => {
  th.addEventListener('click', () => {
    const col = th.dataset.col;

    // Alternar orden asc/desc si ya está seleccionada
    if (ordenActual.columna === col) {
      ordenActual.asc = !ordenActual.asc;
    } else {
      ordenActual = { columna: col, asc: true };
    }

    ordenarPor(col, ordenActual.asc);

    encabezados.forEach(e => e.classList.remove('activo'));
    th.classList.add('activo');
  });
});

function ordenarPor(columna, asc) {
  personas.sort((a, b) => {
    if (typeof a[columna] === 'string') {
      return asc
        ? a[columna].localeCompare(b[columna])
        : b[columna].localeCompare(a[columna]);
    } else {
      return asc ? a[columna] - b[columna] : b[columna] - a[columna];
    }
  });
  actualizarTabla();
}
