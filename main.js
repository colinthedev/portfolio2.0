'use strict';

const navbarLinks = document.querySelectorAll('.navigation__listWrapper li a');
// console.log(navbarLinks);

navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

function navbarLinkClick(event) {

    smoothScroll(event); // Call smoothscroll func
};

// Burger Button Mobile
const burgerBtn = document.querySelector('.burger'); //Container for burger lines
let burger1open = document.querySelector('.burger__1'); //Burger line 1
let burger2open = document.querySelector('.burger__2'); //Burger line 2
let burger3open = document.querySelector('.burger__3'); //Burger line 3

let headerContainer = document.querySelector('.headerContainer');
let nav = document.querySelector('.navigation-mobile');

burgerBtn.addEventListener('click', () => {
    burger1open.classList.toggle('open'); //Burger line 1
    burger2open.classList.toggle('open'); //Burger line 2
    burger3open.classList.toggle('open'); //Burger line 3

    headerContainer.classList.toggle('active');
    nav.classList.toggle('active');
});

// Smooth scrolling
function smoothScroll(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    const targetId = event.currentTarget.getAttribute('href')==='#' ? "ul" : event.currentTarget.getAttribute("href");
    // console.log(targetId);
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // window.scrollTo(0, distance*(progress/duration) + startPosition);
        window.scrollTo(0, easeInOutExpo(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    };
};
// Scroll to animation function
function easeInOutExpo(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};

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


// Projects container horizontal scrolling DESKTOP
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('horizontalScroll').scrollLeft -= (delta * 40);
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

// Projects container horizontal scrolling TABLET
(function() {
    function scrollHorizontallyTablet(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('horizontalScrollTablet').scrollLeft -= (delta * 40);
        e.preventDefault();
    }
    if (document.getElementById('horizontalScrollTablet').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('horizontalScrollTablet').addEventListener('mousewheel', scrollHorizontallyTablet, false);
        // Firefox
        document.getElementById('horizontalScrollTablet').addEventListener('DOMMouseScroll', scrollHorizontallyTablet, false);
    } else {
        // IE 6/7/8
        document.getElementById('horizontalScrollTablet').attachEvent('onmousewheel', scrollHorizontallyTablet);
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

                        //  ---------- Scroll Magic ----------        

// Skills section scenes --------------------------------------------------
// Swipe animation
let controller = new ScrollMagic.Controller(); // controller for scene + scene2
    
let sceneBackground = new ScrollMagic.Scene({
    triggerElement: '.cardContainer',
    offset: -200, // start this scene -180px from top of container
    duration: 825, // the scene last for a scroll distance of 800px
    reverse: false
})
.setClassToggle('.cardContainer', 'revealed')
// sceneBackground.addIndicators()
.addTo(controller);

// Opacity
let sceneFade = new ScrollMagic.Scene({
    triggerElement: '.skillsContainer',
    offset: -200, // start this scene -180px from top of container
    duration: 1100, // the scene last for a scroll distance of 800px
    reverse: true
})
.setClassToggle('.skillsContainer', 'show')
// sceneFade.addIndicators()
.addTo(controller);


// Lightbulb section scenes --------------------------------------------------
// Fade
let sceneFadeBulb = new ScrollMagic.Scene({
    triggerElement: '.bulbWrapper',
    offset: 750,
    reverse: false
})
.setClassToggle('.bulbWrapper', 'show-bulb')
.addTo(controller);
// sceneFadeBulb.addIndicators()

// Swing
let sceneBulb =  new ScrollMagic.Scene({
    triggerElement: '.bulbWrapper',
    offset: 750,
    reverse: false
})
.setClassToggle('.bulbWrapper', 'swing')
.addTo(controller);
// sceneBulb.addIndicators()


// About section scenes -----------------------------------------------------
// Text slide left
let revealElements = document.getElementsByClassName("slide-left");
for (let i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i],
                        offset: -11,
                        reverse: false,
                        triggerHook: 0.9, // start a little later
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
                    // .addIndicators({name: "digit " + (i+1) })
}

// Content fade in
new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: -150, 
    reverse: false,
    triggerHook: 0.7 // start a little later
})
.setClassToggle("#reveal1", "visible") // add class to reveal
.addTo(controller);
// .addIndicators()


// Contact section scenes ----------------------------------------------------
// Text slide right
let sceneContact = new ScrollMagic.Scene({
    triggerElement: '.slide-right',
    offset: -370, // start this scene -180px from top of container
    reverse: false
})
.setClassToggle('.slide-right', 'textReveal')
.addTo(controller);
// sceneContact.addIndicators()

// Pointing animation 
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

