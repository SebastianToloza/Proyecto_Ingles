function busqueda() {

    let busquedaValor = document.getElementById("Buscador").value.toLowerCase();
    let secciones = document.querySelectorAll('.section');

    secciones.forEach(function (seccion) {
        let textoSeccion = seccion.innerText.toLowerCase();

        if (textoSeccion.includes(busquedaValor)) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}
