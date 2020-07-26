/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

let navBar = document.querySelector('.topnav');
let allSections = document.querySelectorAll('section');
let allHref = document.querySelectorAll('a')
let anchor = null;
let sectionCount = document.getElementsByClassName('landing__container').length;
let sectionList = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

function buildNav() {
    for (let i = 0; i < sectionCount; i++) {
        anchor = document.createElement('a');
        j = i + 1;
        anchor.id = 'button' + j;
        sectionList[i] = document.createTextNode(`Section ${i+1}`);
        anchor.appendChild(sectionList[i]);
        navBar.appendChild(anchor);
    }
}

buildNav();






/**
 * End Main Functions
 * Begin Events
 * 
 */

window.addEventListener('scroll', function(event) {
    for (let i = 0; i < sectionCount; i++) {
        elem = allSections.item(i);
        if (isInViewport(elem)) {
            elem.classList.add('your-active-class');
        } else {
            elem.classList.remove('your-active-class')
        }
    }
}, false);


// Scroll to section on link click
const anchors = document.getElementsByTagName('a')
for (let i = 0; i < allSections.length; i++) {
    let element = allSections[i];
    let anchor = anchors[i];
    const top = element.getBoundingClientRect().top + window.pageYOffset
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        window.scroll({ top, behavior: 'smooth' })
    });
}


// Set sections as active