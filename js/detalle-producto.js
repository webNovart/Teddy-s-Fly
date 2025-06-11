// Datos de ejemplo, puedes cargarlos desde un JSON o backend en un futuro
const productos = [
   // Bloque 1
  {
    id: "FP1226",
    nombre: "Llavero Burro 12cm Azul",
    precio: 10500,
    imagen: "imagenes/FP1226-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Un llavero peluche con diseño de burro en color azul, compacto y divertido. Perfecto para decorar tus llaves, mochila o regalar como detalle especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Mat-MORADO",
    nombre: "Llavero Matera Dino 10cm Morado",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche matera con forma de dinosaurio en color morado. Ideal para regalar o coleccionar, pequeño y práctico para llevar a todos lados.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.7/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Mat-VERDE",
    nombre: "Llavero Matera Dino 10cm Verde",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Divertido llavero de dinosaurio, pequeño y suave, en color verde. Perfecto para personalizar tus pertenencias y llevar contigo a todas partes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, costuras de calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Mat-AZUL-OSCURO",
    nombre: "Llavero Matera Dino 10cm Azul Oscuro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero de felpa con forma de dinosaurio en azul oscuro. Ideal para niños y adultos que buscan un accesorio original y suave.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul oscuro, detalles en costura</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Mat-AZUL-CLARO",
    nombre: "Llavero Matera Dino 10cm Azul Claro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero matera con diseño de dinosaurio en azul claro. Tamaño perfecto para mochilas, estuches o llaves. Suave y resistente.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul claro, texturas agradables</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Din-NARANJA",
    nombre: "Llavero Dinosaurio 12cm Naranja",
    precio: 12500,
    imagen: "imagenes/LLA-Din-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de dinosaurio color naranja. Alegre y llamativo, perfecto para niños o amantes de los dinosaurios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Din-MORADO",
    nombre: "Llavero Dinosaurio 12cm Morado",
    precio: 12500,
    imagen: "imagenes/LLA-Din-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche con diseño de dinosaurio en color morado. Suave, seguro y muy original como regalo o accesorio para tus llaves.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, costura reforzada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Din-VERDE",
    nombre: "Llavero Dinosaurio 12cm Verde",
    precio: 12500,
    imagen: "imagenes/LLA-Din-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero pequeño con forma de dinosaurio en color verde, perfecto para llevar en la mochila o regalar a niños y niñas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "LLA-Din-COLORES",
    nombre: "Llavero Dinosaurio 12cm Colores",
    precio: 12500,
    imagen: "imagenes/LLA-Din-4.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero de dinosaurio en colores surtidos, ideal para fans de los peluches pequeños y coleccionistas de accesorios originales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, costura de calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "Eco-Sur-PANDA",
    nombre: "Peluche económico pequeño 15cm Panda",
    precio: 13000,
    imagen: "imagenes/WhatsApp-Image-2025-05-16-at-5.13.13-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche económico pequeño con diseño de panda. Suave, tierno y perfecto para niños pequeños o para decorar escritorios y habitaciones.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, textura agradable</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "1030-17-MEL",
    nombre: "Perro Pets Mel 25cm",
    precio: 15000,
    imagen: "imagenes/1030-17.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro "Pets Mel", de tamaño mediano. Suave y amigable, ideal para abrazar y acompañar el descanso de los más pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y textura agradable</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 13 opiniones)</p>
      </div>
    `
  },
  {
    id: "j300-21-OSO",
    nombre: "Osos Peludos Pequeños 20cm",
    precio: 16500,
    imagen: "imagenes/WhatsApp-Image-2025-05-08-at-5.29.43-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluches osos peludos pequeños, tiernos y suaves. Perfecto para niños o como detalle especial en cualquier ocasión.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores diferentes, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 2
  {
    id: "FLOS-1523-GRIS",
    nombre: "Osos Corazón y Rosa 20cm Gris",
    precio: 17500,
    imagen: "imagenes/flos-1523-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso con corazón y rosa en color gris, ideal para regalar en ocasiones especiales. Su tamaño compacto lo hace perfecto para decorar cualquier espacio o como detalle romántico.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles bordados y costura resistente</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `
  },
  {
    id: "FLOS-1523-BEIGE",
    nombre: "Osos Corazón y Rosa 20cm Beige",
    precio: 17500,
    imagen: "imagenes/flos-1523-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso en color beige con corazón y rosa. Un detalle tierno y suave, perfecto para regalar y expresar cariño en cualquier momento especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color beige, acabados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "FLOS-1523-CAFE",
    nombre: "Osos Corazón y Rosa 20cm Café",
    precio: 17500,
    imagen: "imagenes/flos-1523-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso de peluche en color café con corazón y rosa. Suave, adorable y con detalles delicados. Ideal para regalar, decorar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },
     {
    id: "uni-2023-ROSA",
    nombre: "Unicornio Estrellitas 22cm ROSA",
    precio: 19000,
    imagen: "imagenes/uni-2023-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio color rosa con estrellitas bordadas, suave y adorable. Ideal para regalar a niños y amantes de los unicornios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "uni-2023-BLANCO",
    nombre: "Unicornio Estrellitas 22cm BLANCO",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Unicornio de peluche color blanco con estrellitas, pequeño y tierno. Perfecto para decorar habitaciones o regalar como detalle especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "uni-2023-MORADO",
    nombre: "Unicornio Estrellitas 22cm MORADO",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Unicornio de peluche color morado con estrellitas bordadas. Suave y colorido, especial para coleccionistas y niños pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Leon-p",
    nombre: "Leon mechudo pequeño",
    precio: 20000,
    imagen: "imagenes/leon-p-1536x1536.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche león pequeño con melena mechuda, suave y divertido. Ideal para niños y para decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo y marrón, melena esponjosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "A019-COCODRILO",
    nombre: "Zoologico cabezon 20cm COCODRILO",
    precio: 20500,
    imagen: "imagenes/A019-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche cabezón de cocodrilo, divertido y suave. Perfecto para juegos, colecciones o como regalo especial para los niños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, diseño simpático</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "A019-OVEJA",
    nombre: "Zoológico cabezón 20cm OVEJA",
    precio: 20500,
    imagen: "imagenes/A019-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche cabezón de oveja, tierno y esponjoso. Un detalle encantador para regalar o para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles en rosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "2591-ROSA",
    nombre: "Cerdo disfrazado ROSA 25cm",
    precio: 23500,
    imagen: "imagenes/2591-ROSA.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de cerdo disfrazado color rosa, tierno y gracioso. Ideal para regalar, coleccionar o decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles de disfraz</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
      </div>
    `
  },
    // BLOQUE 3
  {
    id: "bg9-20-BLANCO",
    nombre: "Gato Corazón 25cm Blanco",
    precio: 27000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-4.31.41-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de gato blanco con corazón, suave y tierno. Ideal para acompañar a los más pequeños en sus juegos o para regalar como muestra de cariño.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },
    {
    id: "1896-CAFE",
    nombre: "León pequeño melena CAFÉ 19cm",
    precio: 28000,
    imagen: "imagenes/1896-peque.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de león pequeño con melena café, suave y tierno. Perfecto para niños y decoraciones temáticas de animales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 19 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro y oscuro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "BDHSQ-20-AMARILLO",
    nombre: "Siberiano Camisa 25cm AMARILLO",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa amarilla, elegante y suave. Ideal para obsequios y coleccionistas de peluches originales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "BDHSQ-20-ROSA",
    nombre: "Siberiano Camisa 25cm ROSA",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa rosa, tierno y alegre. Ideal para decorar habitaciones infantiles y regalar en ocasiones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "BDHSQ-20-VERDE",
    nombre: "Siberiano Camisa 25cm VERDE",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa verde, suave y original. Perfecto para amantes de los perros y coleccionistas de peluches.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "1289-30",
    nombre: "Panda Acostado 30cm",
    precio: 28000,
    imagen: "imagenes/1289-30.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda acostado, suave, esponjoso y de tamaño ideal para abrazar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "lxd-20",
    nombre: "Oso Arlequín 25cm",
    precio: 28500,
    imagen: "imagenes/lxd-20.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso arlequín de 25 cm, colorido y alegre. Ideal para regalar y decorar ambientes infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, diseño arlequín</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "1925-MINEGLO",
    nombre: "Personajes curiosos MI NEGLO",
    precio: 29000,
    imagen: "imagenes/1925-MINEGLO.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MI NEGLO, divertido y suave. Ideal para coleccionistas y como regalo original.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Diseño único, colores variados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 3 ...
  {
    id: "j129-22-NEGRO",
    nombre: "Perro Gafas 25cm Negro",
    precio: 29000,
    imagen: "imagenes/J129-22-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro con gafas, color negro. Divertido y suave, ideal para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, gafas decorativas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 4
  {
    id: "j129-22-CAFE",
    nombre: "Perro Gafas 25cm Café",
    precio: 30000,
    imagen: "imagenes/J129-22-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro con gafas, color café. Suave, divertido y con un toque simpático gracias a sus gafas decorativas, perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, gafas de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 4 ...
  {
    id: "Sur05-30-SURTIDOS",
    nombre: "Peluche Elástico Mediano Animales Surtidos 30cm",
    precio: 32000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-3.07.28-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano de animales surtidos. Excelente opción para quienes aman los peluches variados y coleccionables.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Diferentes colores y diseños</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 5
  {
    id: "ele-30-AZUL",
    nombre: "Elefante Ojos Bordado 25cm Azul",
    precio: 32500,
    imagen: "imagenes/ELE0003-5.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante azul con ojos bordados, suave al tacto y de tamaño mediano. Perfecto para niños y para regalar a quienes aman los animales tiernos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 5 ...
  {
    id: "YF1-40-AZUL",
    nombre: "Elefante Almohada Colores 40cm Azul",
    precio: 45500,
    imagen: "imagenes/yf1-40.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Elefante almohada azul, suave y funcional como cojín. Perfecto para niños y para regalar en cualquier ocasión especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul claro, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 14 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 6
  {
    id: "2587",
    nombre: "Vaca con Bolso 40cm",
    precio: 46000,
    imagen: "imagenes/2587.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de vaca con bolso, de gran tamaño y detalles encantadores. Ideal para abrazar, decorar o regalar en ocasiones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, bolso colorido incluido</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 6 ...
  {
    id: "2332-40",
    nombre: "Panda Camisa Roja 45cm",
    precio: 61000,
    imagen: "imagenes/2332-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de panda con camisa roja, adorable y esponjoso. Un detalle especial para decorar o regalar a los amantes de los pandas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 45 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, camisa roja</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 13 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 7
  {
    id: "HUO-30-ROSA",
    nombre: "Dino Huevo 33cm Rosa",
    precio: 63000,
    imagen: "imagenes/HUO-30-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de dinosaurio saliendo del huevo, en color rosa. Un diseño original y divertido, ideal para regalar a los pequeños amantes de los dinosaurios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados y diseño interactivo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 7 ...
  {
    id: "GS282-60",
    nombre: "Mico Buso Grande 60cm",
    precio: 68500,
    imagen: "imagenes/GS282-60.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de mico (mono) con buso grande, suave y llamativo. Un regalo excelente para sorprender y abrazar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón, buso colorido</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 15 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 8
  {
    id: "GS377-40-45CM",
    nombre: "Mono Bolso Banana 45cm",
    precio: 69500,
    imagen: "imagenes/GS377-40 (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de mono con bolso en forma de banana, tamaño mediano. Divertido, suave y perfecto para regalar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 45 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón, bolso tipo banana</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 8 ...
  {
    id: "821-l",
    nombre: "Elefante Luminosa con Cobija 60cm",
    precio: 98000,
    imagen: "imagenes/821-1.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante luminosa, incluye cobija. Brilla en la oscuridad y aporta calidez y ternura a cualquier espacio.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosado, luz suave y cobija incluida</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 9
  {
    id: "JE-68",
    nombre: "Oso Bufanda Love 75cm",
    precio: 148000,
    imagen: "imagenes/je-68.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de oso gigante con bufanda "Love", tierno y espectacular para regalar en ocasiones especiales. Su tamaño lo hace ideal para abrazar y decorar grandes espacios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 75 cm</li>
        <li>Lavable: Sí</li>
        <li>Color beige, bufanda decorativa con mensaje Love</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 16 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 9 ...
  {
    id: "JE-73-ROSA",
    nombre: "Oso Gigantísimo 135cm Rosa",
    precio: 416500,
    imagen: "imagenes/Je-73-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de oso gigante en color rosa, el más grande y espectacular de todos. Sorprende con este regalo inolvidable, ideal para ocasiones verdaderamente especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 135 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles premium y gran suavidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 20 opiniones)</p>
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
