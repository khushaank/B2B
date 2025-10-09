# B2B Industrial Solutions Website

This is a professional, multi-page corporate website for B2B Industrial Solutions, an ISO 9001:2015-certified enterprise. The site showcases the company's comprehensive industrial services, highlights its expertise, and provides multiple contact points for potential clients.

---

### **Live Demo:** [**khushaank.github.io/b2b**](https://khushaank.github.io/b2b)

---

## ✨ Features

* **Fully Responsive Design:** The layout seamlessly adapts to all screen sizes, from mobile phones to desktop monitors.
* **Dynamic Content Loading:** The header and footer are loaded dynamically across all pages using JavaScript's `fetch` API, making site-wide updates easy.
* **Interactive Hero Slider:** The homepage features an auto-playing hero slider with manual navigation controls to showcase key services.
* **Client Showcase & Filtering:** An interactive client logo grid on the "Our Clients" page that can be filtered by industry.
* **Modern Animations:** Subtle fade-in animations on scroll (`IntersectionObserver`) are used to elegantly reveal page sections.
* **Multiple Modals:**
    * A comprehensive client list modal with a real-time search/filter functionality.
    * An elegant founder's bio modal on the homepage.
* **Multi-Page Architecture:** A complete suite of pages including:
    * Home
    * About Us
    * Our Clients
    * Services Overview
    * Detailed pages for each individual service (e.g., HVAC, Compliance, Energy Audits).
    * Contact Us
* **Optimized for SEO & Accessibility:** Built with semantic HTML5, `meta` tags for search engines, `alt` text for all images, and `aria-label` attributes for interactive elements.

## 🛠️ Tech Stack

* **HTML5:** Structured with semantic and accessible markup.
* **CSS3:** Styled with modern features like Flexbox, CSS Grid, Custom Properties, and responsive media queries.
* **JavaScript (ES6+):** Used for DOM manipulation, dynamic content loading, and all interactive components.

## 📂 File Structure

The project is organized with a clean and maintainable file structure:

/
├── css/

│   ├── style.css         # Main stylesheet for the site

│   └── header.css        # Specific styles for the header and footer

├── js/

│   ├── loader.js         # Script to dynamically load header and footer

│   └── script.js         # Main script for sliders, modals, filters, etc.

├── images/               # Contains all images, logos, and favicons

├── fragments/

│   ├── header.html       # Reusable header HTML

│   └── footer.html       # Reusable footer HTML

├── index.html            # Home page

├── about.html

├── clients.html

├── contact.html

├── services.html

└── [service-name].html   # Individual service pages (e.g., hvac.html)

└── README.md             # This file

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/khushaank/b2b.git](https://github.com/khushaank/b2b.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd b2b
    ```
3.  **Open `index.html` in your web browser.**
    No special servers or dependencies are required as it's a static site.

## 👤 Author

**Khushaank Gupta**
* GitHub: [@khushaank](https://github.com/khushaank)

