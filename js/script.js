// ==========================================================================
// B2B Industrial - Script Java File (Updated)
// ==========================================================================
// Author: Khushaank Gupta
// Last Updated: 2025-10-07
// Description: A comprehensive JS file for B2B Industrial Solutions
// ==========================================================================

// Initialize all page scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- Hero Slider ---
  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    const slides = sliderContainer.querySelectorAll(".item");
    const nextBtn = document.querySelector(".slider-nav.next");
    const prevBtn = document.querySelector(".slider-nav.prev");
    let currentSlide = 0;
    const slideInterval = 5000;

    if (slides.length > 0) {
      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
        });
      };

      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      };

      let autoSlide = setInterval(nextSlide, slideInterval);

      if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
          clearInterval(autoSlide);
          nextSlide();
          autoSlide = setInterval(nextSlide, slideInterval);
        });

        prevBtn.addEventListener("click", () => {
          clearInterval(autoSlide);
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
          autoSlide = setInterval(nextSlide, slideInterval);
        });
      }
      showSlide(currentSlide);
    }
  }

  // --- Scroll Fade-In Animation ---
  const sections = document.querySelectorAll(".fade-in-section");
  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // --- Client Filtering (for main page featured clients) ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const logoCards = document.querySelectorAll(
    ".main-content .logo-grid-container .logo-card"
  );

  if (filterButtons.length > 0 && logoCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        logoCards.forEach((card) => {
          const isMatch = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("hide", !isMatch);
        });
      });
    });
  }

  // --- Client Search (for full portfolio on main page) ---
  const searchInput = document.querySelector("#clientSearch");
  const fullClientList = document.querySelectorAll(
    ".full-clients-section .logo-card"
  );

  if (searchInput && fullClientList.length > 0) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      fullClientList.forEach((client) => {
        const clientName =
          client.querySelector("h6")?.textContent.toLowerCase() || "";
        const clientCategory = client.dataset.category?.toLowerCase() || "";

        const isMatch =
          clientName.includes(searchTerm) ||
          clientCategory.includes(searchTerm);

        client.classList.toggle("is-hidden", !isMatch);
      });
    });
  }
});
// ==========================================================================
// End of js/script.js
// ==========================================================================