const productos = [
    {
        id: "1",
        nombre: "Peluche Osito Viajero",
        precio: 29900,
        imagen: "assets/img/peluche-nuevo.jpg"
    },
    {
        id: "2",
        nombre: "Peluche Pikachu",
        precio: 34900,
        imagen: "assets/img/peluche-pikachu.jpg"
    },
    { id: "13", nombre: "Peluche Minion Kevin", precio: 32000, imagen: "assets/img/peluche-minion-kevin.jpg" },
    { id: "14", nombre: "Peluche Minion Stuart", precio: 32000, imagen: "assets/img/peluche-minion-stuart.jpg" },
    { id: "15", nombre: "Peluche Minion Bob", precio: 32000, imagen: "assets/img/peluche-minion-bob.jpg" },
    { id: "16", nombre: "Peluche Stitch Azul", precio: 34000, imagen: "assets/img/peluche-stitch-azul.jpg" },
    { id: "17", nombre: "Peluche Stitch Rosa", precio: 34000, imagen: "assets/img/peluche-stitch-rosa.jpg" },
    { id: "18", nombre: "Peluche Stitch Morado", precio: 34000, imagen: "assets/img/peluche-stitch-morado.jpg" },
    { id: "19", nombre: "Peluche Carl Fredricksen (Up)", precio: 37000, imagen: "assets/img/peluche-carl-up.jpg" },
    { id: "20", nombre: "Peluche Russell (Up)", precio: 37000, imagen: "assets/img/peluche-russell-up.jpg" },
    { id: "21", nombre: "Peluche Chimuelo", precio: 35000, imagen: "assets/img/peluche-chimuelo.jpg" },
    { id: "22", nombre: "Peluche Tom (Tom y Jerry)", precio: 32000, imagen: "assets/img/peluche-tom.jpg" },
    { id: "23", nombre: "Peluche Jerry (Tom y Jerry)", precio: 32000, imagen: "assets/img/peluche-jerry.jpg" },
    { id: "24", nombre: "Peluche Pantera Rosa", precio: 33000, imagen: "assets/img/peluche-pantera-rosa.jpg" },
    { id: "25", nombre: "Peluche Elefante Azul", precio: 31000, imagen: "assets/img/peluche-elefante-azul.jpg" },
    { id: "26", nombre: "Peluche Elefante Rosa", precio: 31000, imagen: "assets/img/peluche-elefante-rosa.jpg" },
    { id: "27", nombre: "Peluche Elefante Amarillo", precio: 31000, imagen: "assets/img/peluche-elefante-amarillo.jpg" },
    { id: "28", nombre: "Peluche Chase (Paw Patrol)", precio: 33500, imagen: "assets/img/peluche-chase.jpg" },
    { id: "29", nombre: "Peluche Marshall (Paw Patrol)", precio: 33500, imagen: "assets/img/peluche-marshall.jpg" },
    { id: "30", nombre: "Peluche Skye (Paw Patrol)", precio: 33500, imagen: "assets/img/peluche-skye.jpg" },
    { id: "31", nombre: "Peluche Hello Kitty Clásica", precio: 35000, imagen: "assets/img/peluche-hello-kitty.jpg" },
    { id: "32", nombre: "Peluche Hello Kitty Rosa", precio: 35000, imagen: "assets/img/peluche-hello-kitty-rosa.jpg" },
    { id: "33", nombre: "Peluche Mario", precio: 37000, imagen: "assets/img/peluche-mario.jpg" },
    { id: "34", nombre: "Peluche Luigi", precio: 37000, imagen: "assets/img/peluche-luigi.jpg" },
    { id: "35", nombre: "Peluche Tigre Naranja", precio: 32000, imagen: "assets/img/peluche-tigre-naranja.jpg" },
    { id: "36", nombre: "Peluche Tigre Blanco", precio: 32000, imagen: "assets/img/peluche-tigre-blanco.jpg" },
    { id: "37", nombre: "Peluche Sonic", precio: 36000, imagen: "assets/img/peluche-sonic.jpg" },
    { id: "38", nombre: "Peluche Tails", precio: 34000, imagen: "assets/img/peluche-tails.jpg" },
    { id: "39", nombre: "Peluche Peppa Pig", precio: 32000, imagen: "assets/img/peluche-peppa.jpg" },
    { id: "40", nombre: "Peluche George Pig", precio: 32000, imagen: "assets/img/peluche-george.jpg" },
    { id: "41", nombre: "Peluche Scooby Doo", precio: 34000, imagen: "assets/img/peluche-scooby.jpg" },
    { id: "42", nombre: "Peluche Garfield", precio: 35000, imagen: "assets/img/peluche-garfield.jpg" },
    { id: "43", nombre: "Peluche Snoopy", precio: 34000, imagen: "assets/img/peluche-snoopy.jpg" },
    { id: "44", nombre: "Peluche Charlie Brown", precio: 34000, imagen: "assets/img/peluche-charliebrown.jpg" },
    { id: "45", nombre: "Peluche Patricio (Bob Esponja)", precio: 34000, imagen: "assets/img/peluche-patricio.jpg" },
    { id: "46", nombre: "Peluche Bob Esponja", precio: 34000, imagen: "assets/img/peluche-bobesponja.jpg" },
    { id: "47", nombre: "Peluche Pato Lucas", precio: 32000, imagen: "assets/img/peluche-lucas.jpg" },
    { id: "48", nombre: "Peluche Bugs Bunny", precio: 34000, imagen: "assets/img/peluche-bugs.jpg" },
    { id: "49", nombre: "Peluche Lola Bunny", precio: 34000, imagen: "assets/img/peluche-lola.jpg" },
    { id: "50", nombre: "Peluche Woody (Toy Story)", precio: 36000, imagen: "assets/img/peluche-woody.jpg" },
    { id: "51", nombre: "Peluche Buzz Lightyear (Toy Story)", precio: 36000, imagen: "assets/img/peluche-buzz.jpg" },
    { id: "52", nombre: "Peluche Olaf (Frozen)", precio: 35000, imagen: "assets/img/peluche-olaf.jpg" }
];

// Render dinámico de los productos
function renderProductos() {
    const grid = document.getElementById("productos-grid");
    grid.innerHTML = "";
    productos.forEach(producto => {
        grid.innerHTML += `
        <div class="producto-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toLocaleString()}</p>
            <a href="producto.html?id=${producto.id}" class="btn-secondary">Ver Detalles</a>
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
document.addEventListener("DOMContentLoaded", renderProductos);
