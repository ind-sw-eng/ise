// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  var body = document.body;
  const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-wrap");
  const mobileMenu = document.querySelector("#mobile-menu");
  const burger = document.querySelector("#menu-button svg");

  // Check if all elements exist before adding event listeners
  if (button && mobileMenu && burger) {
    button.addEventListener("click", () => {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle("hidden");
      body.classList.toggle("overflow-hidden");
      
      // Update aria-expanded for accessibility
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      
      // Optional: Change hamburger icon to X when open
      if (mobileMenu.classList.contains("hidden")) {
        burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
      } else {
        burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
      }
    });
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const button = document.querySelector("#menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const burger = document.querySelector("#menu-button svg");
  
  if (button && mobileMenu && burger && !button.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    button.setAttribute("aria-expanded", "false");
    burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
  }
});

// Close mobile menu when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const button = document.querySelector("#menu-button");
    const mobileMenu = document.querySelector("#mobile-menu");
    const burger = document.querySelector("#menu-button svg");
    
    if (button && mobileMenu && burger && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      button.setAttribute("aria-expanded", "false");
      burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
    }
  }
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = `
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
  </svg>
`;
backToTopButton.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hidden z-50';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Improve focus management for accessibility
document.addEventListener('keydown', (e) => {
  // Skip to main content with Alt+M
  if (e.altKey && e.key === 'm') {
    e.preventDefault();
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
