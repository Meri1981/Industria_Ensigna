function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realiza una petición AJAX al backend para autenticar al usuario.
    // Aquí deberías enviar los datos al backend y manejar la lógica de autenticación.

    // Ejemplo básico:
    if (username === "usuario" && password === "contraseña_usuario") {
        window.location.href ="index.html";
    } else if (username === "admin" && password === "contraseña_admin") {
        // Redirigir a la página específica para administradores
        window.location.href = "index1.html";
    } else {
        showMessage("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}

function showMessage(message) {
    document.getElementById("message").innerHTML = message;
}

