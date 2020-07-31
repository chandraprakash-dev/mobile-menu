const slideContainer = document.querySelector('#slide-container');
const close = document.querySelector('#close');
console.log(close);

const hamburger = document.querySelector('#hamburger');
console.log(hamburger)

function showSlide() {
    slideContainer.classList.add('show');
}
function closeSlide() {
    slideContainer.classList.remove('show');
}

hamburger.addEventListener('click', showSlide)
close.addEventListener('click', closeSlide)