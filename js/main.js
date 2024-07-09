let currentSlides = [0, 0]; 

function showSlide(carouselIndex, slideIndex) {
    const carousel = document.getElementById(`carousel${carouselIndex}`);
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        currentSlides[carouselIndex - 1] = 0;
    } else if (slideIndex < 0) {
        currentSlides[carouselIndex - 1] = totalSlides - 1;
    } else {
        currentSlides[carouselIndex - 1] = slideIndex;
    }

    const carouselInner = carousel.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlides[carouselIndex - 1] * 100}%)`;
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex - 1] + 1);
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex - 1] - 1);
}