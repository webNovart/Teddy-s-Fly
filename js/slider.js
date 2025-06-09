// Slider automático y manual
const slides = document.querySelectorAll('.slider-slide');
const prevBtn = document.querySelector('.slider-btn-prev');
const nextBtn = document.querySelector('.slider-btn-next');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let sliderInterval = null;

// Crear dots
dotsContainer.innerHTML = "";
slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
    dot.dataset.idx = idx;
    dotsContainer.appendChild(dot);
});

// Funciones
function mostrarSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        dotsContainer.children[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}

function siguienteSlide() {
    let idx = (currentSlide + 1) % slides.length;
    mostrarSlide(idx);
}
function anteriorSlide() {
    let idx = (currentSlide - 1 + slides.length) % slides.length;
    mostrarSlide(idx);
}
function irASlide(idx) {
    mostrarSlide(idx);
}

// Eventos botones
nextBtn.addEventListener('click', () => {
    siguienteSlide();
    reiniciarIntervalo();
});
prevBtn.addEventListener('click', () => {
    anteriorSlide();
    reiniciarIntervalo();
});
dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        irASlide(Number(dot.dataset.idx));
        reiniciarIntervalo();
    });
});

// Automático
function iniciarIntervalo() {
    sliderInterval = setInterval(siguienteSlide, 4500); // Cambia cada 4.5 segundos
}
function reiniciarIntervalo() {
    clearInterval(sliderInterval);
    iniciarIntervalo();
}
iniciarIntervalo();
