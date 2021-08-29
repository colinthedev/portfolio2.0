'use strict';

// GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

// Prevent useless warnings in console if class is not found
    gsap.config({
        nullTargetWarn: false,
    });

// Bouncing green monster
    let greenMonstTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contentWrapperRight',
            start: 'center bottom'
        },
    })

    greenMonstTl
        .from('.bounceAway', {opacity: 0, delay: 3.5, duration: 3})

// Stars svg
    let hideStarsDefaults = {
        opacity: 0,
        duration: 2,
    }

    let showStarsDefaults = {
        opacity: 1,
        duration: 2,
    }

    let starsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.rightWrapper',
            start: 'center bottom'
        },
    })

    starsTl
        .from('.star1', {...hideStarsDefaults}, '-=1.5')
        .from('.star2', {...hideStarsDefaults})
        .from('.star3', {...hideStarsDefaults}, '-=1.5')
        .from('.star5', {...hideStarsDefaults})
        .from('.star1', {...showStarsDefaults}, '-=1.5')
        .from('.star2', {...showStarsDefaults})
        .from('.star3', {...showStarsDefaults}, '-=1.5')
        .from('.star5', {...showStarsDefaults})
        .to('.star4', {duration: 3, opacity: 1, x: -2000, y: -1000,}, '+=.5')
        .from('.star', {opacity: 1, x: 0, y: 0}, '+=.5')

// Contact section
    let contactTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contactContainer',
            start: 'top center'
        },
    })
        
    contactTl
        .from('.contactHeading', {duration: 1.5, opacity: 0, y: 100,})