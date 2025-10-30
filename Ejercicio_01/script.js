const titulo = document.getElementById('titulo');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
  titulo.textContent = '¡modificando web via DOM!';
  titulo.classList.toggle('resaltado');
});
