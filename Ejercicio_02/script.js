/* 💡 Explicación rápida:
contador guarda el número actual.
textContent actualiza el valor mostrado.
btnRestar.disabled = contador === 0 evita valores negativos y desactiva el botón cuando llega a 0.
Funciones separadas hacen el código más limpio y fácil de mantener.
 */
const valor = document.getElementById('valor');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnReset = document.getElementById('reset');

let contador = 0;

// Función para actualizar la vista
function actualizar() {
  valor.textContent = contador;
  btnRestar.disabled = contador === 0; // Desactiva si es 0
}

// Eventos
btnSumar.addEventListener('click', () => {
  contador++;
  actualizar();
});

btnRestar.addEventListener('click', () => {
  if (contador > 0) contador--;
  actualizar();
});

btnReset.addEventListener('click', () => {
  contador = 0;
  actualizar();
});

// Estado inicial
actualizar();
