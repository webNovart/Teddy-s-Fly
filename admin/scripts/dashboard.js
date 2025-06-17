// Proteger el panel
if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html";
}

// --- Unificación de productos (fijos y admin) ---
const personajes = typeof window.personajes !== "undefined" ? window.personajes : [];
const peluches = typeof window.peluches !== "undefined" ? window.peluches : [];
const variedades = typeof window.variedades !== "undefined" ? window.variedades : [];
let products = JSON.parse(localStorage.getItem("products")) || [];
let productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

// Adaptar admin:
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

// Adaptar fijos:
const productosFijos = [
  ...personajes.map(p => ({ ...p, categoria: "personajes", origen: "fijo" })),
  ...peluches.map(p => ({ ...p, categoria: "peluches", origen: "fijo" })),
  ...variedades.map(p => ({ ...p, categoria: "variedades", origen: "fijo" }))
];

// Unir y filtrar ocultos
const productosTotales = [...productosFijos, ...productosAdminAdaptados];
const productosVisibles = productosTotales.filter(p => !productosOcultos.includes(p.id));

// Productos - Agregar
const addProductForm = document.getElementById("addProductForm");
const productList = document.getElementById("productList");

addProductForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const detail = document.getElementById("productDetail").value;
    const price = parseInt(document.getElementById("productPrice").value);
    const categoria = document.getElementById("productCategory").value;
    const imgInput = document.getElementById("productImage");
    const reader = new FileReader();

    reader.onload = function(event) {
        products.push({
            name,
            detail,
            precio: price,
            categoria,
            image: event.target.result,
            id: "admin-" + Math.random().toString(36).slice(2, 10) // id único
        });
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
        addProductForm.reset();
    };

    if (imgInput.files[0]) reader.readAsDataURL(imgInput.files[0]);
};

function renderProducts() {
    if (productosVisibles.length === 0) {
        productList.innerHTML = "<p>No hay productos agregados.</p>";
        return;
    }
    productList.innerHTML = productosVisibles.map((p, i) =>
       `<div>
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
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    if (origen === "admin") {
        products = products.filter(p => p.id !== id && p.name !== id);
        localStorage.setItem("products", JSON.stringify(products));
    } else if (origen === "fijo") {
        if (!productosOcultos.includes(id)) productosOcultos.push(id);
        localStorage.setItem("productosOcultos", JSON.stringify(productosOcultos));
    }
    location.reload();
}

// Novedades
const addNewsForm = document.getElementById("addNewsForm");
const newsList = document.getElementById("newsList");
let news = JSON.parse(localStorage.getItem("news")) || [];

addNewsForm.onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById("newsTitle").value;
    const content = document.getElementById("newsContent").value;
    news.push({ title, content });
    localStorage.setItem("news", JSON.stringify(news));
    renderNews();
    addNewsForm.reset();
};

function renderNews() {
    newsList.innerHTML = news.map((n, i) =>
        `<div>
            <strong>${n.title}</strong><br>
            ${n.content}
        </div>`
    ).join("");
}
renderNews();
