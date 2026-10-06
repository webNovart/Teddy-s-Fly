document.getElementById("loginForm").onsubmit = async function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    try {
       const response = await fetch('/.netlify/functions/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user, password: pass })
});

        if (response.ok) {
            // Si la respuesta es OK, entramos al dashboard
            const data = await response.json();
            localStorage.setItem("authToken", data.token);
            window.location.href = "dashboard.html"; 
        } else {
            // Si la contraseña es incorrecta, mostramos error
            document.getElementById("errorMsg").style.display = "block";
        }
    } catch (error) {
        console.error("Error de conexión");
    }
};
