// MOBILE MENU
let nav = document.querySelector('nav');
let body = document.querySelector('body');
let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');

// Fixed Nav
const navigation = document.querySelector('.navigation');
const navHeight = navigation.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navigation.classList.add('fix-nav');
  } else {
    navigation.classList.remove('fix-nav');
  }
});

menuBtn.onclick = function () {
  navBar.classList.add('active');
  menuBtn.style.opacity = '0';
  menuBtn.style.pointerEvents = 'none';
  body.style.overflow = 'hidden';
};

cancelBtn.onclick = function () {
  navBar.classList.remove('active');
  menuBtn.style.opacity = '1';
  menuBtn.style.pointerEvents = 'auto';
  body.style.overflow = 'auto';
};

// Side navigation bar close while we click on navigation links
let navLinks = document.querySelectorAll('.menu li a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    navBar.classList.remove('active');
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
    body.style.overflow = 'auto';
  });
}

var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Smoth Scrolling
const links = [...document.querySelectorAll('.scroll-link')];

links.map((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains('fix-nav');
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });
  });
});
