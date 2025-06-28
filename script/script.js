document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  function toggleHeaderTransparency() {
    if (window.scrollY > 100) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('transparent');
    }
  }

  window.addEventListener('scroll', toggleHeaderTransparency);

  const toggleButton = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  toggleButton.addEventListener('click', function (e) {
    e.preventDefault(); 
    mobileMenu.classList.toggle('active');
  });
});
