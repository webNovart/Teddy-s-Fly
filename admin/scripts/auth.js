

document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    // Cambia estos valores por tus credenciales reales de admin
    const adminUser = "admin";
    const adminPass = "teddysfly123";
    if (user === adminUser && pass === adminPass) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
};
