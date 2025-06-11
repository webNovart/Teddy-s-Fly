const productos = [
  {
    id: "FP1226",
    nombre: "Llavero Burro 12cm Azul",
    precio: 10500,
    imagen: "imagenes/FP1226-3.jpeg",
    descripcion: "Llavero de burro azul, compacto y divertido."
  },
  {
    id: "LLA-Mat-MORADO",
    nombre: "Llavero Matera Dino 10cm Morado",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: "Llavero matera dino en color morado. Ideal para regalar."
  },
  {
    id: "LLA-Mat-VERDE",
    nombre: "Llavero Matera Dino 10cm Verde",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-2.jpeg",
    descripcion: "Llavero matera dino en color verde, perfecto para los amantes de las plantas."
  },
  {
    id: "LLA-Mat-AZUL-OSCURO",
    nombre: "Llavero Matera Dino 10cm Azul Oscuro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: "Llavero matera dino en azul oscuro, un accesorio único."
  },
  {
    id: "LLA-Din-NARANJA",
    nombre: "Llavero Dino 12cm Naranja",
    precio: 12500,
    imagen: "imagenes/LLA-Din-1.jpeg",
    descripcion: "Llavero de dinosaurio naranja, suave y llamativo."
  },
  {
    id: "LLA-Din-MORADO",
    nombre: "Llavero Dino 12cm Morado",
    precio: 12500,
    imagen: "imagenes/LLA-Din-2.jpeg",
    descripcion: "Llavero de dinosaurio morado, perfecto para mochilas."
  },
  {
    id: "LLA-Din-VERDE",
    nombre: "Llavero Dino 12cm Verde",
    precio: 12500,
    imagen: "imagenes/LLA-Din-3.jpeg",
    descripcion: "Llavero dinosaurio verde, ideal para niños y niñas."
  },
  {
    id: "LLA-Din-COLORES",
    nombre: "Llavero Dino 12cm Colores",
    precio: 12500,
    imagen: "imagenes/LLA-Din-4.jpeg",
    descripcion: "Llavero de dinosaurio en varios colores, colección divertida."
  },
  {
    id: "Eco-Sur-PANDA",
    nombre: "Peluche Económico Pequeño 15cm Panda",
    precio: 13000,
    imagen: "imagenes/WhatsApp-Image-2025-05-16-at-5.13.13-PM.jpeg",
    descripcion: "Peluche panda económico, pequeño y adorable."
  },
  {
    id: "1030-17-MEL",
    nombre: "Perro Pets Mel 25cm",
    precio: 15000,
    imagen: "imagenes/1030-17.jpeg",
    descripcion: "Peluche de perro 'Pets Mel' de 25cm, suave y amigable."
  },
  {
    id: "j300-21-OSO",
    nombre: "Osos Peludos Pequeños 20cm",
    precio: 16500,
    imagen: "imagenes/WhatsApp-Image-2025-05-08-at-5.29.43-PM.jpeg",
    descripcion: "Peluche de oso peludo pequeño, ideal para regalar."
  },
  {
    id: "FLOS-1523-GRIS",
    nombre: "Oso Corazón y Rosa 20cm Gris",
    precio: 17500,
    imagen: "imagenes/flos-1523-1.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color gris."
  },
  {
    id: "FLOS-1523-BEIGE",
    nombre: "Oso Corazón y Rosa 20cm Beige",
    precio: 17500,
    imagen: "imagenes/flos-1523-3.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color beige."
  },
  {
    id: "FLOS-1523-CAFE",
    nombre: "Oso Corazón y Rosa 20cm Café",
    precio: 17500,
    imagen: "imagenes/flos-1523-2.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color café."
  },
  {
    id: "uni-2023-ROSA",
    nombre: "Unicornio Estrellitas 22cm Rosa",
    precio: 19000,
    imagen: "imagenes/uni-2023-1.jpeg",
    descripcion: "Unicornio de peluche rosa con estrellitas."
  },
  {
    id: "uni-2023-BLANCO",
    nombre: "Unicornio Estrellitas 22cm Blanco",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: "Unicornio blanco con estrellitas, suave y tierno."
  },
  {
    id: "uni-2023-MORADO",
    nombre: "Unicornio Estrellitas 22cm Morado",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: "Unicornio morado con estrellitas, perfecto para decorar."
  },
  {
    id: "Leon-p",
    nombre: "León Pequeño 15cm",
    precio: 20000,
    imagen: "imagenes/leon-p-1536x1536.jpeg",
    descripcion: "Peluche de leoncito pequeño, suave y adorable."
  },
  {
    id: "A019-COCODRILO",
    nombre: "Zoológico Cabezón 20cm Cocodrilo",
    precio: 20500,
    imagen: "imagenes/A019-2.jpeg",
    descripcion: "Peluche cocodrilo cabezón de 20cm, divertido y coleccionable."
  },
  {
    id: "A019-OVEJA",
    nombre: "Zoológico Cabezón 20cm Oveja",
    precio: 20500,
    imagen: "imagenes/A019-3.jpeg",
    descripcion: "Peluche oveja cabezona, tierna y esponjosa."
  },
  {
    id: "2591-ROSA",
    nombre: "Cerdo Disfrazado ROSA 25cm",
    precio: 23500,
    imagen: "imagenes/2591-ROSA.jpeg",
    descripcion: "Cerdito disfrazado rosa de 25cm, divertido y suave."
  },
    {
    id: "bg9-20-BLANCO",
    nombre: "Gato Corazón 25cm Blanco",
    precio: 27000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-4.31.41-PM.jpeg",
    descripcion: "Gato de peluche con corazón, color blanco, tamaño 25cm."
  },
  {
    id: "1896-CAFE",
    nombre: "León Pequeño Melena CAFÉ 19cm",
    precio: 28000,
    imagen: "imagenes/1896-peque.jpeg",
    descripcion: "León de peluche pequeño con melena café, suave y tierno."
  },
  {
    id: "BDHSQ-20-AMARILLO",
    nombre: "Siberiano Camisa 25cm AMARILLO",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-2.jpeg",
    descripcion: "Peluche siberiano con camisa amarilla, tamaño 25cm."
  },
  {
    id: "BDHSQ-20-ROSA",
    nombre: "Siberiano Camisa 25cm ROSA",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-1.jpeg",
    descripcion: "Peluche siberiano con camisa rosa, tamaño 25cm."
  },
  {
    id: "BDHSQ-20-VERDE",
    nombre: "Siberiano Camisa 25cm VERDE",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20.jpeg",
    descripcion: "Peluche siberiano con camisa verde, tamaño 25cm."
  },
  {
    id: "1289-30",
    nombre: "Panda Acostado 30cm",
    precio: 28000,
    imagen: "imagenes/1289-30.jpeg",
    descripcion: "Panda de peluche acostado, tamaño 30cm, suave y adorable."
  },
  {
    id: "lx-20",
    nombre: "Oso Arlequín 25cm",
    precio: 28500,
    imagen: "imagenes/WhatsApp-Image-2025-05-14-at-11.54.40-AM.jpeg",
    descripcion: "Oso arlequín de peluche, colorido y divertido, tamaño 25cm."
  },
  {
    id: "1925-MINEGATO",
    nombre: "Personajes MI NEGO 33cm",
    precio: 29000,
    imagen: "imagenes/1925.jpeg",
    descripcion: "Peluche personaje MI NEGO, tamaño 33cm, suave y colorido."
  },
  {
    id: "1925-MAGO",
    nombre: "Personajes MI NEGO MAGO 33cm",
    precio: 29000,
    imagen: "imagenes/1925-MAGO.jpeg",
    descripcion: "Peluche personaje MI NEGO versión mago, tamaño 33cm."
  },
  {
    id: "2220A",
    nombre: "Viejita Mediana 30cm",
    precio: 29500,
    imagen: "imagenes/2220A.jpeg",
    descripcion: "Peluche de viejita mediana, tamaño 30cm, simpática y tradicional."
  },
  {
    id: "1925-MUNECA TRAPO",
    nombre: "Personajes MI NEGO MUÑECA DE TRAPO 33cm",
    precio: 29000,
    imagen: "imagenes/1925.jpeg",
    descripcion: "Peluche personaje MI NEGO tipo muñeca de trapo, tamaño 33cm."
  },
  {
    id: "SUR05-30-SURTIDOS",
    nombre: "Peluche Elástico Mediano Animales Surtidos 30cm",
    precio: 32000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-3.07.28-PM.jpeg",
    descripcion: "Peluche elástico mediano de animales surtidos, tamaño 30cm."
  },
  {
    id: "1881-23-OSCURO",
    nombre: "Gorila Pequeño Oscuro 25cm",
    precio: 30000,
    imagen: "imagenes/1881-23-2.jpeg",
    descripcion: "Gorila de peluche pequeño, color oscuro, tamaño 25cm."
  },
  {
    id: "ele-30-MORADO",
    nombre: "Elefante Ojos Bordados 25cm MORADO",
    precio: 32500,
    imagen: "imagenes/yf1-60-2.jpeg",
    descripcion: "Elefante de peluche color morado, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-AZUL",
    nombre: "Elefante Ojos Bordados 25cm AZUL",
    precio: 32500,
    imagen: "imagenes/ELE0003-5.jpeg",
    descripcion: "Elefante de peluche azul, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-ROSA",
    nombre: "Elefante Ojos Bordados 25cm ROSA",
    precio: 32500,
    imagen: "imagenes/ELE0003-4.jpeg",
    descripcion: "Elefante de peluche rosa, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-AZUL",
    nombre: "Elefante Ojos Bordados 25cm AZUL",
    precio: 32500,
    imagen: "imagenes/ELE0003-5.jpeg",
    descripcion: "Elefante de peluche azul, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-AMARILLO",
    nombre: "Elefante Ojos Bordados 25cm AMARILLO",
    precio: 32500,
    imagen: "imagenes/ELE0003-3.jpeg",
    descripcion: "Elefante de peluche amarillo, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-VERDE",
    nombre: "Elefante Ojos Bordados 25cm VERDE",
    precio: 32500,
    imagen: "imagenes/ELE0003-2.jpeg",
    descripcion: "Elefante de peluche verde, ojos bordados, tamaño 25cm."
  },
  {
    id: "1043-40",
    nombre: "Panda Vestido 40cm",
    precio: 59000,
    imagen: "imagenes/1043-40.jpeg",
    descripcion: "Panda de peluche vestido, tamaño 40cm, suave y adorable."
  },
  {
    id: "2301-40",
    nombre: "Panda Overol 40cm",
    precio: 59000,
    imagen: "imagenes/2301-40.jpeg",
    descripcion: "Panda de peluche con overol, tamaño 40cm, divertido y tierno."
  },
    {
  id: "JE-59-GRIS",
  nombre: "Animalito que respira (No incluye pilas) 26cm GRIS",
  precio: 65000,
  imagen: "imagenes/JE-59-1.jpeg",
  descripcion: "Peluche animalito que respira color gris de 26cm (no incluye pilas). Realista, suave y reconfortante para niños y adultos. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-AZUL",
  nombre: "Animalito que respira (No incluye pilas) 26cm AZUL",
  precio: 65000,
  imagen: "imagenes/JE-59-4.jpeg",
  descripcion: "Peluche animalito que respira color azul de 26cm (no incluye pilas). Suave, tierno y perfecto como compañía para niños pequeños. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-MARRON",
  nombre: "Animalito que respira (No incluye pilas) 26cm MARRON",
  precio: 65000,
  imagen: "imagenes/JE-59-3.jpeg",
  descripcion: "Peluche animalito que respira color marrón de 26cm (no incluye pilas). Especial para reconfortar y acompañar en la hora de dormir. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-CAFE",
  nombre: "Animalito que respira (No incluye pilas) 26cm CAFE",
  precio: 65000,
  imagen: "imagenes/JE-59-2.jpeg",
  descripcion: "Peluche animalito que respira color café de 26cm (no incluye pilas). Realista, suave y adorable para acompañar a los más pequeños. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "2587",
  nombre: "Vaca con Bolso 40cm",
  precio: 46000,
  imagen: "imagenes/2587.jpeg",
  descripcion: "Peluche de vaca con bolso, de gran tamaño y detalles encantadores. Ideal para abrazar, decorar o regalar en ocasiones especiales. Material: Felpa antialérgica. Tamaño: 40 cm."
},
{
  id: "2332-40",
  nombre: "Panda Camisa Roja 45cm",
  precio: 61000,
  imagen: "imagenes/2332-40.jpeg",
  descripcion: "Peluche de panda con camisa roja, adorable y esponjoso. Un detalle especial para decorar o regalar a los amantes de los pandas. Material: Felpa antialérgica. Tamaño: 45 cm."
},
{
  id: "HUO-30-ROSA",
  nombre: "Dino Huevo 33cm Rosa",
  precio: 63000,
  imagen: "imagenes/HUO-30-2.jpeg",
  descripcion: "Peluche de dinosaurio saliendo del huevo, en color rosa. Original y divertido, ideal para regalar a los pequeños amantes de los dinosaurios. Material: Felpa antialérgica. Tamaño: 33 cm."
},
{
  id: "GS282-60",
  nombre: "Mico Buso Grande 60cm",
  precio: 68500,
  imagen: "imagenes/GS282-60.jpeg",
  descripcion: "Peluche de mico (mono) con buso grande, suave y llamativo. Un regalo excelente para sorprender y abrazar. Material: Felpa antialérgica. Tamaño: 60 cm."
},
{
  id: "GS377-40-45CM",
  nombre: "Mono Bolso Banana 45cm",
  precio: 69500,
  imagen: "imagenes/GS377-40 (1).jpeg",
  descripcion: "Peluche de mono con bolso en forma de banana, tamaño mediano. Divertido, suave y perfecto para regalar o decorar. Material: Felpa antialérgica. Tamaño: 45 cm."
},
{
  id: "821-l",
  nombre: "Elefante Luminosa con Cobija 60cm",
  precio: 98000,
  imagen: "imagenes/821-1.jpg",
  descripcion: "Peluche de elefante luminosa, incluye cobija. Brilla en la oscuridad y aporta calidez y ternura a cualquier espacio. Material: Felpa antialérgica. Tamaño: 60 cm."
},
{
  id: "JE-68",
  nombre: "Oso Bufanda Love 75cm",
  precio: 148000,
  imagen: "imagenes/je-68.jpeg",
  descripcion: "Peluche de oso gigante con bufanda 'Love', tierno y espectacular para regalar en ocasiones especiales. Tamaño: 75 cm."
},
{
  id: "JE-73-ROSA",
  nombre: "Oso Gigantísimo 135cm Rosa",
  precio: 416500,
  imagen: "imagenes/Je-73-2.jpeg",
  descripcion: "Peluche de oso gigante en color rosa, el más grande y espectacular de todos. Sorprende con este regalo inolvidable, ideal para ocasiones especiales. Tamaño: 135 cm."
},
{
  id: "BL-389-43-MORADO",
  nombre: "Unicornio Ojitos 40cm MORADO",
  precio: 31500,
  imagen: "imagenes/bl-398-43-1.jpeg",
  descripcion: "Peluche unicornio de 40cm color morado, con ojitos grandes y brillantes. Encantador para decorar habitaciones infantiles."
},
{
  id: "BL-389-43-ROSA",
  nombre: "Unicornio Ojitos 40cm ROSA",
  precio: 31500,
  imagen: "imagenes/bl-398-43-2.jpeg",
  descripcion: "Peluche unicornio de 40cm color rosa, con ojitos grandes y brillantes. Perfecto para regalar o coleccionar."
},
{
  id: "Sur05-30-GANZO",
  nombre: "Peluche elástico mediano GANZO 30cm",
  precio: 32000,
  imagen: "imagenes/sur05-30-9.jpeg",
  descripcion: "Peluche elástico mediano en forma de ganzo, divertido y suave. Ideal para juegos y decoración. Tamaño: 30 cm."
},
{
  id: "Sur05-30-UNICORNIO",
  nombre: "Peluche elástico mediano 30cm UNICORNIO",
  precio: 32000,
  imagen: "imagenes/sur05-30-19.jpeg",
  descripcion: "Peluche elástico mediano de unicornio de 30cm, colorido y suave, perfecto para inspirar la imaginación de los niños."
},
{
  id: "Sur05-30-OJITOS",
  nombre: "Peluche elástico mediano 30cm Cojín OJITOS",
  precio: 32000,
  imagen: "imagenes/sur05-30-8.jpeg",
  descripcion: "Peluche elástico mediano en forma de cojín con ojitos de 30cm. Suave y perfecto para descansar o decorar la cama."
},
{
  id: "BLM-098",
  nombre: "Oso con bordado 55cm",
  precio: 68000,
  imagen: "imagenes/BLM-098.jpeg",
  descripcion: "Oso de peluche con bordado, tamaño grande 55cm. Suave, elegante y especial para regalos importantes o decoración destacada."
},
{
  id: "J192-32-NARANJA",
  nombre: "Leon Despeluque 35cm NARANJA",
  precio: 68500,
  imagen: "imagenes/j192-32-2.jpeg",
  descripcion: "León despelucado naranja de 35cm. Muy divertido, original y de pelo esponjado. Ideal para destacar en tu colección."
},
{
  id: "J192-32-ROSA",
  nombre: "Leon Despeluque 35cm ROSA",
  precio: 68500,
  imagen: "imagenes/j192-32-3 (2).jpeg",
  descripcion: "León despelucado rosa de 35cm. Muy suave, llamativo y con peinado alocado. Perfecto para regalar o decorar el cuarto."
},
{
  id: "J192-32-CAFE",
  nombre: "León Despeluque 35cm CAFE",
  precio: 68500,
  imagen: "imagenes/j192-32-1.jpeg",
  descripcion: "León despelucado café de 35cm. Pelo esponjoso, muy suave y divertido. Perfecto para decorar y regalar."
},
{
  id: "XTIG-50-LEONBLANCO",
  nombre: "Tigre Acostado 50cm LEON BLANCO",
  precio: 76000,
  imagen: "imagenes/xtig-50-1.jpeg",
  descripcion: "Tigre acostado 50cm, versión león blanco. Grande, suave y de detalles realistas. Ideal para destacar en la decoración o para niños grandes."
},
{
  id: "XTIG-50-PUMA",
  nombre: "Tigre Acostado 50cm PUMA",
  precio: 76000,
  imagen: "imagenes/xtig-50-3.jpeg",
  descripcion: "Tigre acostado 50cm versión puma. Suave, grande y de diseño realista, perfecto para coleccionistas y niños grandes."
},
{
  id: "2204-049",
  nombre: "Panda Lentejuelas 40cm",
  precio: 78500,
  imagen: "imagenes/2204-049.jpeg",
  descripcion: "Panda de felpa con lentejuelas de 40cm. Brillante, sofisticado y muy tierno. Perfecto para regalos llamativos o colecciones especiales."
},
{
  id: "Ap3-6206",
  nombre: "Cocodrilo 60cm Con Cobija 160cm*90",
  precio: 82500,
  imagen: "imagenes/ap3-6206.jpeg",
  descripcion: "Cocodrilo de peluche 60cm que incluye cobija de 160cm x 90cm. Práctico, divertido y útil para niños o adultos friolentos."
},
{
  id: "JPE02-40-CAFEOSCURO",
  nombre: "Osos mediano diseños CAFE OSCURO 55cm",
  precio: 86500,
  imagen: "imagenes/jpe02-60-2 (1).jpeg",
  descripcion: "Oso mediano de 55cm, diseño café oscuro. Suave, esponjoso y de gran tamaño, ideal para regalos y decoración especial."
},
{
  id: "JPE02-40-CAFECLARO",
  nombre: "Osos mediano diseños 55cm CAFE CLARO",
  precio: 86500,
  imagen: "imagenes/jpe02-60-1.jpeg",
  descripcion: "Oso mediano de 55cm, diseño café claro. Muy suave y grande, perfecto para regalar en ocasiones importantes."
},
{
  id: "cj-3179",
  nombre: "King Kong Gigante 60cm",
  precio: 89500,
  imagen: "imagenes/cj-3179.jpeg",
  descripcion: "Peluche King Kong gigante de 60cm. Impactante, divertido y para los que aman los animales icónicos de gran tamaño."
},
{
  id: "BLM-099",
  nombre: "Oso con Moño Grande 100cm",
  precio: 261000,
  imagen: "imagenes/BLM-099.jpeg",
  descripcion: "Oso gigante de 1 metro con moño grande, el regalo perfecto para ocasiones inolvidables y decoración impactante."
},
{
  id: "BLL-016",
  nombre: "Oso con Corazon Grande 110cm",
  precio: 261000,
  imagen: "imagenes/BLL-016.jpeg",
  descripcion: "Oso gigante con corazón de 110cm. Muy suave, tierno y perfecto para sorprender en fechas especiales como aniversarios y San Valentín."
},
{
  id: "2967-CAFE",
  nombre: "Oso Carmel con Flor 100cm CAFE",
  precio: 261000,
  imagen: "imagenes/2967-2.jpeg",
  descripcion: "Oso carmel gigante de 1 metro, color café, con flor. Un detalle romántico, grande y memorable para regalar."
},
{
  id: "2967-BLANCO",
  nombre: "Oso Carmel con Flor 100cm BLANCO",
  precio: 261000,
  imagen: "imagenes/2967.jpeg",
  descripcion: "Oso carmel gigante de 1 metro, color blanco, con flor. Tierno, elegante y perfecto para sorprender a lo grande."
},
{
  id: "BL22-01",
  nombre: "Oso con Bufanda grande 120cm",
  precio: 272000,
  imagen: "imagenes/bl22-01.jpeg",
  descripcion: "Oso gigante de 120cm con bufanda. Súper suave, abrigador y perfecto para ser el centro de atención en cualquier regalo o celebración especial."
},
{
  id: "2535",
  nombre: "Oso moño Sonriente grande 110cm",
  precio: 272000,
  imagen: "imagenes/2535.jpeg",
  descripcion: "Oso gigante de 110cm con moño y sonrisa. Ideal para regalar, sorprender y llenar de alegría cualquier ambiente."
}
  
];
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
