window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('btnCargar').addEventListener('click', traerTexto, false);
}

function traerTexto() {
    //Implementa AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('info').innerHTML = this.responseText;
        }
    }
    xhr.open('GET', 'archivo.txt', true);
    xhr.send();
}