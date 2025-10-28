(() => {
  "use strict";

  const updateHeaderOnScroll = () => {
    const header = document.getElementById("primary-header");
    if (!header) {
      return;
    }

    if (window.scrollY > 50) {
      header.classList.add("fixed-top");
    } else {
      header.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  };

  const initTestimonialSlider = () => {
    const testimonialSlider = document.querySelector(".testimonial-swiper");
    if (!testimonialSlider || typeof Swiper === "undefined") {
      return;
    }

    new Swiper(testimonialSlider, {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateHeaderOnScroll();
    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
    initTestimonialSlider();
  });
})();

