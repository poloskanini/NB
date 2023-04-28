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
const ratioBis = .1;

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

// Header change background

//TODO: To be fixed
// const headerDown = document.querySelector('.header-down');

// window.addEventListener('scroll', function(event) {
//   if (window.scrollY > 20) {
//     console.log('Coucou');
//     headerDown.classList.add('header-white')
//   } else {
//     headerDown.classList.remove('header-white')
//   }
// });

//LOADER
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    if(sessionStorage.getItem('premierChargement') === null){
        loader.classList.add('fondu-out');
    } else {
        loader.style.display = "none"; 
    }
  
    sessionStorage.setItem('premierChargement', 'done');
})

//& LOCOMOTIVE
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  mobile: { // For mobile devices
    smooth: true
},
tablet: { // For tablet devices
    smooth: true
}
});


// SCROLL TO A SPECIFIC POINT using LocomotiveScroll

// My clicked links
const burgerMenu = document.getElementById('burgerMenu');
const firstItem = document.getElementById('firstItem');
const secondItem = document.getElementById('secondItem');
const thirdItem = document.getElementById('thirdItem');

// My targets
const menu = document.getElementById('menu');
const projects__target = document.getElementById('projects__target'); // 
const competences = document.getElementById('competences');
const aboutMe = document.getElementById('about-me');

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
    duration: "500",
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
