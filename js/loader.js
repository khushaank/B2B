// ==========================================================================
// B2B Industrial - Loader and Scripts Initializer
// ==========================================================================
// Author: Khushaank Gupta
// Last Updated: 2025-10-06
// Description: A comprehensive JS file for loading fragments (header/footer)
//              and initializing their interactive scripts.
// ==========================================================================

/**
 * Initializes all scripts related to the header after it has been loaded.
 * This includes active link highlighting, mobile navigation, and scroll effects.
 */
const initializeHeaderScripts = () => {
  const mainNav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navOverlay = document.querySelector(".nav-overlay");
  const header = document.querySelector(".site-header");

  // Graceful exit if the main navigation element isn't found
  if (!mainNav) {
    console.error("Header scripts failed: .main-nav element not found.");
    return;
  }

  // --- Active Link Highlighting ---
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  let isSubPageOfServices = false;

  const servicesDropdown = mainNav.querySelector(".dropdown");
  if (servicesDropdown) {
    const serviceLinks = servicesDropdown.querySelectorAll(".dropdown-menu a");
    // Check if the current page is one of the services sub-pages
    for (const link of serviceLinks) {
      if (link.getAttribute("href") === currentPage) {
        isSubPageOfServices = true;
        break;
      }
    }
  }

  const topLevelLinks = mainNav.querySelectorAll(".nav-links > li");
  topLevelLinks.forEach((li) => {
    const link = li.querySelector("a");
    if (!link) return;

    // If it's a services sub-page, highlight the main "Services" tab
    if (isSubPageOfServices && li.classList.contains("dropdown")) {
      li.classList.add("active");
    } else if (link.getAttribute("href") === currentPage) {
      // Otherwise, highlight the direct matching link
      li.classList.add("active");
    }
  });

  // --- Mobile Navigation Toggle ---
  if (navToggle && navOverlay) {
    const toggleMenu = () => {
      mainNav.classList.toggle("active");
      navToggle.classList.toggle("active");
      document.body.classList.toggle("nav-open"); // Prevents scrolling when menu is open
    };
    navToggle.addEventListener("click", toggleMenu);
    navOverlay.addEventListener("click", toggleMenu);
  }

  // --- Mobile Dropdown Navigation Fix ---
  const servicesMainLink = mainNav.querySelector(".dropdown > a");
  if (servicesMainLink && navToggle) {
    servicesMainLink.addEventListener("click", (e) => {
      // Check if the mobile nav toggle is visible, which indicates a mobile view.
      // This is more reliable than checking window width.
      if (getComputedStyle(navToggle).display !== "none") {
        // On mobile, prevent navigating to the services page.
        e.preventDefault();
        // Instead, toggle the dropdown submenu.
        const parentDropdown = e.target.closest(".dropdown");
        if (parentDropdown) {
          parentDropdown.classList.toggle("open");
        }
      }
    });
  }

  // --- Header Shadow on Scroll ---
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    });
  }
};

/**
 * Fetches HTML content from a file and injects it into a specified placeholder element.
 * @param {string} filePath - The path to the HTML fragment file.
 * @param {string} placeholderId - The ID of the element to inject the HTML into.
 */
const loadHTML = (filePath, placeholderId) => {
  fetch(filePath)
    .then((response) =>
      response.ok ? response.text() : Promise.reject(response.status)
    )
    .then((data) => {
      const placeholder = document.getElementById(placeholderId);
      if (placeholder) {
        placeholder.innerHTML = data;
      }
      // After injecting the header, initialize its scripts
      if (placeholderId === "header-placeholder") {
        initializeHeaderScripts();
      }
    })
    .catch((error) => console.error(`Error loading ${filePath}:`, error));
};

// --- Main Execution ---
// When the DOM is fully loaded, load the header and footer into their placeholders.
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("fragments/header.html", "header-placeholder");
  loadHTML("fragments/footer.html", "footer-placeholder");
});

// ==========================================================================
// End of js/loader.js
// ==========================================================================
