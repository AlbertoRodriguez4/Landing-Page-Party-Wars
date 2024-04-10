const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    carousel.scroll({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    carousel.scroll({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
});
