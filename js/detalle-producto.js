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
    imagen: "imagenes/WhatsApp-Image-2025-05-14-at-11.54.40-AM.jpeg",
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
    imagen: "imagenes/PhotoRoom-20220816_103412.jpg",
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
   {
    id: "1925-MAGO",
    nombre: "Personajes curiosos MAGO 33cm",
    precio: 29000,
    imagen: "imagenes/1925-MAGO.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MAGO de 33 cm, con outfit de mago y gorro. Perfecto para regalar y para coleccionistas de personajes especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y diseño temático</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
   {
    id: "2220A",
    nombre: "Viejita mediana 30cm",
    precio: 29500,
    imagen: "imagenes/2220A.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de viejita mediana de 30cm, simpática y tradicional. Perfecta para evocaciones tiernas y decoraciones nostálgicas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores y vestimenta tradicional</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "1925-MUNECATRAPO",
    nombre: "Personajes curiosos MUÑEQUITA DE TRAPO 33cm",
    precio: 29000,
    imagen: "imagenes/1925.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MUÑEQUITA DE TRAPO de 33 cm, tradicional, suave y tierno. Perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, vestimenta de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "1925-MUNECATRAPOLISA",
    nombre: "Personajes curiosos MUÑEQUITA TRAPO LISA 33cm",
    precio: 29000,
    imagen: "imagenes/PhotoRoom-20220816_103502.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MUÑEQUITA TRAPO LISA de 33 cm, de diseño sencillo y tradicional. Ideal para decoración y como regalo clásico.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color liso, vestido de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
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
   {
    id: "tzjd-20",
    nombre: "Ratón con Queso Pequeño 25cm",
    precio: 31000,
    imagen: "imagenes/tzjd- (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche ratón pequeño de 25cm con queso, tierno y gracioso. Ideal para regalar a niños y amantes de los animales de fantasía.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris y detalles de queso amarillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
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
    {
    id: "1881-23-OSCURO",
    nombre: "Gorila Pequeño OSCURO 25cm",
    precio: 30000,
    imagen: "imagenes/1881-23-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche gorila pequeño de 25cm en color oscuro, robusto y suave, ideal para niños y coleccionistas de animales exóticos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color oscuro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `
  },
   {
    id: "ele-30-MORADO",
    nombre: "Elefante Ojos bordado 25cm MORADO",
    precio: 32500,
    imagen: "imagenes/yf1-60-2.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante color morado con ojos bordados. Suave, tierno y perfecto para regalar o decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "J207-20-NEGRO",
    nombre: "Dragon alas brillantes 25cm NEGRO",
    precio: 33500,
    imagen: "imagenes/j207-20-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón de 25cm color negro con alas brillantes. Perfecto para niños y coleccionistas de criaturas fantásticas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
    {
    id: "J207-20-VERDE",
    nombre: "Dragon alas brillantes 25cm VERDE",
    precio: 35500,
    imagen: "imagenes/j207-20-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón verde de 25cm con alas brillantes. Suave y lleno de fantasía, ideal para niños y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "J207-20-MORADO",
    nombre: "Dragon alas brillantes 25cm MORADO",
    precio: 35500,
    imagen: "imagenes/j207-20-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón morado de 25cm con alas brillantes. Tierno, original y perfecto para regalar a los amantes de la fantasía.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "FP1486-GRIS",
    nombre: "Tiburón pequeño GRIS 30CM",
    precio: 34000,
    imagen: "imagenes/FP1486-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche tiburón pequeño color gris, suave y divertido. Ideal para regalar a niños aventureros y fanáticos del mar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "FP1486-AZUL",
    nombre: "Tiburón pequeño AZUL 30CM",
    precio: 34000,
    imagen: "imagenes/FP1486-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche tiburón pequeño color azul, suave y tierno. Perfecto para decorar, regalar o acompañar a los niños en sus aventuras.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 7 opiniones)</p>
      </div>
    `
  },
 
  {
    id: "2584",
    nombre: "Vaca Babero 35cm",
    precio: 43000,
    imagen: "imagenes/2584.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche vaca de 35cm con babero, adorable y esponjosa. Perfecta para decorar habitaciones infantiles y como regalo especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, babero de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
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
   
  {
    id: "YF1-40-ROSA",
    nombre: "Elefante Almohada colores ROSA 40cm",
    precio: 45500,
    imagen: "imagenes/yf1-40-5.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Elefante almohada color rosa de 40cm. Suave, esponjoso y perfecto como cojín o peluche de compañía para niños y niñas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "xh-35-AZUL",
    nombre: "Ratones pijama 35cm AZUL",
    precio: 50000,
    imagen: "imagenes/XH-25-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche ratón en pijama azul de 35cm. Muy suave, perfecto como regalo o para acompañar la hora de dormir de los pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles de pijama</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "8773-40-AZUL",
    nombre: "Oso Ropa rayas 42cm AZUL",
    precio: 52000,
    imagen: "imagenes/8773-40-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso de 42cm con ropa de rayas azules. Elegante, suave y perfecto para decorar o regalar a grandes y pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 42 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, ropa de rayas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "8773-40-VERDE",
    nombre: "Oso Ropa rayas 42cm VERDE",
    precio: 52000,
    imagen: "imagenes/8773-40-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso de 42cm con ropa de rayas verdes. Tierno, elegante y especial para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 42 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, ropa de rayas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "1043-40",
    nombre: "Panda Vestido 40cm",
    precio: 59000,
    imagen: "imagenes/1043-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda vestido de 40cm, suave y adorable. Ideal como regalo especial o para decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, vestido de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "2301-40",
    nombre: "Panda Overol 40cm",
    precio: 59000,
    imagen: "imagenes/2301-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda con overol de 40cm, esponjoso y tierno. Perfecto para regalar, coleccionar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, overol de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-GRIS",
    nombre: "Animalito que respira (No incluye pilas) 26cm GRIS",
    precio: 65000,
    imagen: "imagenes/JE-59-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color gris de 26cm (no incluye pilas). Realista, suave y reconfortante para niños y adultos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color gris</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 13 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-AZUL",
    nombre: "Animalito que respira (No incluye pilas) 26cm AZUL",
    precio: 65000,
    imagen: "imagenes/JE-59-4.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color azul de 26cm (no incluye pilas). Suave, tierno y perfecto como compañía para niños pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color azul</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-MARRON",
    nombre: "Animalito que respira (No incluye pilas) 26cm MARRON",
    precio: 65000,
    imagen: "imagenes/JE-59-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color marrón de 26cm (no incluye pilas). Especial para reconfortar y acompañar en la hora de dormir.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color marrón</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-CAFE",
    nombre: "Animalito que respira (No incluye pilas) 26cm CAFE",
    precio: 65000,
    imagen: "imagenes/JE-59-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color café de 26cm (no incluye pilas). Realista, suave y adorable para acompañar a los más pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color café</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
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
  },
   {
    id: "BL-389-43-MORADO",
    nombre: "Unicornio Ojitos 40cm MORADO",
    precio: 31500,
    imagen: "imagenes/bl-398-43-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio de 40cm color morado, con ojitos grandes y brillantes. Encantador para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
    {
    id: "BL-389-43-ROSA",
    nombre: "Unicornio Ojitos 40cm ROSA",
    precio: 31500,
    imagen: "imagenes/bl-398-43-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio de 40cm color rosa, con ojitos grandes y brillantes. Perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-GANZO",
    nombre: "Peluche elástico mediano GANZO 30cm",
    precio: 32000,
    imagen: "imagenes/sur05-30-9.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano en forma de ganzo, divertido y suave. Ideal para juegos y decoración.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles naranjas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-UNICORNIO",
    nombre: "Peluche elástico mediano 30cm UNICORNIO",
    precio: 32000,
    imagen: "imagenes/sur05-30-19.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano de unicornio de 30cm, colorido y suave, perfecto para inspirar la imaginación de los niños.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores pastel, detalles de unicornio</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-OJITOS",
    nombre: "Peluche elástico mediano 30cm Cojín OJITOS",
    precio: 32000,
    imagen: "imagenes/sur05-30-8.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano en forma de cojín con ojitos de 30cm. Suave y perfecto para descansar o decorar la cama.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, detalles de ojitos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
       {
    id: "BLM-098",
    nombre: "Oso con bordado 55cm",
    precio: 68000,
    imagen: "imagenes/BLM-098.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso de peluche con bordado, tamaño grande 55cm. Suave, elegante y especial para regalos importantes o decoración destacada.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Bordado personalizado, color café claro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-NARANJA",
    nombre: "Leon Despeluque 35cm NARANJA",
    precio: 68500,
    imagen: "imagenes/j192-32-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado naranja de 35cm. Muy divertido, original y de pelo esponjado. Ideal para destacar en tu colección.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, melena voluminosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-ROSA",
    nombre: "Leon Despeluque 35cm ROSA",
    precio: 68500,
    imagen: "imagenes/j192-32-3 (2).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado rosa de 35cm. Muy suave, llamativo y con peinado alocado. Perfecto para regalar o decorar el cuarto.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, melena desordenada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-CAFE",
    nombre: "León Despeluque 35cm CAFE",
    precio: 68500,
    imagen: "imagenes/j192-32-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado café de 35cm. Pelo esponjoso, muy suave y divertido. Perfecto para decorar y regalar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, melena abundante</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "XTIG-50-LEONBLANCO",
    nombre: "Tigre Acostado 50cm LEON BLANCO",
    precio: 76000,
    imagen: "imagenes/xtig-50-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Tigre acostado 50cm, versión león blanco. Grande, suave y de detalles realistas. Ideal para destacar en la decoración o para niños grandes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles de león</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "XTIG-50-PUMA",
    nombre: "Tigre Acostado 50cm PUMA",
    precio: 76000,
    imagen: "imagenes/xtig-50-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Tigre acostado 50cm versión puma. Suave, grande y de diseño realista, perfecto para coleccionistas y niños grandes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Color puma, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "2204-049",
    nombre: "Panda Lentejuelas 40cm",
    precio: 78500,
    imagen: "imagenes/2204-049.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Panda de felpa con lentejuelas de 40cm. Brillante, sofisticado y muy tierno. Perfecto para regalos llamativos o colecciones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica con lentejuelas</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Superficialmente</li>
        <li>Color blanco y negro, detalles brillantes</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Ap3-6206",
    nombre: "Cocodrilo 60cm Con Cobija 160cm*90",
    precio: 82500,
    imagen: "imagenes/ap3-6206.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cocodrilo de peluche 60cm que incluye cobija de 160cm x 90cm. Práctico, divertido y útil para niños o adultos friolentos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: Peluche 60 cm, cobija 160 x 90 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, diseño funcional</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 5 opiniones)</p>
      </div>
    `
  },
  {
    id: "JPE02-40-CAFEOSCURO",
    nombre: "Osos mediano diseños CAFE OSCURO 55cm",
    precio: 86500,
    imagen: "imagenes/jpe02-60-2 (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso mediano de 55cm, diseño café oscuro. Suave, esponjoso y de gran tamaño, ideal para regalos y decoración especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café oscuro, detalles de diseño</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "JPE02-40-CAFECLARO",
    nombre: "Osos mediano diseños 55cm CAFE CLARO",
    precio: 86500,
    imagen: "imagenes/jpe02-60-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso mediano de 55cm, diseño café claro. Muy suave y grande, perfecto para regalar en ocasiones importantes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, detalles decorativos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "cj-3179",
    nombre: "King Kong Gigante 60cm",
    precio: 89500,
    imagen: "imagenes/cj-3179.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche King Kong gigante de 60cm. Impactante, divertido y para los que aman los animales icónicos de gran tamaño.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, detalles de gorila</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "BLM-099",
    nombre: "Oso con Moño Grande 100cm",
    precio: 261000,
    imagen: "imagenes/BLM-099.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 1 metro con moño grande, el regalo perfecto para ocasiones inolvidables y decoración impactante.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, moño decorativo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "BLL-016",
    nombre: "Oso con Corazon Grande 110cm",
    precio: 261000,
    imagen: "imagenes/BLL-016.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante con corazón de 110cm. Muy suave, tierno y perfecto para sorprender en fechas especiales como aniversarios y San Valentín.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 110 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón claro, corazón rojo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "2967-CAFE",
    nombre: "Oso Carmel con Flor 100cm CAFE",
    precio: 261000,
    imagen: "imagenes/2967-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso carmel gigante de 1 metro, color café, con flor. Un detalle romántico, grande y memorable para regalar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, flor decorativa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "2967-BLANCO",
    nombre: "Oso Carmel con Flor 100cm BLANCO",
    precio: 261000,
    imagen: "imagenes/2967.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso carmel gigante de 1 metro, color blanco, con flor. Tierno, elegante y perfecto para sorprender a lo grande.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, flor decorativa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "BL22-01",
    nombre: "Oso con Bufanda grande 120cm",
    precio: 272000,
    imagen: "imagenes/bl22-01.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 120cm con bufanda. Súper suave, abrigador y perfecto para ser el centro de atención en cualquier regalo o celebración especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 120 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón claro, bufanda de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "2535",
    nombre: "Oso moño Sonriente grande 110cm",
    precio: 272000,
    imagen: "imagenes/2535.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 110cm con moño y sonrisa. Ideal para regalar, sorprender y llenar de alegría cualquier ambiente.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 110 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, moño decorativo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
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

   // Manejo de error: producto no encontrado o sin id
  if (!id || !producto) {
    document.title = "Producto no encontrado | Teddy's Fly";
    document.body.innerHTML = `
      <main>
        <h2>Producto no encontrado</h2>
        <p>El producto solicitado no existe o no se especificó un ID válido.</p>
        <a href="tienda.html">Volver a la tienda</a>
      </main>`;
    return;
  }


     // Mostrar información del producto
  document.title = `${producto.nombre} | Teddy's Fly`;
  if (document.getElementById("nombre-producto")) document.getElementById("nombre-producto").textContent = producto.nombre;
  if (document.getElementById("img-principal")) {
    document.getElementById("img-principal").src = producto.imagen;
    document.getElementById("img-principal").alt = producto.nombre;
  }
  if (document.getElementById("descripcion-producto")) document.getElementById("descripcion-producto").innerHTML = producto.descripcion;
  if (document.getElementById("precio-producto")) document.getElementById("precio-producto").textContent = "$" + producto.precio.toLocaleString();

  // Miniaturas (si tienes array de imágenes, acá lo puedes expandir)
  if (document.getElementById("miniaturas")) {
    document.getElementById("miniaturas").innerHTML = ""; // Limpia
    // Si quieres agregar miniaturas, aquí puedes hacerlo (por ahora solo la imagen principal)
    const mini = document.createElement("img");
    mini.src = producto.imagen;
    mini.alt = producto.nombre;
    mini.width = 60;
    mini.style.margin = "4px";
    mini.onclick = () => {
      document.getElementById("img-principal").src = producto.imagen;
    };
    document.getElementById("miniaturas").appendChild(mini);
  }

  // Botón agregar al carrito (puedes enlazar aquí tu lógica de carrito)
  if (document.getElementById("btn-agregar-carrito")) {
    document.getElementById("btn-agregar-carrito").onclick = () => {
      alert("Producto agregado al carrito: " + producto.nombre);
      // Aquí va tu lógica real de carrito
    };
  }
});
document.addEventListener("DOMContentLoaded", function() {
    const btnAgregar = document.getElementById("btn-agregar-carrito");
    if (!btnAgregar) return;

    // Supón que ya tienes info del producto actual en una variable "producto"
    btnAgregar.addEventListener("click", function() {
        // Obtén los datos del producto actual
        // Por ejemplo, si tienes el producto cargado en una variable JS:
        // const producto = {id, nombre, precio, imagen};

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const item = carrito.find(p => p.id === producto.id);
        if (item) {
            item.cantidad += 1;
        } else {
            carrito.push({ 
                id: producto.id, 
                nombre: producto.nombre, 
                precio: producto.precio, 
                imagen: producto.imagen, 
                cantidad: 1
            });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert('Producto añadido al carrito');
    });
});
