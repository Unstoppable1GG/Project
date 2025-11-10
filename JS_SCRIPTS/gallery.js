const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalImages = images.length;


function updateSlide() {
    slide.style.transform = `translateX(-${index * 100}%)`;
}


nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalImages; 
    updateSlide();
});


prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlide();
});


setInterval(() => {
    index = (index + 1) % totalImages;
    updateSlide();
}, 5000);
