// tienda.js
// Usa el array productos definido en detalle-producto.js
// Renderiza tarjetas de productos en el contenedor con id="productos-grid"

function renderProductos() {
    const grid = document.getElementById("productos-grid");
    grid.innerHTML = "";
    productos.forEach(producto => {
        grid.innerHTML += `
        <div class="producto-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toLocaleString('es-CO')}</p>
            <a href="detalle-producto.html?id=${producto.id}" class="btn-secondary">Ver Detalles</a>
            <button class="btn-cart"
                data-id="${producto.id}"
                data-nombre="${producto.nombre}"
                data-precio="${producto.precio}"
                data-imagen="${producto.imagen}"
                title="Añadir al carrito">
                <img src="assets/icons/cart.svg" alt="Añadir al carrito">
            </button>
        </div>
        `;
    });
}

// Maneja el evento de añadir al carrito
document.addEventListener("click", function(e) {
    if (e.target.closest(".btn-cart")) {
        const btn = e.target.closest(".btn-cart");
        const id = btn.getAttribute("data-id");
        const nombre = btn.getAttribute("data-nombre");
        const precio = parseInt(btn.getAttribute("data-precio"));
        const imagen = btn.getAttribute("data-imagen");
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const item = carrito.find(p => p.id === id);
        if (item) {
            item.cantidad += 1;
        } else {
            carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert('Producto añadido al carrito');
    }
});

document.addEventListener("DOMContentLoaded", renderProductos);
