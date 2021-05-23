'use strict';

// Generates a random color for line landing page 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; // random color 1-16
};

function changeColor(){ // Select the line and add getRandomColor function to it
    let line = document.querySelector(".lineContainer__line");

    line.style.backgroundColor= getRandomColor();
}; 
setInterval(changeColor,1000);// Change color every 1 second


// Projects container horizontal scrolling 
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('horizontalScroll').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('horizontalScroll').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('horizontalScroll').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('horizontalScroll').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('horizontalScroll').attachEvent('onmousewheel', scrollHorizontally);
    }
})();

//Photosnap Project #1 ---------------------------------------------------------

// Content in project on hover 
let projectTitle = document.querySelector('.projectTitlePhotosnap');
let projectLine = document.querySelector('.hoverLinePhotosnap');
let projectRowWrap = document.querySelector('.flexWrapperRowPhotosnap');

// Background color + image
let photosnapBackground = document.querySelector('.photosnapBackground');
let photosnapImg = document.querySelector('.photosnap');

// Mouse in add background color title and links
photosnapBackground.addEventListener('mouseenter', function() {
    photosnapBackground.classList.add('active');
    photosnapImg.classList.add('active');
    projectTitle.textContent = 'Photosnap';

    projectTitle.classList.add('active');
    projectLine.classList.add('active');
    projectRowWrap.classList.add('active');
});

// Mouse out remove all
photosnapBackground.addEventListener('mouseleave', function() {
    photosnapBackground.classList.remove('active');
    photosnapImg.classList.remove('active');

    dineBackground.classList.remove('active');
    dineImg.classList.remove('active');

    projectTitle.textContent = '';
    projectTitle.classList.remove('active');
    projectLine.classList.remove('active');
    projectRowWrap.classList.remove('active');
});

//Dine Project #2 ---------------------------------------------------------------

// Content in project on hover 
let projectTitleDine = document.querySelector('.projectTitleDine');
let projectLineDine = document.querySelector('.hoverLineDine');
let projectRowWrapDine = document.querySelector('.flexWrapperRowDine');

let dineBackground = document.querySelector('.dineBackground');
let dineImg = document.querySelector('.dine');

// Mouse in add background color title and links
dineBackground.addEventListener('mouseenter', function() {
    dineBackground.classList.add('active');
    dineImg.classList.add('active');
    projectTitleDine.textContent = 'Dine';

    projectTitleDine.classList.add('active');
    projectLineDine.classList.add('active');
    projectRowWrapDine.classList.add('active');
});

// Mouse out remove all
dineBackground.addEventListener('mouseleave', function() {
    dineBackground.classList.remove('active');
    dineImg.classList.remove('active');

    projectTitleDine.textContent = '';
    projectTitleDine.classList.remove('active');
    projectLineDine.classList.remove('active');
    projectRowWrapDine.classList.remove('active');
});

//Nike Project #3 ---------------------------------------------------------------

// Content in project on hover 
let projectTitleNike = document.querySelector('.projectTitleNike');
let projectLineNike = document.querySelector('.hoverLineNike');
let projectRowWrapNike = document.querySelector('.flexWrapperRowNike');

let nikeBackground = document.querySelector('.nikeBackground');
let nikeImg = document.querySelector('.nike');

// Mouse in add background color title and links
nikeBackground.addEventListener('mouseenter', function() {
    nikeBackground.classList.add('active');
    nikeImg.classList.add('active');
    projectTitleNike.textContent = 'Nike';

    projectTitleNike.classList.add('active');
    projectLineNike.classList.add('active');
    projectRowWrapNike.classList.add('active');
});

// Mouse out remove all
nikeBackground.addEventListener('mouseleave', function() {
    nikeBackground.classList.remove('active');
    nikeImg.classList.remove('active');

    projectTitleNike.textContent = '';
    projectTitleNike.classList.remove('active');
    projectLineNike.classList.remove('active');
    projectRowWrapNike.classList.remove('active');
});

// --Skills Section -------------------------------------------------------------

//Skills section change font "My current skillset"
let newString = document.getElementById('colorFont').innerHTML = 'My current skillset'.replace('My', '<span style="color: #fff;">My</span>');

//Skills section card component
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

// Animation scenes with ScrollMagic ---------------------------------------

// SceneBackground add swipe animation to card container 
let controller = new ScrollMagic.Controller(); // controller for scene + scene2
    
let sceneBackground = new ScrollMagic.Scene({
    triggerElement: '.cardContainer',
    offset: -200, // start this scene -180px from top of container
    duration: 825, // the scene last for a scroll distance of 800px
    reverse: false
})
.setClassToggle('.cardContainer', 'revealed')
.addTo(controller);
// sceneBackground.addIndicators();

// SceneFade toggle opacity on main skill container --------------------------
let sceneFade = new ScrollMagic.Scene({
    triggerElement: '.skillsContainer',
    offset: -200, // start this scene -180px from top of container
    duration: 1100, // the scene last for a scroll distance of 800px
    reverse: true
})
.setClassToggle('.skillsContainer', 'show')
.addTo(controller);
// sceneFade.addIndicators();

// SceneBulb swinging light-bulb about section-------------------------------
let sceneFadeBulb = new ScrollMagic.Scene({
    triggerElement: '.bulbWrapper',
    offset: 300,
    reverse: false
})
.setClassToggle('.bulbWrapper', 'show-bulb')
sceneFadeBulb.addIndicators()
.addTo(controller);

let sceneBulb =  new ScrollMagic.Scene({
    triggerElement: '.bulbWrapper',
    offset: 300,
    reverse: false
})
.setClassToggle('.bulbWrapper', 'swing')
sceneBulb.addIndicators()
.addTo(controller);

// SceneContact slide in text from left--------------------------------------
let sceneContact = new ScrollMagic.Scene({
    triggerElement: '.slide-right',
    offset: -340, // start this scene -180px from top of container
    reverse: false
})
.setClassToggle('.slide-right', 'textReveal')
.addTo(controller);
// sceneContact.addIndicators()


// SceneArrow add pointing animation ---------------------------------------
let sceneArrow = new ScrollMagic.Scene({
    triggerElement: '.contactArrow',
    offset: -80, // start this scene -180px from top of container
    duration: 1100, // the scene last for a scroll distance of 800px
    reverse: true
})
.setClassToggle('.contactArrow', 'showArrow')
.addTo(controller);
// sceneArrow.addIndicators();































// function projectsActive() {
//     projectTitle.classList.add('active');
//     projectLine.classList.add('active');
//     projectRowWrap.classList.add('active');
    
//     for( i = 0; i < projectColWrap.length; i++)
//     projectColWrap[i].classList.add('active');
// };


// function projectsInactive() {
//     photosnapBackground.classList.remove('active');
//     photosnapImg.classList.remove('active');

//     dineBackground.classList.remove('active');
//     dineImg.classList.remove('active');

//     projectTitle.textContent = '';
//     projectTitle.classList.remove('active');
//     projectLine.classList.remove('active');
//     projectRowWrap.classList.remove('active');
// }