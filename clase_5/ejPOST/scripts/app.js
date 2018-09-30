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
    xhr.open('POST', 'pagina1.php' , true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

function leerDatos() {
    var cadena = '';
    var nombre = document.getElementById('txtNombre').value;
    var edad = document.getElementById('txtEdad').value;

    //encodeURIComponent: Formatea el string para que lo acepte el servidor
    cadena += "nombre=" + encodeURIComponent(nombre) + "&edad=" + encodeURIComponent(edad);
    return cadena;
}
