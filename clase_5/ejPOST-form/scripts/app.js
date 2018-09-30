window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('frmPersona').addEventListener('submit', manejarSubmit, false);
}

//Se deshabilita el evento por defecto
function manejarSubmit(e) {
    e.preventDefault();
    cargarPersona();
}

function cargarPersona() {
    //Implementa AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        document.getElementById('info').innerHTML = '<img src="./img/loader.gif" alt="Esperando">'
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById('info').innerHTML = this.responseText;
            } else {
                document.getElementById('info').innerHTML = 'Error: ' + this.status + " " + this.statusText;

            }
        }
    }
    var frm = document.getElementById('frmPersona');
    var data = new FormData(frm);
    xhr.open('POST', 'pagina1.php', true);
    xhr.setRequestHeader('x-Requested-Width', 'XMLHTTPRequest'); //MIME TYPE
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
