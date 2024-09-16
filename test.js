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

// Initialize Splitting.js
Splitting();

// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { duration: 0.23, left: e.pageX - 10, top: e.pageY - 10 });
  gsap.to(follower, { duration: 0.3, left: e.pageX - 4, top: e.pageY - 4 });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate skill progress bars
gsap.utils.toArray('.skill-progress').forEach(progress => {
  gsap.to(progress, {
    width: progress.getAttribute('data-progress') + '%',
    scrollTrigger: {
      trigger: progress,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    }
  });
});

// Animate split text
gsap.utils.toArray('[data-splitting]').forEach(text => {
  let chars = text.querySelectorAll('.char');
  gsap.from(chars, {
    scrollTrigger: {
      trigger: text,
      start: 'top 80%',
      end: 'bottom 20%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.05,
    duration: 0.5,
    ease: 'back.out(1.7)',
  });
});

// 3D tilt effect on project items
VanillaTilt.init(document.querySelectorAll('.project-item'), {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
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
