// Utilidades básicas
const hashedPassword = "aadb41e536d5a37a44593e2308070b139e337b3e631da513a2641c319c2223b7";

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
