window.onload = function () {
    /*
    document.getElementById("titulo").onclick = function saludar() {
       
        alert("Dentro de la funcion cambiar");
        titulo.innerHTML = "Hola mundo!";
        
    }
*/

this.document.getElementById('titulo').addEventListener("click", saludar, false);
this.document.getElementById('titulo').addEventListener("click", cambiarColor, false);
this.document.getElementById('titulo').addEventListener("click", cambiarTexto, false);
this.document.getElementById('titulo').addEventListener("click", function() {
    alert("Chau");
}, false);

}

function saludar() {
    alert("Hola!");
    document.getElementById('titulo').removeEventListener("click", saludar);
}

function cambiarColor() {
    document.getElementById('titulo').style.color = "blue";
}

function cambiarTexto() {
    document.getElementById('titulo').innerHTML = "Te cambio el texto";
  
}