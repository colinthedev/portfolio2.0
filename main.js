// Random color for line 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeColor(){
    let line = document.querySelector(".lineContainer__line");

    line.style.backgroundColor= getRandomColor();
}; 
setInterval(changeColor,1000);


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

//Nike Project #3----------------------------------------------------------------

// Content in project on hover 
let projectTitleNike = document.querySelector('.projectTitleNike');
let projectLineNike = document.querySelector('.hoverLineNike');
let projectRowWrapNike = document.querySelector('.flexWrapperRowNike');
let projectColWrapNike = document.querySelectorAll('.flexWrapperColNike');

let nikeBackground = document.querySelector('.nikeBackground');
let nikeImg = document.querySelector('.nike');

// Mouse In
nikeBackground.addEventListener('mouseenter', function() {
    nikeBackground.classList.add('active');
    nikeImg.classList.add('active');
    projectTitleNike.textContent = 'Nike';

    projectTitleNike.classList.add('active');
    projectLineNike.classList.add('active');
    projectRowWrapNike.classList.add('active');
    
    for( i = 0; i < projectColWrapNike.length; i++)
    projectColWrapNike[i].classList.add('active');

});

// Mouse Out
nikeBackground.addEventListener('mouseleave', function() {
    nikeBackground.classList.remove('active');
    nikeImg.classList.remove('active');

    projectTitleNike.textContent = '';
    projectTitleNike.classList.remove('active');
    projectLineNike.classList.remove('active');
    projectRowWrapNike.classList.remove('active');
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