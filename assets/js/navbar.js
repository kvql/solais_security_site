document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('section');

  if (!navbar) return;

  function onScroll() {
    if (!hero) {
      // No hero section, always opaque
      navbar.classList.remove('nav--semi');
      return;
    }
    if (window.scrollY === 0) {
      // At top of page, navbar should be solid
      //navbar.classList.remove('nav--semi');
    } else if (window.scrollY < hero.offsetHeight) {
      navbar.classList.add('nav--semi');
    } else {
      navbar.classList.remove('nav--semi');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Initialize on load
});
