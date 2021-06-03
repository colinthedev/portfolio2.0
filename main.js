'use strict';

// Smooth scrolling
  // 1. Add event listener to common parent element 
  // 2. Determine what element originated the event
  document.querySelector('.navigation__listWrapper').addEventListener('click', function(e) {
    // console.log(e.target);
    e.preventDefault();
  
    //Matching strategy
    if(e.target.classList.contains('nav__link')) {
      // console.log('LINK');
  
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
      // console.log(id);
    };
  });

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

// Projects container horizontal scrolling MOBILE
(function() {
    function scrollHorizontallyMobile(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('horizontalScrollMobile').scrollLeft -= (delta * 40);
        e.preventDefault();
    }
    if (document.getElementById('horizontalScrollMobile').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('horizontalScrollMobile').addEventListener('mousewheel', scrollHorizontallyMobile, false);
        // Firefox
        document.getElementById('horizontalScrollMobile').addEventListener('DOMMouseScroll', scrollHorizontallyMobile, false);
    } else {
        // IE 6/7/8
        document.getElementById('horizontalScrollMobile').attachEvent('onmousewheel', scrollHorizontallyMobile);
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
.addTo(controller);
// sceneBackground.addIndicators();

// Opacity
let sceneFade = new ScrollMagic.Scene({
    triggerElement: '.skillsContainer',
    offset: -200, // start this scene -180px from top of container
    duration: 1100, // the scene last for a scroll distance of 800px
    reverse: true
})
.setClassToggle('.skillsContainer', 'show')
.addTo(controller);
// sceneFade.addIndicators()


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
                        offset: 35,
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
    offset: -105, 
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