'use strict';

// Scroll Magic Controller's      
    let controller = new ScrollMagic.Controller(); // controller for desktop scenes
    let controllerMobile = new ScrollMagic.Controller();// controller for mobile scenes

// Skills section scenes --------------------------------------------------
// Swipe animation    
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
        duration: 950, // the scene last for a scroll distance of 800px
        reverse: true
    })
    .setClassToggle('.skillsContainer','show')
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
    for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i],
                            offset: -85,
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
        offset: -230, 
        reverse: false,
        triggerHook: 0.7 // start a little later
    })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addTo(controller);
    // .addIndicators()

// Little dipper svg draw
    let littleDipper = new ScrollMagic.Scene({
        triggerElement: '.rightWrapper__inner',
        offset: -50,
        duration: 800,
        reverse: true
    })
    .setClassToggle('.svgAnimate', 'pathThree')
    .addTo(controller);
    // littleDipper.addIndicators()


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
    // sceneArrow.addIndicators()


// Projects mobile scenes --------------------------------------------------------
// Fade in
    let revealProjects = document.getElementsByClassName("projectsWrapperMobile");
    for (let i = 0; i < revealProjects.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealProjects[i],
                            offset: 200,
                            reverse: false,
                            triggerHook: 0.9, // start a little later
                        })
                        .setClassToggle(revealProjects[i], 'visible') // add class toggle
                        .addTo(controllerMobile);
                        // .addIndicators({name: "digit " + (i+1) })
    }

// Media querys --------------------------------------------------------------
// // Skills section
//     function skillsAnimation() {
//         let skillsSection = document.querySelector('.skillsContainer');
        
//         skillsSection.style.opacity = '1';
//         skillsSection.style.transition = 'none';
//         skillsSection.style.webkittransition = 'none';
//     };
// // About section 
//     function aboutAnimation() {
//         for (let i = 0; i < slide.length; i++ ) { // Slide text
//             let aboutSectionTop = document.querySelectorAll('.slide-left');

//             aboutSectionTop[i].style.transform = 'none';
//             aboutSectionTop[i].style.webkittransform = 'none';
//             aboutSectionTop[i].style.transition = 'none';
//             aboutSectionTop[i].style.webkittransition = 'none';
//             aboutSectionTop[i].style.opacity = '1';
//         };

//         let aboutSectionBot = document.getElementById('reveal1'); // Fade text

//         aboutSectionBot.style.transform = 'none';
//         aboutSectionBot.style.webkittransform = 'none';
//         aboutSectionBot.style.transition = 'none';
//         aboutSectionBot.style.webkittransition = 'none';
//         aboutSectionBot.style.opacity = '1';
//     };
// // Contact section
//     function contactAnimation() {
//         let contactSection = document.querySelector('.slide-right');
        
//         contactSection.style.transform = 'none'; // Slide text
//     };

// // Media query function
//     let x = window.matchMedia("(max-width: 856px)");
// // Disable enable ScrollMagic controller
//     function myFunction(x) {
//         if (x.matches) { // If media query matches
//         controller.enabled(false); // ScrollMagic
//         skillsAnimation() // Skills section
//         aboutAnimation(); // About section 
//         contactAnimation(); // Contact section
//         } else {
//         controller.enabled(true);
//         }
//         controller.update(true);
//     };
    
//     myFunction(x); // Call listener function at run time
//     //   x.addListener(myFunction) // Attach listener function on state changes 
