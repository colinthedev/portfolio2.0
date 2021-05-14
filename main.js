
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

//Photosnap Project #1----------------------------------------------------------

// Content in project on hover 
let projectTitle = document.querySelector('.projectTitlePhotosnap');
let projectLine = document.querySelector('.hoverLinePhotosnap');
let projectRowWrap = document.querySelector('.flexWrapperRowPhotosnap');
let projectColWrap = document.querySelectorAll('.flexWrapperColPhotosnap');

// Background color + image
let photosnapBackground = document.querySelector('.photosnapBackground');
let photosnapImg = document.querySelector('.photosnap');

photosnapBackground.addEventListener('mouseenter', function() {
    photosnapBackground.classList.add('active');
    photosnapImg.classList.add('active');
    projectTitle.textContent = 'Photosnap';

    projectTitle.classList.add('active');
    projectLine.classList.add('active');
    projectRowWrap.classList.add('active');
    
    for( i = 0; i < projectColWrap.length; i++)
    projectColWrap[i].classList.add('active');
});

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

//Dine Project #2----------------------------------------------------------------

// Content in project on hover 
let projectTitleDine = document.querySelector('.projectTitleDine');
let projectLineDine = document.querySelector('.hoverLineDine');
let projectRowWrapDine = document.querySelector('.flexWrapperRowDine');
let projectColWrapDine = document.querySelectorAll('.flexWrapperColDine');

let dineBackground = document.querySelector('.dineBackground');
let dineImg = document.querySelector('.dine');

// Mouse In
dineBackground.addEventListener('mouseenter', function() {
    dineBackground.classList.add('active');
    dineImg.classList.add('active');
    projectTitleDine.textContent = 'Dine';

    projectTitleDine.classList.add('active');
    projectLineDine.classList.add('active');
    projectRowWrapDine.classList.add('active');
    
    for( i = 0; i < projectColWrapDine.length; i++)
    projectColWrapDine[i].classList.add('active');

});

// Mouse Out
dineBackground.addEventListener('mouseleave', function() {
    dineBackground.classList.remove('active');
    dineImg.classList.remove('active');

    projectTitleDine.textContent = '';
    projectTitleDine.classList.remove('active');
    projectLineDine.classList.remove('active');
    projectRowWrapDine.classList.remove('active');
});

































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