// Proteger el panel
if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html";
}

// Productos
const addProductForm = document.getElementById("addProductForm");
const productList = document.getElementById("productList");
let products = JSON.parse(localStorage.getItem("products")) || [];

addProductForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const detail = document.getElementById("productDetail").value;
    const imgInput = document.getElementById("productImage");
    const reader = new FileReader();

    reader.onload = function(event) {
        products.push({ name, detail, image: event.target.result });
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
        addProductForm.reset();
    };

    if (imgInput.files[0]) reader.readAsDataURL(imgInput.files[0]);
};

function renderProducts() {
    productList.innerHTML = products.map((p, i) =>
        `<div>
            <img src="${p.image}" alt="Producto" width="100"><br>
            <strong>${p.name}</strong><br>
            ${p.detail}
        </div>`
    ).join("");
}
renderProducts();

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
