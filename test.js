// AOS Animation Initialization
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

// Typed.js Initialization for the typewriter effect
const typed = new Typed('#typed-name', {
  strings: ["Aman Sharma", "Engineer", "Problem Solver"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  burger.classList.toggle('toggle');
});

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = scrollPercentage + '%';
});

// Parallax effect for header background
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.pageYOffset;
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here (e.g., AJAX request to server)
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});

// Intersection Observer for revealing elements on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(element => revealObserver.observe(element));
