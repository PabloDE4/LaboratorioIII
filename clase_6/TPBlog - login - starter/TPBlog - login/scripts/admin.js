
if (localStorage) {
    if (localStorage.token) {
        validateUser(localStorage.token);
    }
}

window.onload = function () {

    document.getElementById("btnLogOff").onclick = function () {
        logOut();
    };
}

function logOut() {
    localStorage.removeItem("token");
    window.location.replace("http://localhost:3000/");
}

//FALTA VALIDAR TOKEN PARA NO ENTRAR DIRECTAMENTE

