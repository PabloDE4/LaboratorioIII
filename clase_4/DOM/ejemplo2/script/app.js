window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
    document.getElementById('btnCrearP').addEventListener('click', crearP);
    document.getElementById('btnCrearImg').addEventListener('click', crearImg);
    document.getElementById('btnBorrarLast').addEventListener('click', borrarLast);
    document.getElementById('btnCrearFirst').addEventListener('click', borrarFirst);
    document.getElementById('btnSustituir').addEventListener('click', sustituir);
}

function crearP() {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(document.getElementById('txtArea').value);

    parrafo.appendChild(texto);

    parrafo.setAttribute('class', 'claseP');

    document.getElementById('div1').appendChild(parrafo);
}

function crearImg() {

    var imagen = document.createElement('img');
    imagen.setAttribute('src', './ejemplo.jpg');
    imagen.height = '300';
    imagen.alt = "ejemplo";

    document.getElementById('div1').appendChild(imagen);

}

function borrarLast() {
    var div = document.getElementById('div1');
    var hijo = div.lastChild;
    div.removeChild(hijo);
}

function borrarFirst() {
    var div = document.getElementById('div1');
    var hijo = div.firstChild;
    div.removeChild(hijo);
}

function sustituir() {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Hola mundo!");

    parrafo.appendChild(texto);

    document.getElementById('div1').replaceChild(parrafo, document.getElementById('div1').firstChild);
}