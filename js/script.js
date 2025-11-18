/* ======================================================
   MOBILE MENU TOGGLE
====================================================== */
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });
}


/* ======================================================
   FADE-IN ELEMENTS ON SCROLL
====================================================== */
const revealElements = document.querySelectorAll(
  "section, .showcase-card, .about-image img, .product-card, .bs-card, .trust-card, .event-card"
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const pos = el.getBoundingClientRect().top;
    if (pos < trigger) {
      el.classList.add("fade");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run immediately on page load
window.addEventListener("load", () => {
  revealOnScroll();
  // Force trigger after a short delay to ensure everything is loaded
  setTimeout(revealOnScroll, 100);
});

// Also trigger on DOMContentLoaded
document.addEventListener("DOMContentLoaded", revealOnScroll);


/* ======================================================
   MARQUEE PAUSE ON HOVER
====================================================== */
const marquee = document.querySelector("marquee");

if (marquee) {
  marquee.addEventListener("mouseover", () => marquee.stop());
  marquee.addEventListener("mouseout", () => marquee.start());
}


/* ======================================================
   PARALLAX HERO (Soft movement)
====================================================== */
const heroBG = document.querySelector(".hero-bg");

if (heroBG) {
  window.addEventListener("scroll", () => {
    let scrollVal = window.scrollY;
    heroBG.style.transform = `translateY(${scrollVal * 0.25}px)`;
  });
}


/* ======================================================
   PRODUCT FILTERING (For products.html)
====================================================== */
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

if (filterBtns.length > 0 && productCards.length > 0) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Change active button
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category.includes(filter)) {
          card.style.display = "block";
          setTimeout(() => card.classList.add("fade"), 10);
        } else {
          card.classList.remove("fade");
          card.style.opacity = "0";
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });
    });
  });
}