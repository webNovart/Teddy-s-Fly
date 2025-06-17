// Proteger el panel
if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "login.html";
}

// Hacer logout disponible globalmente
function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html";
}

// Productos - Agregar
const addProductForm = document.getElementById("addProductForm");
const productList = document.getElementById("productList");
let products = JSON.parse(localStorage.getItem("products")) || [];
let productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

// Productos fijos (debes definirlos en tu HTML como window.personajes, window.peluches, window.variedades)
const personajes = typeof window.personajes !== "undefined" ? window.personajes : [];
const peluches = typeof window.peluches !== "undefined" ? window.peluches : [];
const variedades = typeof window.variedades !== "undefined" ? window.variedades : [];

addProductForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("productName").value.trim();
    const detail = document.getElementById("productDetail").value.trim();
      // === NUEVO: Descripción larga ===
    const descriptionRaw = document.getElementById("productDescription").value.trim();
    // Convierte saltos de línea en párrafos HTML
    const descripcion = descriptionRaw
      .split(/\n+/)
      .filter(parrafo => parrafo.trim() !== "")
      .map(parrafo => `<p>${parrafo.trim()}</p>`)
      .join("\n");
    const price = parseInt(document.getElementById("productPrice").value);
    const categoria = document.getElementById("productCategory").value;
    const imgInput = document.getElementById("productImage");

    // Validación de campos
    if (!name || !detail || isNaN(price) || !categoria) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (!imgInput.files[0]) {
        alert("Por favor selecciona una imagen para el producto.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        products.push({
            name,
            detail,
            descripcion,
            precio: price,
            categoria,
            image: event.target.result,
            id: "admin-" + Math.random().toString(36).slice(2, 10) // id único
        });
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
        addProductForm.reset();
    };
    reader.onerror = function() {
        alert("Error leyendo la imagen. Prueba con otro archivo.");
    }
    reader.readAsDataURL(imgInput.files[0]);
};

function renderProducts() {
    // Recalcula siempre los arreglos, así SIEMPRE muestra productos nuevos y ocultos
    products = JSON.parse(localStorage.getItem("products")) || [];
    productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

    const productosAdminAdaptados = products.map((p, idx) => ({
        ...p,
        nombre: p.name || "",
        imagen: p.image || "",
        descripcion: p.detail || "",
        precio: p.precio || 0,
        id: p.id || "admin-" + idx,
        categoria: p.categoria || "peluches",
        origen: "admin"
    }));

    const productosFijos = [
        ...personajes.map(p => ({ ...p, categoria: "personajes", origen: "fijo" })),
        ...peluches.map(p => ({ ...p, categoria: "peluches", origen: "fijo" })),
        ...variedades.map(p => ({ ...p, categoria: "variedades", origen: "fijo" }))
    ];

    const productosTotales = [...productosFijos, ...productosAdminAdaptados];
    const productosVisibles = productosTotales.filter(p => !productosOcultos.includes(p.id));

    if (productosVisibles.length === 0) {
        productList.innerHTML = "<p>No hay productos agregados.</p>";
        return;
    }
    productList.innerHTML = productosVisibles.map((p, i) =>
       `<div class="admin-item">
            <img src="${p.imagen}" alt="Producto" width="100"><br>
            <strong>${p.nombre}</strong><br>
            <span>Categoría: ${p.categoria}</span><br>
            <span>Precio: $${p.precio.toLocaleString('es-CO')}</span><br>
            ${p.descripcion}<br>
            <button onclick="deleteProduct('${p.id}', '${p.origen}')" style="background:var(--color-corazon);color:white;padding:0.2em 1em;border-radius:10px;border:none;cursor:pointer;margin-top:8px;">Eliminar</button>
        </div>`
    ).join("");
}
renderProducts();

// Eliminar producto (admin o fijo)
window.deleteProduct = function(id, origen) {
    products = JSON.parse(localStorage.getItem("products")) || [];
    productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    if (origen === "admin") {
        products = products.filter(p => p.id !== id && p.name !== id);
        localStorage.setItem("products", JSON.stringify(products));
    } else if (origen === "fijo") {
        if (!productosOcultos.includes(id)) productosOcultos.push(id);
        localStorage.setItem("productosOcultos", JSON.stringify(productosOcultos));
    }
    renderProducts();
}

// Novedades
const addNewsForm = document.getElementById("addNewsForm");
const newsList = document.getElementById("newsList");
let news = JSON.parse(localStorage.getItem("news")) || [];

addNewsForm.onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById("newsTitle").value.trim();
    const content = document.getElementById("newsContent").value.trim();
    if (!title || !content) {
        alert("Completa ambos campos de novedades.");
        return;
    }
    news.push({ title, content });
    localStorage.setItem("news", JSON.stringify(news));
    renderNews();
    addNewsForm.reset();
};

function renderNews() {
    news = JSON.parse(localStorage.getItem("news")) || [];
    newsList.innerHTML = news.map((n, i) =>
        `<div>
            <strong>${n.title}</strong><br>
            ${n.content}
        </div>`
    ).join("");
}
renderNews();
