'use strict';

// Random color for line landing page 
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

// --Skills Section--------------------------------------------------------------------

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

//Skills section background animation
let withinViewport = function() {
    if (window.requestAnimationFrame) {  
      // Throttle
      let throttle = function(func, wait, options) {
        let _ = {
          now: Date.now || function() {
            return new Date().getTime();
          }
        };
        let context, args, result;
        let timeout = null;
        let previous = 0;
        if (!options) {
          options = {};
        }
        let later = function() {
          previous = options.leading === false ? 0 : _.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) {
            context = args = null;
          }
        };
        return function() {
          let now = _.now();
          if (!previous && options.leading === false) {
            previous = now;
          }
          let remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      };
      
      // requestAnimationFrame
      let _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
  
      // Global class for revealing element
      let revealer = document.querySelectorAll('.cardContainer');
      let hidden = document.querySelector('.hidden');
  
      // Get the viewport (window) dimensions
      let getViewportSize = function() {
        return {
          width: window.document.documentElement.clientWidth,
          height: window.document.documentElement.clientHeight
        };
      };
  
      // Get the current scoll position
      let getCurrentScroll = function() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      };
  
      // Get element dimensions and position
      let getElemInfo = function(elem) {
        let offsetTop = 0;
        let offsetLeft = 0;
        let offsetHeight = elem.offsetHeight;
        let offsetWidth = elem.offsetWidth;
  
        do {
          if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
          }
          if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
          }
        } while ((elem = elem.offsetParent) !== null);
  
        return {
          top: offsetTop,
          left: offsetLeft,
          height: offsetHeight,
          width: offsetWidth
        };
      };
  
      // Check visibility of the element in the viewport
      let checkVisibility = function(elem) {
        let viewportSize = getViewportSize();
        let currentScroll = getCurrentScroll();
        let elemInfo = getElemInfo(elem);
        let spaceOffset = 0.2;
        let elemHeight = elemInfo.height;
        let elemWidth = elemInfo.width;
        let elemTop = elemInfo.top;
        let elemLeft = elemInfo.left;
        let elemBottom = elemTop + elemHeight;
        let elemRight = elemLeft + elemWidth;
  
        let checkBoundaries = function() {
          // Defining the element boundaries and extra space offset
          let top = elemTop + elemHeight * spaceOffset;
          let left = elemLeft + elemWidth * spaceOffset;
          let bottom = elemBottom - elemHeight * spaceOffset;
          let right = elemRight - elemWidth * spaceOffset;
  
          // Defining the window boundaries and window offset
          let wTop = currentScroll.y + 0;
          let wLeft = currentScroll.x + 0;
          let wBottom = currentScroll.y - 0 + viewportSize.height;
          let wRight = currentScroll.x - 0 + viewportSize.width;
  
          // Check if the element is within boundary
          return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
        };
  
        return checkBoundaries();
      };
  
      // Run a loop with checkVisibility() and add / remove classes to the elements
      let toggleElement = function() {
        for (let i = 0; i < revealer.length; i++) {
          if (checkVisibility(revealer[i])) {
            revealer[i].classList.add('revealed');
            hidden.classList.remove('hidden');
          } else {
            revealer[i].classList.remove('revealed');
            hidden.classList.add('hidden');
          }
        }
      };
  
      // Throttle events and requestAnimationFrame
      let scrollHandler = throttle(function() {
        _requestAnimationFrame(toggleElement);
      }, 300);
  
      let resizeHandler = throttle(function() {
        _requestAnimationFrame(toggleElement);
  
        // For demo purposes only
        // fullscreenIntro();
      }, 300);
  
      scrollHandler();
  
      // Listening for events
      if (window.addEventListener) {
        addEventListener('scroll', scrollHandler, false);
        addEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', scrollHandler);
        window.attachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = scrollHandler;
        window.onresize = resizeHandler;
      }
    }
  
    // // FOR DEMO PURPOSES ONLY
    // // Makes fullscreen intro on any device so user is forced to scroll
    // let fullscreenIntro = function() {
    //     let fullscreen = document.querySelectorAll('.fullscreen');
    //   for (let i = 0; i < fullscreen.length; i++) {
    //     fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
    //   }
    // };
    // fullscreenIntro();
  
    // return withinViewport;
  
}();















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