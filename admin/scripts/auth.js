const adminUser = "admin";
const adminPass = "teddysfly123"; // Cambia esto por tu contraseña

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === adminUser && pass === adminPass) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
});
