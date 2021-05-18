'use strict';

let cardContainer = document.querySelector('.cardRowWrapper');
let cards = document.querySelectorAll('.card__inner');

cards.forEach(el => {
    el.addEventListener('mouseenter', function() {
        cards.forEach(el => el.classList.remove('is-flipped'));
        el.classList.add('is-flipped');
    });
});

cards.forEach(el => {
    el.addEventListener('mouseleave', function() {
        cards.forEach(el => el.classList.remove('is-flipped'));
    });
});