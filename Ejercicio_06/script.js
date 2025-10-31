/* 💡 Explicación rápida:
Elemento	Función
data-panel	Atributo personalizado que vincula cada botón con su panel
tab.classList.add/remove	Cambia visualmente qué pestaña está activa
panel.classList.add/remove	Muestra u oculta el contenido asociado
tab.dataset.panel	Permite acceder al valor del atributo data-panel desde JS

✅ Resultado:

Al hacer clic en una pestaña, se activa visualmente.

Solo se muestra el panel asociado, ocultando los demás.

Todo controlado mediante data-panel, sin if complicados ni duplicar código. */

const tabs = document.querySelectorAll('.tab');
const paneles = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Quitar clase activa de todas las pestañas
    tabs.forEach(t => t.classList.remove('activa'));
    // Agregar clase activa a la pestaña clickeada
    tab.classList.add('activa');

    // Ocultar todos los paneles
    paneles.forEach(panel => panel.classList.remove('activo'));

    // Obtener el id del panel asociado
    const panelId = tab.dataset.panel; // <-- uso de data-panel
    const panelActivo = document.getElementById(panelId);

    // Mostrar el panel correspondiente
    panelActivo.classList.add('activo');
  });
});
