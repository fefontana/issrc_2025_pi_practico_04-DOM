/* 💡 Qué hace este código
Comportamiento	Descripción
Validación en vivo	A medida que el usuario escribe, se valida cada campo.
Colores visuales	Verde si es válido, rojo si no.
Mensajes de error	Aparecen debajo de cada campo.
Al enviar	Si todo está correcto → muestra mensaje de éxito, si no → error global. */

const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

// 🔹 Validaciones individuales
function validarNombre() {
  const valor = nombreInput.value.trim();
  const error = nombreInput.nextElementSibling;

  if (valor.length < 3) {
    error.textContent = 'El nombre debe tener al menos 3 caracteres.';
    nombreInput.classList.add('error-input');
    nombreInput.classList.remove('correcto');
    return false;
  } else {
    error.textContent = '';
    nombreInput.classList.remove('error-input');
    nombreInput.classList.add('correcto');
    return true;
  }
}

function validarEmail() {
  const valor = emailInput.value.trim();
  const error = emailInput.nextElementSibling;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(valor)) {
    error.textContent = 'Introduce un email válido.';
    emailInput.classList.add('error-input');
    emailInput.classList.remove('correcto');
    return false;
  } else {
    error.textContent = '';
    emailInput.classList.remove('error-input');
    emailInput.classList.add('correcto');
    return true;
  }
}

// 🔹 Validación en vivo (al escribir)
nombreInput.addEventListener('input', validarNombre);
emailInput.addEventListener('input', validarEmail);

// 🔹 Al enviar el formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página

  const nombreValido = validarNombre();
  const emailValido = validarEmail();

  if (nombreValido && emailValido) {
    mensaje.style.color = 'green';
    mensaje.textContent = '✅ Formulario enviado con éxito.';
    formulario.reset();
    nombreInput.classList.remove('correcto');
    emailInput.classList.remove('correcto');
  } else {
    mensaje.style.color = 'red';
    mensaje.textContent = '❌ Corrige los errores antes de enviar.';
  }
});
