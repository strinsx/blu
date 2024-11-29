let currentIndex = 0;
const slides = document.querySelectorAll('.slide'); // Select all individual slides
const slidesContainer = document.querySelector('.slides'); // Select the slides container
const totalSlides = slides.length;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Optional: Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);





