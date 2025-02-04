document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
  
    // Add 'scrolled' class when the user scrolls past 50px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

