// Utilidades básicas
const hashedPassword = "hash_generado_SHA256_aquí";

// Obtiene y muestra la fecha actual
function getFormattedDate() {
    const now = new Date();
    return now.toISOString().split("T")[0];
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message || "";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const passwordInput = document.getElementById("password").value;
    validatePasswords();
});