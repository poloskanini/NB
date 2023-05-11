// INTERSECTION OBSERVER REVEAL-VISIBLE
const ratio = .1;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
  observer.observe(r);
})

// INTERSECTION OBSERVER VISIBLE
const ratioBis = .6;

const optionsBis = {
  root: null,
  // rootMargin: '-50px',
  rootMargin: '0px',
  threshold: ratioBis
}

const handleIntersectBis = function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > ratioBis) {
      entry.target.classList.add('visible');
      observerBis.unobserve(entry.target);
    }
  })
}

const observerBis = new IntersectionObserver(handleIntersectBis, optionsBis);
document.querySelectorAll('.item').forEach(function(r) {
  observerBis.observe(r);
})

//LOADER
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('loaded');
})

//& LOCOMOTIVE
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  mobile: { // For mobile devices
    smooth: true,
    breakpoint: 0,
    inertia: 0.8,
    getDirection: true,
  },
  tablet: { // For tablet devices
    smooth: true,
    breakpoint: 0,
    inertia: 0.8,
    getDirection: true,
}
});


// SCROLL TO A SPECIFIC POINT using LocomotiveScroll

// My clicked links
const burgerMenu = document.getElementById('burgerMenu');
const firstItem = document.getElementById('firstItem');
const secondItem = document.getElementById('secondItem');
const thirdItem = document.getElementById('thirdItem');
const fourthItem = document.getElementById('fourthItem');

// My targets
const menu = document.getElementById('menu');
const projects__target = document.getElementById('projects__target'); // 
const competences = document.getElementById('competences');
const aboutMe = document.getElementById('about-me');
const contact = document.getElementById('contact');

burgerMenu.addEventListener('click', () => {
  scroll.scrollTo(menu, {
    duration: "500",
    easing: [0.25, 0.0, 0.35, 1.0],
  });
})

firstItem.addEventListener('click', () => {
  scroll.scrollTo(projects__target, {
    duration: "1000",
    easing: [0.25, 0.0, 0.35, 1.0],

  });
})

secondItem.addEventListener('click', () => {
  scroll.scrollTo(competences, {
    duration: "1000",
    easing: [0.25, 0.0, 0.35, 1.0],
  });
})

thirdItem.addEventListener('click', () => {
  scroll.scrollTo(aboutMe, {
    duration: "3500",
    easing: [0.25, 0.0, 0.35, 1.0],
  });
})

fourthItem.addEventListener('click', () => {
  scroll.scrollTo(contact, {
    duration: "3500",
    easing: [0.25, 0.0, 0.35, 1.0],
  });
})


// HeaderDown Change Background (change whand projects__target appears on screen)

const headerDown = document.querySelector('.header-down');
const hero = document.querySelector('.hero');

const headerDownOptions = {
  rootMargin: "0px 0px 0px 0px"
};

const headerDownObserver = new IntersectionObserver(function(entries, headerDownObserver) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      headerDown.classList.add('header-white')
    }
  })
}, headerDownOptions);

headerDownObserver.observe(menu);

// Background image moving on scroll
// let overlay = document.getElementById('overlay');
// window.addEventListener("scroll", function() {
//   overlay.style.backgroundPosition = +window.pageYOffset+"px";
// });

//CURSOR CUSTOMIZED
const cursor = document.querySelector('.cursor-inner');
const cursor2 = document.querySelector('.cursor-outer');
document.addEventListener("mousemove", e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
})