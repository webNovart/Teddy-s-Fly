const peluches = [

  
];

const personajes = [ 

  ];

const variedades = [
  
  
];

// ---- Renderizado por sección ----
function renderProductos(lista, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    // Filtra productos válidos: deben tener nombre, imagen y precio
    const productosValidos = lista.filter(
        p => p && p.nombre && p.imagen && typeof p.precio !== "undefined"
    );
    if (!productosValidos.length) {
        grid.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }
    productosValidos.forEach(producto => {
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
  const seccion = grid.closest('.seccion-productos');
    if (seccion) {
        seccion.style.display = productosValidos.length > 0 ? "" : "none";
    }
}

// ---- Carrito ----
document.addEventListener("click", function(e) {
    const btn = e.target.closest(".btn-cart");
    if (btn) {
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
        // Actualiza el contador visual (total unidades en el carrito)
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let totalUnidades = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
            cartCount.textContent = totalUnidades;
        }
        alert('Producto añadido al carrito');
    }
});

// ---- Buscador Global ----
const inputBusqueda = document.getElementById('busqueda-productos');
const formBusqueda = document.querySelector('.search-form');

// Si no existe alguna sección, que sea array vacío
const personajesArray = typeof personajes !== "undefined" ? personajes : [];
const peluchesArray = typeof peluches !== "undefined" ? peluches : [];
const variedadesArray = typeof variedades !== "undefined" ? variedades : [];

// --- Filtrar productos ocultos (eliminados desde el panel admin localmente) ---
let productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

function filtraOcultos(arr) {
    return arr.filter(p => !productosOcultos.includes(p.id));
}

// Función para renderizar y filtrar según la categoría
function inicializarVista(personajesArr, peluchesArr, variedadesArr) {
    // Actualiza contador carrito al cargar
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let totalUnidades = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
        cartCount.textContent = totalUnidades;
    }

    // Mostrar por categoría
    const cat = getCategoriaURL();

    if (cat === "personajes") {
        renderProductos(personajesArr, "grid-personajes");
        document.getElementById("seccion-personajes").style.display = "";
        document.getElementById("seccion-peluches").style.display = "none";
        document.getElementById("seccion-variedades").style.display = "none";
        document.getElementById("seccion-personajes").scrollIntoView({behavior: "smooth"});
    } else if (cat === "peluches") {
        renderProductos(peluchesArr, "grid-peluches");
        document.getElementById("seccion-personajes").style.display = "none";
        document.getElementById("seccion-peluches").style.display = "";
        document.getElementById("seccion-variedades").style.display = "none";
        document.getElementById("seccion-peluches").scrollIntoView({behavior: "smooth"});
    } else if (cat === "variedades") {
        renderProductos(variedadesArr, "grid-variedades");
        document.getElementById("seccion-personajes").style.display = "none";
        document.getElementById("seccion-peluches").style.display = "none";
        document.getElementById("seccion-variedades").style.display = "";
        document.getElementById("seccion-variedades").scrollIntoView({behavior: "smooth"});
    } else {
        document.getElementById("seccion-personajes").style.display = "";
        document.getElementById("seccion-peluches").style.display = "";
        document.getElementById("seccion-variedades").style.display = "";
        renderProductos(personajesArr, "grid-personajes");
        renderProductos(peluchesArr, "grid-peluches");
        renderProductos(variedadesArr, "grid-variedades");
    }
}

// ---- Buscador adaptado ----
function filtrarProductos(texto, personajesArr, peluchesArr, variedadesArr) {
    texto = texto.trim().toLowerCase();
    const productosTotales = [
        ...personajesArr,
        ...peluchesArr,
        ...variedadesArr
    ].filter(producto => producto && producto.nombre); // Evita productos vacíos

    const filtrados = productosTotales.filter(producto =>
        producto.nombre.toLowerCase().includes(texto) ||
        (producto.descripcionCorta && producto.descripcionCorta.toLowerCase().includes(texto)) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(texto))
    );

    renderProductos(
        filtrados.filter(p => p.__seccion === "personajes"),
        "grid-personajes"
    );
    renderProductos(
        filtrados.filter(p => p.__seccion === "peluches"),
        "grid-peluches"
    );
    renderProductos(
        filtrados.filter(p => p.__seccion === "variedades"),
        "grid-variedades"
    );
}
// ---- Inicializar: MOSTRAR CATEGORÍA O TODO ----
function getCategoriaURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat');
}

// ---- CARGAR PRODUCTOS DE FIRESTORE + FIJOS ----
document.addEventListener("DOMContentLoaded", function() {
    // Copias de los arrays para combinar fijos y Firestore
   let personajesArrayFull = filtraOcultos(personajesArray.slice()).map(p => ({...p, __seccion: "personajes"}));
    let peluchesArrayFull = filtraOcultos(peluchesArray.slice()).map(p => ({...p, __seccion: "peluches"}));
    let variedadesArrayFull = filtraOcultos(variedadesArray.slice()).map(p => ({...p, __seccion: "variedades"}));
    // 1. Carga productos Firestore y agrégalos según categoría
    if (typeof db !== "undefined") {
        db.collection("productos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const p = doc.data();
                // Usa el campo p.id (slug) si existe, si no, usa doc.id (compatibilidad productos viejos)
                const adaptado = {
                    ...p,
                    __seccion: p.categoria,
                    imagen: p.image,
                    nombre: p.name,
                    descripcion: p.detail || "",
                    precio: p.precio || 0,
                    id: p.id ? p.id : doc.id
                };
                if (p.categoria === "personajes") personajesArrayFull.push(adaptado);
                if (p.categoria === "peluches") peluchesArrayFull.push(adaptado);
                if (p.categoria === "variedades") variedadesArrayFull.push(adaptado);
            });

            // Ahora sí, renderiza con todos los productos (fijos + Firestore)
            inicializarVista(personajesArrayFull, peluchesArrayFull, variedadesArrayFull);

            // Buscador global con todos los productos
            if (formBusqueda && inputBusqueda) {
                formBusqueda.addEventListener('submit', function(e) {
                    e.preventDefault();
                    filtrarProductos(inputBusqueda.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
                });
                inputBusqueda.addEventListener('input', function() {
                    filtrarProductos(this.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
                });
            }
        });
    } else {
        // Si no hay db (por algún error), muestra solo los fijos
        inicializarVista(personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
        if (formBusqueda && inputBusqueda) {
            formBusqueda.addEventListener('submit', function(e) {
                e.preventDefault();
                filtrarProductos(inputBusqueda.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
            });
            inputBusqueda.addEventListener('input', function() {
                filtrarProductos(this.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
            });
        }
    }
});
