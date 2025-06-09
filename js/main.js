// Marcar menú activo según página
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if(link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Simula incremento del carrito
    const cartButtons = document.querySelectorAll('.btn-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    cartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
        });
    });

    // Buscador (sólo efecto visual demo)
    document.querySelector('.search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Función de búsqueda en desarrollo');
    });

    // Galería de producto (cambia imagen principal)
    const mainImg = document.querySelector('.galeria img');
    const thumbs = document.querySelectorAll('.galeria-miniaturas img');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            if(mainImg) mainImg.src = thumb.src;
        });
    });
});
// ...código anterior...

// Animación burbujas flotantes (ejemplo sutil)
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('mouseenter', () => {
        bubble.style.boxShadow = "0 8px 32px rgba(51,204,255,0.22)";
    });
    bubble.addEventListener('mouseleave', () => {
        bubble.style.boxShadow = "0 6px 24px rgba(51,204,255,0.20)";
    });
});
