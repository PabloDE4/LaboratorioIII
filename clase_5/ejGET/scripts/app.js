window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('btnCargar').addEventListener('click', cargarPersona, false);
}

function cargarPersona() {
    //Implementa AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('info').innerHTML = this.responseText;
        }
    }
    var data = leerDatos();
    xhr.open('GET', 'pagina1.php' + data, true);
    xhr.send();
}

function leerDatos() {
    var cadena = '';
    var nombre = document.getElementById('txtNombre').value;
    var edad = document.getElementById('txtEdad').value;

    cadena += "?nombre=" + nombre + "&edad=" + edad;
    return cadena;
}