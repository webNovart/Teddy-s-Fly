// Datos de ejemplo, puedes cargarlos desde un JSON o backend en un futuro
const productos = [
    {
        id: "1",
        nombre: "Peluche Osito Viajero",
        precio: 29900,
        imagen: "assets/img/peluche-nuevo.jpg",
        miniaturas: [
            "assets/img/peluche-nuevo.jpg",
            "assets/img/peluche-nuevo2.jpg",
            "assets/img/peluche-nuevo3.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El Peluche Osito Viajero es suave, lavable y perfecto para acompañar a grandes y pequeños en cada aventura. Material antialérgico, tamaño 30cm, disponible en varios colores.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Recomendado desde 3 años</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 25 opiniones)</p>
            </div>
        `
    },
    {
        id: "2",
        nombre: "Peluche Pikachu",
        precio: 34900,
        imagen: "assets/img/peluche-pikachu.jpg",
        miniaturas: [
            "assets/img/peluche-pikachu.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>¡El Pikachu más adorable! Suave, tamaño 25cm, ideal para fans de todas las edades.</p>
            <ul>
                <li>Material: Felpa premium</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí</li>
                <li>Producto Licenciado</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.5/5 basado en 12 opiniones)</p>
            </div>
        `
    },
   

    {
        id: "13",
        nombre: "Peluche Minion Kevin",
        precio: 32000,
        imagen: "assets/img/peluche-minion-kevin.jpg",
       
        descripcion: `
            <h3>Descripción</h3>
            <p>El Peluche Minion Kevin es el compañero perfecto para los fans de Mi Villano Favorito. Suave, divertido y con detalles bordados, ideal para juegos y decoración.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Incluye: Overol azul y gafas suaves</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 32 opiniones)</p>
            </div>
        `
    },
    {
        id: "14",
        nombre: "Peluche Minion Stuart",
        precio: 32000,
        imagen: "assets/img/peluche-minion-stuart.jpg",
        miniaturas: [
            "assets/img/peluche-minion-stuart.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Stuart, el Minion travieso, te acompañará en todas tus aventuras. Perfecto para regalar y coleccionar por su ternura y colores vibrantes.</p>
            <ul>
                <li>Material: Felpa de alta calidad</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Detalles bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 26 opiniones)</p>
            </div>
        `
    },
    {
        id: "15",
        nombre: "Peluche Minion Bob",
        precio: 32000,
        imagen: "assets/img/peluche-minion-bob.jpg",
        miniaturas: [
            "assets/img/peluche-minion-bob.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El Peluche Minion Bob es el más adorable de todos. Ideal para pequeños y grandes, es suave y seguro para dormir y jugar.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí, fácil de limpiar</li>
                <li>Incluye: Osito de peluche miniatura</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 44 opiniones)</p>
            </div>
        `
    },
    {
        id: "16",
        nombre: "Peluche Stitch Azul",
        precio: 34000,
        imagen: "assets/img/peluche-stitch-azul.jpg",
        miniaturas: [
            "assets/img/peluche-stitch-azul.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Stitch azul original, perfecto para fans de Lilo & Stitch. Suave, abrazable y con detalles auténticos para disfrutar en todo momento.</p>
            <ul>
                <li>Material: Felpa premium hipoalergénica</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí, ciclo suave</li>
                <li>Orejas grandes y ojos bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 21 opiniones)</p>
            </div>
        `
    },
    {
        id: "17",
        nombre: "Peluche Stitch Rosa",
        precio: 34000,
        imagen: "assets/img/peluche-stitch-rosa.jpg",
        miniaturas: [
            "assets/img/peluche-stitch-rosa.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Stitch en su versión rosa, tierno y suave, ideal para regalar a quienes aman los peluches únicos y coloridos.</p>
            <ul>
                <li>Material: Felpa de alta calidad</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Detalles bordados y orejas flexibles</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 16 opiniones)</p>
            </div>
        `
    },
    {
        id: "18",
        nombre: "Peluche Stitch Morado",
        precio: 34000,
        imagen: "assets/img/peluche-stitch-morado.jpg",
        miniaturas: [
            "assets/img/peluche-stitch-morado.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Edición especial de Stitch en color morado, ideal para coleccionistas y fans de lo original.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí</li>
                <li>Ojos y nariz bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 12 opiniones)</p>
            </div>
        `
    },
    {
        id: "19",
        nombre: "Peluche Carl Fredricksen (Up)",
        precio: 37000,
        imagen: "assets/img/peluche-carl-up.jpg",
        miniaturas: [
            "assets/img/peluche-carl-up.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Carl de Up en versión peluche, con su icónica chaqueta y gafas, ideal para fans de Pixar y coleccionistas.</p>
            <ul>
                <li>Material: Felpa suave y detalles textiles</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Incluye bastón de tela y gafas plásticas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.6/5 basado en 14 opiniones)</p>
            </div>
        `
    },
    {
        id: "20",
        nombre: "Peluche Russell (Up)",
        precio: 37000,
        imagen: "assets/img/peluche-russell-up.jpg",
        miniaturas: [
            "assets/img/peluche-russell-up.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Russell, el explorador de Up, ahora en peluche. Detalles de uniforme y mochila, perfecto para aventuras en casa.</p>
            <ul>
                <li>Material: Felpa y tela sintética</li>
                <li>Tamaño: 26cm</li>
                <li>Lavable: Sí</li>
                <li>Uniforme y accesorios cosidos</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 15 opiniones)</p>
            </div>
        `
    },
    {
        id: "21",
        nombre: "Peluche Chimuelo",
        precio: 35000,
        imagen: "assets/img/peluche-chimuelo.jpg",
        miniaturas: [
            "assets/img/peluche-chimuelo.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Dragón Chimuelo ultra suave, con alas y detalles bordados. Perfecto para dormir, decorar o jugar.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 32cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Alas y cola articuladas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.7/5 basado en 18 opiniones)</p>
            </div>
        `
    },
    {
        id: "22",
        nombre: "Peluche Tom (Tom y Jerry)",
        precio: 32000,
        imagen: "assets/img/peluche-tom.jpg",
        miniaturas: [
            "assets/img/peluche-tom.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El travieso Tom, de Tom y Jerry, en un peluche suave y abrazable. Diseño fiel al personaje clásico.</p>
            <ul>
                <li>Material: Felpa de alta calidad</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Cola y bigotes flexibles</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 23 opiniones)</p>
            </div>
        `
    },
    {
        id: "23",
        nombre: "Peluche Jerry (Tom y Jerry)",
        precio: 32000,
        imagen: "assets/img/peluche-jerry.jpg",
        miniaturas: [
            "assets/img/peluche-jerry.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Jerry, el ratoncito más escurridizo, en versión peluche para los amantes de las caricaturas clásicas.</p>
            <ul>
                <li>Material: Felpa suave</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí</li>
                <li>Orejas y cola bordadas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 19 opiniones)</p>
            </div>
        `
    },
    {
        id: "24",
        nombre: "Peluche Pantera Rosa",
        precio: 33000,
        imagen: "assets/img/peluche-pantera-rosa.jpg",
        miniaturas: [
            "assets/img/peluche-pantera-rosa.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El clásico de la animación, con diseño alargado y textura suave, ideal para abrazar o decorar tu espacio.</p>
            <ul>
                <li>Material: Felpa rosada de alta densidad</li>
                <li>Tamaño: 35cm</li>
                <li>Lavable: Sí</li>
                <li>Ojos y hocico bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.6/5 basado en 14 opiniones)</p>
            </div>
        `
    },
    {
        id: "25",
        nombre: "Peluche Elefante Azul",
        precio: 31000,
        imagen: "assets/img/peluche-elefante-azul.jpg",
        miniaturas: [
            "assets/img/peluche-elefante-azul.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Elefante azul, suave y tierno, ideal para bebés y niños pequeños. Perfecto para abrazar y acompañar el sueño.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí, ciclo delicado</li>
                <li>Orejas grandes y trompa flexible</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 17 opiniones)</p>
            </div>
        `
    },
    {
        id: "26",
        nombre: "Peluche Elefante Rosa",
        precio: 31000,
        imagen: "assets/img/peluche-elefante-rosa.jpg",
        miniaturas: [
            "assets/img/peluche-elefante-rosa.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Elefante color rosa pastel, suave y seguro para los más pequeños. Ideal para regalos de nacimiento o cumpleaños.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Colores resistentes al lavado</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 13 opiniones)</p>
            </div>
        `
    },
    {
        id: "27",
        nombre: "Peluche Elefante Amarillo",
        precio: 31000,
        imagen: "assets/img/peluche-elefante-amarillo.jpg",
        miniaturas: [
            "assets/img/peluche-elefante-amarillo.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Elefante color amarillo, con detalles bordados y textura extra suave. Perfecto para acompañar juegos y siestas.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Relleno suave y seguro</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
            </div>
        `
    },
    {
        id: "28",
        nombre: "Peluche Chase (Paw Patrol)",
        precio: 33500,
        imagen: "assets/img/peluche-chase.jpg",
        miniaturas: [
            "assets/img/peluche-chase.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Chase, el líder de Paw Patrol, en peluche con uniforme azul y gorra. Perfecto para aventuras de rescate en casa.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí, a máquina</li>
                <li>Uniforme cosido con detalles</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 19 opiniones)</p>
            </div>
        `
    },
    {
        id: "29",
        nombre: "Peluche Marshall (Paw Patrol)",
        precio: 33500,
        imagen: "assets/img/peluche-marshall.jpg",
        miniaturas: [
            "assets/img/peluche-marshall.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Marshall, el bombero más valiente de Paw Patrol, suave y abrazable. Uniforme y casco incluidos.</p>
            <ul>
                <li>Material: Felpa suave</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí</li>
                <li>Casco de tela y uniforme cosido</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 14 opiniones)</p>
            </div>
        `
    },
    {
        id: "30",
        nombre: "Peluche Skye (Paw Patrol)",
        precio: 33500,
        imagen: "assets/img/peluche-skye.jpg",
        miniaturas: [
            "assets/img/peluche-skye.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Skye, la piloto favorita de Paw Patrol, lista para volar en cada aventura. Ala y gafas incluidas.</p>
            <ul>
                <li>Material: Felpa premium</li>
                <li>Tamaño: 26cm</li>
                <li>Lavable: Sí</li>
                <li>Gafas y alas de tela</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 17 opiniones)</p>
            </div>
        `
    },
    {
        id: "31",
        nombre: "Peluche Hello Kitty Clásica",
        precio: 35000,
        imagen: "assets/img/peluche-hello-kitty.jpg",
        miniaturas: [
            "assets/img/peluche-hello-kitty.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>La icónica Hello Kitty con su lazo rojo. Suavidad y ternura en un solo peluche, ideal para fans de todas las edades.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Detalles bordados y vestido rojo</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 27 opiniones)</p>
            </div>
        `
    },
    {
        id: "32",
        nombre: "Peluche Hello Kitty Rosa",
        precio: 35000,
        imagen: "assets/img/peluche-hello-kitty-rosa.jpg",
        miniaturas: [
            "assets/img/peluche-hello-kitty-rosa.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Hello Kitty en versión rosa pastel, con vestido y lazo a juego. Ideal para decorar o regalar.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Lazo y vestido rosa incluidos</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 18 opiniones)</p>
            </div>
        `
    },
    {
        id: "33",
        nombre: "Peluche Mario",
        precio: 37000,
        imagen: "assets/img/peluche-mario.jpg",
        miniaturas: [
            "assets/img/peluche-mario.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El fontanero favorito de todos, Mario, ahora en peluche. Perfecto para fans de Nintendo y coleccionistas.</p>
            <ul>
                <li>Material: Felpa de alta calidad</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí, a máquina</li>
                <li>Detalles bordados y ropa cosida</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 34 opiniones)</p>
            </div>
        `
    },
    {
        id: "34",
        nombre: "Peluche Luigi",
        precio: 37000,
        imagen: "assets/img/peluche-luigi.jpg",
        miniaturas: [
            "assets/img/peluche-luigi.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Luigi, el inseparable hermano de Mario, listo para vivir grandes aventuras contigo.</p>
            <ul>
                <li>Material: Felpa de alta calidad</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Detalles bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.8/5 basado en 24 opiniones)</p>
            </div>
        `
    },
    {
        id: "35",
        nombre: "Peluche Tigre Naranja",
        precio: 32000,
        imagen: "assets/img/peluche-tigre-naranja.jpg",
        miniaturas: [
            "assets/img/peluche-tigre-naranja.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Tigre de peluche en color naranja brillante, con rayas bordadas y cola larga. Suave y perfecto para abrazar.</p>
            <ul>
                <li>Material: Felpa antialérgica</li>
                <li>Tamaño: 32cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Cola y rayas realistas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 16 opiniones)</p>
            </div>
        `
    },
    {
        id: "36",
        nombre: "Peluche Tigre Blanco",
        precio: 32000,
        imagen: "assets/img/peluche-tigre-blanco.jpg",
        miniaturas: [
            "assets/img/peluche-tigre-blanco.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Tigre blanco, elegante y suave, ideal para regalar o decorar habitaciones infantiles.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 32cm</li>
                <li>Lavable: Sí</li>
                <li>Rayas negras bordadas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 11 opiniones)</p>
            </div>
        `
    },
    {
        id: "37",
        nombre: "Peluche Sonic",
        precio: 36000,
        imagen: "assets/img/peluche-sonic.jpg",
        miniaturas: [
            "assets/img/peluche-sonic.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El erizo azul más veloz, Sonic, ahora en peluche ultra suave para fans de videojuegos.</p>
            <ul>
                <li>Material: Felpa azul de alta calidad</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Ojos y detalles bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 22 opiniones)</p>
            </div>
        `
    },
    {
        id: "38",
        nombre: "Peluche Tails",
        precio: 34000,
        imagen: "assets/img/peluche-tails.jpg",
        miniaturas: [
            "assets/img/peluche-tails.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Tails, el inseparable amigo de Sonic, con dos colas suaves y detalles bordados.</p>
            <ul>
                <li>Material: Felpa naranja y blanca</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí</li>
                <li>Colas flexibles</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.8/5 basado en 14 opiniones)</p>
            </div>
        `
    },
    {
        id: "39",
        nombre: "Peluche Peppa Pig",
        precio: 32000,
        imagen: "assets/img/peluche-peppa.jpg",
        miniaturas: [
            "assets/img/peluche-peppa.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Peppa Pig, la cerdita favorita de los niños, ahora en peluche hipoalergénico y lavable.</p>
            <ul>
                <li>Material: Felpa rosa</li>
                <li>Tamaño: 26cm</li>
                <li>Lavable: Sí, ciclo suave</li>
                <li>Vestido rojo incluido</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 30 opiniones)</p>
            </div>
        `
    },
    {
        id: "40",
        nombre: "Peluche George Pig",
        precio: 32000,
        imagen: "assets/img/peluche-george.jpg",
        miniaturas: [
            "assets/img/peluche-george.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>George Pig, con su dinosaurio, en versión peluche ultra suave, seguro y fácil de lavar.</p>
            <ul>
                <li>Material: Felpa hipoalergénica</li>
                <li>Tamaño: 25cm</li>
                <li>Lavable: Sí</li>
                <li>Dinosaurio de tela incluido</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 17 opiniones)</p>
            </div>
        `
    },
    {
        id: "41",
        nombre: "Peluche Scooby Doo",
        precio: 34000,
        imagen: "assets/img/peluche-scooby.jpg",
        miniaturas: [
            "assets/img/peluche-scooby.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Scooby Doo, el perro más famoso, en versión peluche suave con su collar azul y placa bordada.</p>
            <ul>
                <li>Material: Felpa marrón</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Collar incluido</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 15 opiniones)</p>
            </div>
        `
    },
    {
        id: "42",
        nombre: "Peluche Garfield",
        precio: 35000,
        imagen: "assets/img/peluche-garfield.jpg",
        miniaturas: [
            "assets/img/peluche-garfield.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Garfield, el gato más perezoso y adorable, ideal para fans del cómic y la televisión.</p>
            <ul>
                <li>Material: Felpa naranja de alta calidad</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Ojos y sonrisa bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
            </div>
        `
    },
    {
        id: "43",
        nombre: "Peluche Snoopy",
        precio: 34000,
        imagen: "assets/img/peluche-snoopy.jpg",
        miniaturas: [
            "assets/img/peluche-snoopy.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Snoopy, el clásico de Peanuts, con orejas largas y cuerpo abrazable. Perfecto para dormir o decorar.</p>
            <ul>
                <li>Material: Felpa blanca y negra hipoalergénica</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Ojos bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 20 opiniones)</p>
            </div>
        `
    },
    {
        id: "44",
        nombre: "Peluche Charlie Brown",
        precio: 34000,
        imagen: "assets/img/peluche-charliebrown.jpg",
        miniaturas: [
            "assets/img/peluche-charliebrown.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Charlie Brown, el niño más optimista, en peluche suave con su característica camiseta amarilla.</p>
            <ul>
                <li>Material: Felpa y algodón</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí</li>
                <li>Camiseta bordada</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.6/5 basado en 10 opiniones)</p>
            </div>
        `
    },
    {
        id: "45",
        nombre: "Peluche Patricio (Bob Esponja)",
        precio: 34000,
        imagen: "assets/img/peluche-patricio.jpg",
        miniaturas: [
            "assets/img/peluche-patricio.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Patricio, el mejor amigo de Bob Esponja, siempre listo para una siesta o una aventura submarina.</p>
            <ul>
                <li>Material: Felpa rosa</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí</li>
                <li>Pantalón corto verde bordado</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
            </div>
        `
    },
    {
        id: "46",
        nombre: "Peluche Bob Esponja",
        precio: 34000,
        imagen: "assets/img/peluche-bobesponja.jpg",
        miniaturas: [
            "assets/img/peluche-bobesponja.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Bob Esponja, directo desde Fondo de Bikini, ahora en peluche para acompañar tus días.</p>
            <ul>
                <li>Material: Felpa amarilla</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Corbata y pantalón incluidos</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 21 opiniones)</p>
            </div>
        `
    },
    {
        id: "47",
        nombre: "Peluche Pato Lucas",
        precio: 32000,
        imagen: "assets/img/peluche-lucas.jpg",
        miniaturas: [
            "assets/img/peluche-lucas.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>El Pato Lucas, de los Looney Tunes, en peluche suave y divertido. Perfecto para coleccionistas.</p>
            <ul>
                <li>Material: Felpa negra y naranja</li>
                <li>Tamaño: 26cm</li>
                <li>Lavable: Sí</li>
                <li>Pico y patas bordadas</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 12 opiniones)</p>
            </div>
        `
    },
    {
        id: "48",
        nombre: "Peluche Bugs Bunny",
        precio: 34000,
        imagen: "assets/img/peluche-bugs.jpg",
        miniaturas: [
            "assets/img/peluche-bugs.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Bugs Bunny, el conejo más famoso, ideal para regalar a fans de los clásicos animados.</p>
            <ul>
                <li>Material: Felpa gris y blanca</li>
                <li>Tamaño: 28cm</li>
                <li>Lavable: Sí</li>
                <li>Orejas largas y detalles bordados</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.8/5 basado en 18 opiniones)</p>
            </div>
        `
    },
    {
        id: "49",
        nombre: "Peluche Lola Bunny",
        precio: 34000,
        imagen: "assets/img/peluche-lola.jpg",
        miniaturas: [
            "assets/img/peluche-lola.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Lola Bunny, la más coqueta de los Looney Tunes, ideal para coleccionar o decorar.</p>
            <ul>
                <li>Material: Felpa blanca y beige</li>
                <li>Tamaño: 27cm</li>
                <li>Lavable: Sí</li>
                <li>Vestido rosa incluido</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐ (4.7/5 basado en 10 opiniones)</p>
            </div>
        `
    },
    {
        id: "50",
        nombre: "Peluche Woody (Toy Story)",
        precio: 36000,
        imagen: "assets/img/peluche-woody.jpg",
        miniaturas: [
            "assets/img/peluche-woody.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Woody, el vaquero preferido de Toy Story, con sombrero y chaleco incluidos.</p>
            <ul>
                <li>Material: Felpa y tela vaquera</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Sombrero desmontable</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (5/5 basado en 14 opiniones)</p>
            </div>
        `
    },
    {
        id: "51",
        nombre: "Peluche Buzz Lightyear (Toy Story)",
        precio: 36000,
        imagen: "assets/img/peluche-buzz.jpg",
        miniaturas: [
            "assets/img/peluche-buzz.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Buzz Lightyear, el guardián espacial, listo para llegar al infinito y más allá.</p>
            <ul>
                <li>Material: Felpa blanca y verde</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí</li>
                <li>Detalles bordados y alas de tela</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 16 opiniones)</p>
            </div>
        `
    },
    {
        id: "52",
        nombre: "Peluche Olaf (Frozen)",
        precio: 35000,
        imagen: "assets/img/peluche-olaf.jpg",
        miniaturas: [
            "assets/img/peluche-olaf.jpg"
        ],
        descripcion: `
            <h3>Descripción</h3>
            <p>Olaf, el muñeco de nieve favorito de Frozen, con brazos y cabello de tela suave.</p>
            <ul>
                <li>Material: Felpa blanca premium</li>
                <li>Tamaño: 30cm</li>
                <li>Lavable: Sí, a mano</li>
                <li>Brazos flexibles y nariz de fieltro</li>
            </ul>
            <div class="valoraciones">
                <h3>Valoraciones</h3>
                <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 25 opiniones)</p>
            </div>
        `
    }
];
    // ...agrega más productos aquí


// Función para obtener el parámetro id de la URL
function getParameterByName(name) {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get(name);
}

document.addEventListener("DOMContentLoaded", function() {
    const id = getParameterByName("id");
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
        document.title = "Producto no encontrado | Teddy's Fly";
        return;
    }

    // Llenar la información
    document.getElementById("titulo-pagina").textContent = producto.nombre + " | Teddy's Fly";
    document.getElementById("nombre-producto").textContent = producto.nombre;
    document.getElementById("precio-producto").textContent = "$" + producto.precio.toLocaleString();
    document.getElementById("img-principal").src = producto.imagen;
    document.getElementById("img-principal").alt = producto.nombre;
    document.getElementById("descripcion-producto").innerHTML = producto.descripcion;

    // Miniaturas
    const miniaturasDiv = document.getElementById("miniaturas");
    miniaturasDiv.innerHTML = "";
    producto.miniaturas.forEach(img => {
        const mini = document.createElement("img");
        mini.src = img;
        mini.alt = producto.nombre;
        mini.width = 60;
        mini.height = 60;
        mini.addEventListener("click", () => {
            document.getElementById("img-principal").src = img;
        });
        miniaturasDiv.appendChild(mini);
    });

    // Botón añadir al carrito: poner los data-atributos necesarios
    const btnCarrito = document.getElementById("btn-agregar-carrito");
    btnCarrito.setAttribute("data-id", producto.id);
    btnCarrito.setAttribute("data-nombre", producto.nombre);
    btnCarrito.setAttribute("data-precio", producto.precio);
    btnCarrito.setAttribute("data-imagen", producto.imagen);
});
