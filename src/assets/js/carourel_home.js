document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let isHovered = false;
  
    function handleMouseenter() {
      isHovered = true;
      slides.forEach((slide) => {
        slide.style.transition = 'transform 1.5s ease, box-shadow 0.5s ease';
        slide.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      });
      carousel.classList.add('paused');
    }
  
    function handleMouseleave() {
      isHovered = false;
      slides.forEach((slide) => {
        slide.style.transition = 'transform 1.5s ease, box-shadow 0.5s ease';
        slide.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      });
      carousel.classList.remove('paused');
    }
  
    carousel.addEventListener('mouseenter', handleMouseenter);
    carousel.addEventListener('mouseleave', handleMouseleave);
  
    function updateCarousel() {
      if (!isHovered) {
        const currentTransformValue = parseFloat(getComputedStyle(carousel).getPropertyValue('transform').split(',')[4]);
        const newTransformValue = currentTransformValue - 310; // Adjust 310 based on your slide width
  
        carousel.style.transition = 'transform 1.5s ease';
        carousel.style.transform = `translateX(${newTransformValue}px)`;
      }
    }
  
    function startAutoScroll() {
      setInterval(updateCarousel, 2000); // Adjust the interval as needed
    }
  
    startAutoScroll();
  
    // Appeler updateCarousel immédiatement après le chargement de la page
    updateCarousel();
      // Ajouter l'événement load pour appeler updateCarousel
  window.addEventListener('load', function() {
    updateCarousel();
  });
  });
  