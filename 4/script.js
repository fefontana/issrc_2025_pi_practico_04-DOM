function filtrarNombres() {
    const buscador = document.getElementById('buscador');
    const filtro = buscador.value.toLowerCase(); // Convertimos a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
    const lista = document.getElementById('listaNombres');
    const nombres = lista.getElementsByTagName('li');

    // Iteramos sobre la lista de nombres
    for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i].textContent || nombres[i].innerText;

        // Si el nombre contiene el texto de búsqueda, lo mostramos; si no, lo ocultamos
        if (nombre.toLowerCase().includes(filtro)) {
            nombres[i].style.display = "";
        } else {
            nombres[i].style.display = "none";
        }
    }
}
