'use strict';
// Fix for nav not working on desktops -> firefox 
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        // Smooth scrolling
            function smoothScroll(event) {
                event.preventDefault();
                // console.log(event.currentTarget);
                const targetId = event.currentTarget.getAttribute('href')==='#' ? "ul" : event.currentTarget.getAttribute("href");
                // console.log(targetId);
                const targetPosition = document.querySelector(targetId).offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
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
        
        // Smooth scroll for mobile
            const navbarLinks = document.querySelectorAll('.navigation__listWrapper li a');
            // console.log(navbarLinks);
            navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));
        
            function navbarLinkClick(event) {
                smoothScroll(event); // Call smoothscroll func
            };
    };

// Projects - + slider

const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');

    slider1.addEventListener('click', function() {
        document.getElementById('horizontalScroll').scrollLeft -= 500;
    });
    slider2.addEventListener('click', function() {
        document.getElementById('horizontalScroll').scrollLeft += 500;
    });

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

// Projects hover
let slide = ['Photosnap', 'Dine', 'Nike'] ;
for (let i = 0; i < slide.length; i++ ) {
    let lowercaseName = slide[i].toLowerCase();
    let projectTitle = document.querySelector('.projectTitle' + slide[i]);
    let projectLine = document.querySelector('.hoverLine' + slide[i]);
// View live View code text wrapper
    let projectRowWrap = document.querySelector('.flexWrapperRow' + slide[i]);
// Background color + image
    let background = document.querySelector('.' + lowercaseName + 'Background');
    let img = document.querySelector('.' + lowercaseName);
// Mouse in add background color title and links
    background.addEventListener('mouseenter', function() {
        background.classList.add('active');
        img.classList.add('active');
        projectTitle.textContent = slide[i];
        projectTitle.classList.add('active');
        projectLine.classList.add('active');
        projectRowWrap.classList.add('active');
    });
// Mouse out remove all
    background.addEventListener('mouseleave', function() {
        background.classList.remove('active');
        img.classList.remove('active');
        background.classList.remove('active');
        img.classList.remove('active');
        projectTitle.textContent = '';
        projectTitle.classList.remove('active');
        projectLine.classList.remove('active');
        projectRowWrap.classList.remove('active');
    });
};

// Skills Section -------------------------------------------------------------

// Skills section change font "My current skillset"
    let newString = document.getElementById('colorFont').innerHTML = 'My current skillset'.replace('My', '<span style="color: #fff;">My</span>');

// Skills section card component
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

//  Scroll Magic Controller       
    let controller = new ScrollMagic.Controller(); // controller for scenes

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
    // sceneArrow.addIndicators()

// Chevron back to top
    let toTop = document.querySelector('.chevronUp');

    toTop.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

// Media querys --------------------------------------------------------------
    // Skills section
        function skillsAnimation() {
            let skillsSection = document.querySelector('.skillsContainer');
            
            skillsSection.style.opacity = '1';
            skillsSection.style.transition = 'none';
            skillsSection.style.webkittransition = 'none';
        };
    // About section 
        function aboutAnimation() {
            for (let i = 0; i < slide.length; i++ ) { // Slide text
                let aboutSectionTop = document.querySelectorAll('.slide-left');

                aboutSectionTop[i].style.transform = 'none';
                aboutSectionTop[i].style.webkittransform = 'none';
                aboutSectionTop[i].style.transition = 'none';
                aboutSectionTop[i].style.webkittransition = 'none';
                aboutSectionTop[i].style.opacity = '1';
            };

            let aboutSectionBot = document.getElementById('reveal1'); // Fade text

            aboutSectionBot.style.transform = 'none';
            aboutSectionBot.style.webkittransform = 'none';
            aboutSectionBot.style.transition = 'none';
            aboutSectionBot.style.webkittransition = 'none';
            aboutSectionBot.style.opacity = '1';
        };
    // Contact section
        function contactAnimation() {
            let contactSection = document.querySelector('.slide-right');
            
            contactSection.style.transform = 'none'; // Slide text
        };

    // Media query function
        let x = window.matchMedia("(max-width: 856px)");
    // Disable enable ScrollMagic controller
        function myFunction(x) {
            if (x.matches) { // If media query matches
            controller.enabled(false); // ScrollMagic
            skillsAnimation() // Skills section
            aboutAnimation(); // About section 
            contactAnimation(); // Contact section
            } else {
            controller.enabled(true);
            }
            controller.update(true);
        };
        
        myFunction(x); // Call listener function at run time
        //   x.addListener(myFunction) // Attach listener function on state changes 




