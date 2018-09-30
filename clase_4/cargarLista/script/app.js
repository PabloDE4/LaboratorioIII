var lista = [];
var txtNombre;
var txtEdad;

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {

    var frm = document.getElementById("frmAlta");

    frm.addEventListener('submit', manejarEnvio, false);

    txtNombre = document.getElementById('txtNombre');
    txtEdad = document.getElementById('txtEdad');
}

function manejarEnvio(e) {
    e.preventDefault();
    //alert("Evento capturado");

    cargarLista();
}

function cargarLista() {

    var nuevaPersona = new Persona(txtNombre.value, parseInt(txtEdad.value));

    lista.push(nuevaPersona);

    console.log(lista);

    refrescarLista();

}

function refrescarLista() {
    var tabla = "<table id='tablaPersona'><tr><th>Nombre</th><th>Edad</th></tr>";

    for (var i = 0; i < lista.length; i++) {
        tabla += "<tr><td>" + lista[i]['nombre'] + "</td><td>" + lista[i]['edad'] + "</td></tr>"
    }

    tabla += "</table>";

    document.getElementById('divTabla').innerHTML = tabla;

}