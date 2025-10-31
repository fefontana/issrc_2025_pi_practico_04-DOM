/* Cómo funciona:
El modal está oculto por defecto (display: none).
Al hacer clic en el botón “Abrir modal”, se agrega la clase .activo → lo muestra.
Se puede cerrar:
Con el botón “Cerrar” → quita la clase .activo.
Con clic fuera del contenido → detectando que el clic fue sobre el fondo.
Con la tecla ESC → escuchando el evento keydown y comprobando e.key === 'Escape'.
 */
const modal = document.getElementById('modal');
const btnAbrir = document.getElementById('abrirModal');
const btnCerrar = document.getElementById('cerrarModal');

// Abrir modal
btnAbrir.addEventListener('click', () => {
  modal.classList.add('activo');
});

// Cerrar con botón interno
btnCerrar.addEventListener('click', () => {
  modal.classList.remove('activo');
});

// Cerrar con clic fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) { // Detecta clic en el fondo oscuro
    modal.classList.remove('activo');
  }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('activo');
  }
});
