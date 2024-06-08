document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });