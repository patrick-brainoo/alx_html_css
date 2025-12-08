// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Toggle aria-expanded for accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
});
