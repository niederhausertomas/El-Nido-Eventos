document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });