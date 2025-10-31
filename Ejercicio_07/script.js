// Datos del acordeón
const preguntas = [
  {
    titulo: "¿Qué horarios tiene la cafetería?",
    respuesta: "Abrimos de lunes a sábado de 8:00 a 20:00, y los domingos de 9:00 a 18:00."
  },
  {
    titulo: "¿Ofrecen productos sin gluten?",
    respuesta: "Sí, tenemos opciones sin gluten y sin lactosa disponibles todos los días."
  },
  {
    titulo: "¿Puedo hacer pedidos para llevar?",
    respuesta: "Por supuesto. Podés hacer tu pedido por teléfono o directamente en el local."
  }
];

// Referencia al contenedor
const contenedor = document.getElementById('acordeon');

// Crear acordeón dinámicamente
preguntas.forEach((item, index) => {
  const divItem = document.createElement('div');
  divItem.classList.add('acordeon-item');

  const header = document.createElement('div');
  header.classList.add('acordeon-header');
  header.textContent = item.titulo;
  header.dataset.index = index;

  const contenido = document.createElement('div');
  contenido.classList.add('acordeon-contenido');
  contenido.textContent = item.respuesta;

  // Agregar al DOM
  divItem.appendChild(header);
  divItem.appendChild(contenido);
  contenedor.appendChild(divItem);

  // Evento de clic para mostrar/ocultar contenido
  header.addEventListener('click', () => {
    contenido.classList.toggle('activo');
  });
});
