// ==============================
// script.js - Portfolio Functions
// ==============================

// ======== PARTICLES.JS ========
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#000000" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 5 },
      "image": { "src": "img/github.svg", "width": 100, "height": 100 }
    },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 5, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 6, "direction": "none", "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 200 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
});

// ====== TYPED.JS ======
var typed = new Typed(".typing-text", {
  strings: ["DSA Enthusiast", "C Programmer", "Web Developer", "AI AND ML Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// ====== VANILLA TILT ======
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});

// ====== SKILLS WITH DYNAMIC COLORS ======
const skills = [
  { "name": "C", "icon": "https://img.icons8.com/color/48/000000/c-programming.png", "desc": "Proficient in writing algorithms and system-level programs in C." },
  { "name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png", "desc": "OOP programming, competitive coding, and data structures in C++." },
  { "name": "HTML", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png", "desc": "Markup for creating structured web pages." },
  { "name": "CSS", "icon": "https://img.icons8.com/color/48/000000/css3.png", "desc": "Styling web pages with responsive design using CSS." },
  { "name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png", "desc": "Interactive web pages with JavaScript and DOM manipulation." },
  { "name": "React.js", "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png", "desc": "Building modern web apps using React.js." },
  { "name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png", "desc": "Database management and writing queries using MySQL." },
  { "name": "GitHub", "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png", "desc": "Version control and collaborative development using GitHub." },
  { "name": "Linux", "icon": "https://img.icons8.com/color/48/000000/linux.png", "desc": "Familiar with Linux environment, shell commands, and scripting." },
  { "name": "IoT", "icon": "https://img.icons8.com/?size=100&id=w1LTlZi5YSov&format=png&color=000000", "desc": "Working knowledge of Internet of Things (IoT) projects." },
  { "name": "OOPS", "icon": "assets/images/skills/oops.webp", "desc": "Understanding and applying Object-Oriented Programming concepts." }
];

const percentages = {
  "C": 95, "C++": 90, "HTML": 95, "CSS": 90, "JavaScript": 80, "React.js": 75,
  "MySQL": 85, "GitHub": 80, "Linux": 70, "IoT": 60, "OOPS": 95
};

const skillsContainer = document.getElementById('skillsContainer');
if (skillsContainer) {
  skillsContainer.innerHTML = '';
  skills.forEach(skill => {
    const bar = document.createElement('div');
    bar.className = 'bar';

    // dynamic color based on percentage
    let color;
    const val = percentages[skill.name];
    if (val >= 90) color = '#4caf50';
    else if (val >= 75) color = '#2196f3';
    else if (val >= 50) color = '#ff9800';
    else color = '#f44336';

    bar.innerHTML = `
      <div class="info">
        <img src="${skill.icon}" alt="${skill.name}" style="width:24px; margin-right:0.5rem;">
        <span>${skill.name}</span>
      </div>
      <span class="tooltip">${skill.desc}</span>
      <div class="skill-progress">
        <div class="skill-level" data-width="${val}" style="background:${color}"></div>
      </div>
    `;

    skillsContainer.appendChild(bar);
  });
}

// ====== CERTIFICATE MODALS ======
function openCert(id) {
  const element = document.getElementById(id);
  if (element) element.classList.add('active');
}
function closeCert(id) {
  const element = document.getElementById(id);
  if (element) element.classList.remove('active');
}
window.openCert = openCert;
window.closeCert = closeCert;

// ====== NAVBAR TOGGLE & SCROLL ======
$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');
      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // Smooth Scroll
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear');
  });

  // ====== EMAILJS FORM ======
  $("#contact-form").submit(function (event) {
    emailjs.init("IK1x612AgBGRr5HQ-");
    emailjs.sendForm("service_n7lsxor", "template_wpfc4f6", this)
      .then(function() {
        document.getElementById("contact-form").reset();
        alert("Message sent successfully!");
      }, function(error) {
        alert("Error sending message: " + error);
      });
    event.preventDefault();
  });
});

// ====== SKILL PROGRESS ANIMATION ======
const skillBars = document.querySelectorAll('.skill-level');
let animated = false;

function animateBars() {
  if (animated) return; 
  animated = true;

  skillBars.forEach(bar => {
    const value = bar.getAttribute("data-width");
    bar.style.width = value + "%";
  });
}

window.addEventListener('scroll', () => {
  let section = document.getElementById("skills");
  if (section.getBoundingClientRect().top < window.innerHeight - 100) {
    animateBars();
  }
});

// ====== TAB VISIBILITY CHANGE ======
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ronak Singh";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favihand.png");
  }
});

// ====== SCROLLREVEAL ======
const sr = ScrollReveal({ distance: '50px', duration: 1000, easing: 'ease-in-out', reset: true });

sr.reveal('.home .content h2', { origin: 'top', delay: 200 });
sr.reveal('.home .content p, .home .content .btn', { origin: 'top', delay: 300 });
sr.reveal('.home .image', { origin: 'bottom', delay: 400 });
sr.reveal('.home .social-icons li', { interval: 200 });

sr.reveal('.about .content h3, .about .content .tag', { origin: 'top', delay: 200 });
sr.reveal('.about .content p, .about .content .box-container, .about .content .resumebtn', { origin: 'bottom', delay: 300 });

sr.reveal('.skills .container', { interval: 200 });
sr.reveal('.skills .container .bar', { delay: 400 });

sr.reveal('.education .box, .experience .timeline .container', { interval: 200 });

sr.reveal('.work .box-container .box', { interval: 200 });

sr.reveal('.footer .box-container .box', { interval: 200 });
