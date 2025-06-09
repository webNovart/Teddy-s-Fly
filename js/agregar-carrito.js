// Script para agregar productos al carrito y guardarlos en localStorage
// Debes enlazar este archivo en tu tienda y en cada página que tenga botones de agregar al carrito

// Busca todos los botones para agregar al carrito
document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        // Extrae los datos del producto desde los data-atributos del botón
        const producto = {
            id: btn.dataset.id,
            nombre: btn.dataset.nombre,
            precio: parseFloat(btn.dataset.precio),
            imagen: btn.dataset.imagen,
            cantidad: 1
        };

        // Obtiene el carrito actual o crea uno vacío
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verifica si el producto ya existe en el carrito
        const existente = carrito.find(p => p.id === producto.id);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push(producto);
        }

        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualiza el contador visual del carrito si existe
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            // Suma todas las cantidades de productos en el carrito
            const total = carrito.reduce((suma, prod) => suma + prod.cantidad, 0);
            cartCount.textContent = total;
        }
    });
});
