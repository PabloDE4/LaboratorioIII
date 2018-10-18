
if (localStorage) {
    if (localStorage.token) {
        validateUser(localStorage.token);
    }
}

window.onload = function () {
    $("#btnLogIn").click(function () {
        login();
    });
}

var xhr;

function validateUser(token) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (xhr.responseText == "OK") {
                    window.location.replace("http://localhost:3000/admin.html");
                }
            }
            else {
                alert("No tiene permisos para realizar esa acción.");
                window.location.replace("http://localhost:3000/accesdenied.html");
            }
        }
    }

    xhr.open("POST", "http://localhost:3000/validate", false);
    xhr.setRequestHeader("authorization", token);
    xhr.send("");
};



function login() {
    var data = {
        "usuario": document.getElementById("name").value,
        "password": document.getElementById("pass").value
    }

    var sendData = { "collection": "users", "data": data };

    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (this.readyState == 4) {
            if (this.status == 200) {
                localStorage.token = JSON.parse(xhr.responseText).token; //console.log(JSON.parse(xhr.responseText).token)            
                window.location.replace(xhr.getResponseHeader('redirect'));
            }
            if (this.status == 403) {
                window.location.replace("http://localhost:3000/accessdenied.html");
            }
        }
    };

    xhr.open("POST", "http://localhost:3000/login", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(sendData));

}