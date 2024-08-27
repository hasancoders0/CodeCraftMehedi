// Primary Button Effect adding shap innerHTML code
document.querySelectorAll('.btn-primary').forEach(function(element) {
    element.insertAdjacentHTML('beforeend', '<span class="first"></span><span class="second"></span><span class="third"></span><span class="fourth"></span>');
});

// Collapse toggle
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var headerSection = document.querySelector('.header-section');
    
    window.addEventListener('scroll', function() {
      // Check if the scroll position is greater than or equal to the bottom of the header section
      if (window.scrollY >= headerSection.offsetHeight) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  
   
  