window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
    document.getElementById('btnCambioTexto').addEventListener('click', cambioTexto);
    document.getElementById('btnCambioClases').addEventListener('click', cambioClases);
    document.getElementById('btnSacarClase').addEventListener('click', sacarClase);
}

function cambioTexto() {

    document.getElementById('p1').innerHTML = "Otro texto p1";
    document.getElementsByTagName('p')[1].innerHTML = "Otro texto p2";
    document.getElementsByClassName('claseP')[0].innerHTML = "Otro texto p3";

    var div = document.getElementById('divParrafos');
    div.getElementsByTagName('p')[3].innerHTML = "Otro texto p4";
}

function cambioClases() {

    //document.getElementById('p2').setAttribute('class','claseP');
    document.getElementById('p2').className = 'claseP';
}

function sacarClase() {
    document.getElementById('p3').setAttribute('class', "");
}