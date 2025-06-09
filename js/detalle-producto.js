// Datos de ejemplo, puedes cargarlos desde un JSON o backend en un futuro
const productos = [
    {
        id: "1",
        nombre: "Peluche Osito Viajero",
        precio: 29900,
        imagen: "assets/img/peluche-nuevo.jpg",
        miniaturas: [
            "assets/img/peluche-nuevo.jpg",
            "assets/img/peluche-nuevo2.jpg",
            "assets/img/peluche-nuevo3.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El Peluche Osito Viajero es suave, lavable y perfecto para acompañar a grandes y pequeños en cada aventura. Material antialérgico, tamaño 30cm, disponible en varios colores.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Recomendado desde 3 años</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 25 opiniones)</p>
            </div>
        `
    },
    {
        id: "2",
        nombre: "Peluche Pikachu",
        precio: 34900,
        imagen: "assets/img/peluche-pikachu.jpg",
        miniaturas: [
            "assets/img/peluche-pikachu.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>¡El Pikachu más adorable! Suave, tamaño 25cm, ideal para fans de todas las edades.</p>
            <ul>
                <li>Material: Felpa premium</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí</li>
                <li>Producto Licenciado</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.5/5 basado en 12 opiniones)</p>
            </div>
        `
    }
    // ...agrega más productos aquí
];

// Función para obtener el parámetro id de la URL
function getParameterByName(name) {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get(name);
}

document.addEventListener("DOMContentLoaded", function() {
    const id = getParameterByName("id");
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
        document.title = "Producto no encontrado | Teddy's Fly";
        return;
    }

    // Llenar la información
    document.getElementById("titulo-pagina").textContent = producto.nombre + " | Teddy's Fly";
    document.getElementById("nombre-producto").textContent = producto.nombre;
    document.getElementById("precio-producto").textContent = "$" + producto.precio.toLocaleString();
    document.getElementById("img-principal").src = producto.imagen;
    document.getElementById("img-principal").alt = producto.nombre;
    document.getElementById("descripcion-producto").innerHTML = producto.descripcion;

    // Miniaturas
    const miniaturasDiv = document.getElementById("miniaturas");
    miniaturasDiv.innerHTML = "";
    producto.miniaturas.forEach(img => {
        const mini = document.createElement("img");
        mini.src = img;
        mini.alt = producto.nombre;
        mini.width = 60;
        mini.height = 60;
        mini.addEventListener("click", () => {
            document.getElementById("img-principal").src = img;
        });
        miniaturasDiv.appendChild(mini);
    });

    // Botón añadir al carrito: poner los data-atributos necesarios
    const btnCarrito = document.getElementById("btn-agregar-carrito");
    btnCarrito.setAttribute("data-id", producto.id);
    btnCarrito.setAttribute("data-nombre", producto.nombre);
    btnCarrito.setAttribute("data-precio", producto.precio);
    btnCarrito.setAttribute("data-imagen", producto.imagen);
});
