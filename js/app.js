'use strict'

function slidesPlugin(activeSlide) {
    let slides = document.querySelectorAll('.slide');
    let bg = document.querySelector('#bod');

    activeSlide = Math.floor(Math.random() * ((slides.length) - 0) + 0);
    slides[activeSlide].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
            if (slide.dataset.index == 2) {
                bg.className = 'bodyBG1'
            } if (slide.dataset.index == 3) {
                bg.className = 'bodyBG2'
            } if (slide.dataset.index == 4) {
                bg.className = 'bodyBG3'
            } if (slide.dataset.index == 5) {
                bg.className = 'bodyBG4'
            } if (slide.dataset.index == 1) {
                bg.className = 'bodyBG'
            }
        })
    })

    let clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin();