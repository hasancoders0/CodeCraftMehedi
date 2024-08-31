document.addEventListener("DOMContentLoaded", function () {
  // Custom smooth scroll function
  function smoothScroll(target, duration) {
    var start = window.scrollY;
    var end = target.getBoundingClientRect().top;
    var startTime = null;

    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, start, end, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      smoothScroll(target, 2000); // Adjust duration (in milliseconds) for slower scroll
    });
  });


  // Primary Button Effect adding shap innerHTML code
  document.querySelectorAll(".btn-primary").forEach(function (element) {
    element.insertAdjacentHTML(
      "beforeend",
      '<span class="first"></span><span class="second"></span><span class="third"></span><span class="fourth"></span>'
    );
  });

// Slow loading video
// Function to delay the video autoplay

  var video = document.getElementById('backgroundVideo');

  // Delay the video autoplay
  setTimeout(function() {
      // Make the video visible
      video.style.display = 'block';

      // Add autoplay and playsinline attributes
      video.setAttribute('autoplay', 'true');
      video.setAttribute('playsinline', 'true');

      // Attempt to play the video
      video.play().catch(function(error) {
          console.log("Video playback failed:", error);
      });
  }, 3000); // 3-second delay






  // Collapse toggle

  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // sticky header

  var navbar = document.querySelector(".navbar");
  var headerSection = document.querySelector(".header-section");

  window.addEventListener("scroll", function () {
    // Check if the scroll position is greater than or equal to the bottom of the header section
    if (window.scrollY >= headerSection.offsetHeight) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Active style navigation menu
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    var currentPosition = window.scrollY;

    sections.forEach(function (section, index) {
      var sectionTop = section.offsetTop - 50;
      var sectionHeight = section.offsetHeight;

      if (
        currentPosition >= sectionTop &&
        currentPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    });
  });
});







