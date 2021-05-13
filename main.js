
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

// Change background color + add text of projects wrapper on hover

// add event listener for images 

// * photosnap.active dine.active nike.active display show to disable images 

// add active class to project wrapper
// add corresponding image on event listener 
// add project title on event listener 
// add links on event listener 


// Content in project on hover 
let projectTitle = document.querySelector('.projectTitle');
let projectLine = document.querySelector('.hoverLine');
let projectRowWrap = document.querySelector('.flexWrapperRow');
let projectColWrap = document.querySelectorAll('.flexWrapperCol');

// Background color + image
let backgroundColor = document.getElementById('photosnap');
let photosnap = document.querySelector('.photosnap');

backgroundColor.addEventListener('mouseenter', function() {
    backgroundColor.classList.add('active');
    photosnap.classList.add('active');

    projectTitle.textContent = 'Photosnap';
    projectTitle.classList.add('active');
    projectLine.classList.add('active');
    projectRowWrap.classList.add('active');
    
    for( i = 0; i < projectColWrap.length; i++)
    projectColWrap[i].classList.add('active');
});

backgroundColor.addEventListener('mouseleave', function() {
    backgroundColor.classList.remove('active');
    photosnap.classList.remove('active');

    projectTitle.textContent = '';
    projectTitle.classList.remove('active');
    projectLine.classList.remove('active');
    projectRowWrap.classList.remove('active');
});






























