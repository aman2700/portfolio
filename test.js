// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

// Custom Cursor Implementation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorFollower.style.left = `${e.clientX}px`;
  cursorFollower.style.top = `${e.clientY}px`;
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAP Animations for Skills Progress Bars
gsap.utils.toArray('.progress').forEach(progress => {
  gsap.fromTo(progress, {
    width: '0%',
  }, {
    width: progress.getAttribute('data-percentage') + '%',
    scrollTrigger: {
      trigger: progress,
      start: 'top 80%',
    },
    duration: 2,
    ease: 'power2.out',
  });
});

// Typed.js animation for name
new Typed('#typed', {
  strings: ['Aman Sharma', 'Engineer', 'Developer', 'Innovator'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// Particles.js Initialization
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#00FFFF"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00FFFF",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  }
});

// Contact Form Submission Handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implement form submission logic (e.g., using Fetch API or AJAX)
  alert('Thank you for your message!');
  form.reset();
});

// Parallax effect
window.addEventListener('scroll', () => {
  const parallax = document.querySelectorAll('.parallax');
  let scrollPosition = window.pageYOffset;

  parallax.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// Tilt effect on project cards
VanillaTilt.init(document.querySelectorAll(".project-item"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

// Scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

scrollToTopButton.addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: 'smooth'});
});
