document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
});

// Toggle menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close menu with X button
const closeMenu = document.querySelector('.nav-menu .close-menu');
if (closeMenu) {
  closeMenu.addEventListener('click', function() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
  });
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
  }
});
