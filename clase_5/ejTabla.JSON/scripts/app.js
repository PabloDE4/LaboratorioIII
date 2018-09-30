window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById('btnCargar').addEventListener('click', cargarDatos, false);
}

function cargarDatos() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'servidor.php', true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhr.responseText);

            cargarTabla(data);
        }
    }

    document.getElementById("info").innerHTML = '<img src="img/loader.gif">';
    xhr.send();
}

function cargarTabla(data) {

    var tabla = "<table class='table'><thead><tr><th>ID</th><th>Marca</th><th>Modelo</th><th>Año</th></tr></thead><tbody>";

    for (var i = 0; i < data.length; i++) {
        tabla += "<tr><td>" + data[i].id + "</td><td>" + data[i].marca + "</td><td>" + data[i].modelo + "</td><td>" + data[i].anio + "</td></tr>";
    }
    tabla += "</tbody></table>";

    document.getElementById("info").innerHTML = tabla;

}

