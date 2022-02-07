// LOCOMOTIVE

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

const target = document.querySelector('#js-target');

scroll.scrollTo(target);


// INTERSECTION OBSERVER


const ratio = .1;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('fade-visible')
      observer.unobserve(entry.target)
    }
  })
}

//Met en place le détecteur de la zone d'affichage sur l'objet observer et déclenche l'appel vers handleIntersect() (tout en incluant les options)
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="fade-"]').forEach(function (r) {
  observer.observe(r);
})

// Header change background
const headerDown = document.querySelector('.header-down');

window.addEventListener('scroll', () => {
  if ( (window.scrollY > 20) && (window.matchMedia("(max-width: 1025px)").matches) ) {
    headerDown.classList.add('header-white')
  } else {
    headerDown.classList.remove('header-white')
  }
})

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