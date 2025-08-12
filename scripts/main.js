// Mobile navbar toggle logic
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Create overlay
  let navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  document.body.appendChild(navOverlay);

  function openNav() {
    navLinks.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navOverlay.classList.add('active');
    // Trap focus inside nav menu
    navLinks.querySelector('a').focus();
  }
  function closeNav() {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('active');
  }

  navToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close nav when overlay is clicked
  navOverlay.addEventListener('click', closeNav);

  // Close nav when a nav link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 800) closeNav();
    });
  });

  // Keyboard accessibility: ESC closes menu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeNav();
      navToggle.focus();
    }
  });
});
