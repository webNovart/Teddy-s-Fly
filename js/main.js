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
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('#busqueda-productos');
  const productos = document.querySelectorAll('.producto-card');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      filtrarProductos();
    });

    // Si quieres buscar mientras se escribe, descomenta la siguiente línea:
    // searchInput.addEventListener('input', filtrarProductos);

    function filtrarProductos() {
      const texto = searchInput.value.trim().toLowerCase();
      productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        if (nombre.includes(texto)) {
          producto.style.display = '';
        } else {
          producto.style.display = 'none';
        }
      });
    }
  }
});
// ------- FLECHITA SUBIR ARRIBA --------
document.addEventListener('DOMContentLoaded', function() {
  const btnScrollTop = document.getElementById("btnScrollTop");
  if (!btnScrollTop) return; // Si no existe el botón, no hace nada

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      btnScrollTop.style.display = "flex";
    } else {
      btnScrollTop.style.display = "none";
    }
  });

  btnScrollTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// Para index.html
function mostrarNovedadesEnInicio() {
    const news = JSON.parse(localStorage.getItem("news")) || [];
    const contenedor = document.getElementById("inicio-novedades");
    if (!contenedor) return;

    if (news.length === 0) {
        contenedor.innerHTML = "<div style='text-align:center; width:100%'><h3>PRÓXIMAMENTE</h3></div>";
        return;
    }
    contenedor.innerHTML = news.map(n =>
        `<div class="producto-card">
            <img src="${n.image}" alt="${n.title}">
            <span class="tag-nuevo" style="background:#FFD900; color:#333;">Novedad</span>
            <h3>${n.title}</h3>
            <p>${n.description}</p>
        </div>`
    ).join("");
}
mostrarNovedadesEnInicio();

// Para novedades.html (usa el id de la sección ahí, ej: 'novedades-listado')
function mostrarNovedadesEnPagina() {
    const news = JSON.parse(localStorage.getItem("news")) || [];
    const contenedor = document.getElementById("novedades-listado");
    if (!contenedor) return;

    if (news.length === 0) {
        contenedor.innerHTML = "<div style='text-align:center; width:100%'><h3>PRÓXIMAMENTE</h3></div>";
        return;
    }
    contenedor.innerHTML = news.map(n =>
        `<div class="producto-card">
            <img src="${n.image}" alt="${n.title}">
            <span class="tag-nuevo" style="background:#FFD900; color:#333;">Novedad</span>
            <h3>${n.title}</h3>
            <p>${n.description}</p>
        </div>`
    ).join("");
}
mostrarNovedadesEnPagina();
