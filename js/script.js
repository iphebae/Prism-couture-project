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
  "section, .showcase-card, .about-image img, .bs-card, .trust-card, .event-card, .trustee-card, .product-card"
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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
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
    heroBG.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  });
}


/* ======================================================
   PRODUCTS PAGE – FILTERING (FIXED)
====================================================== */

const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

if (filterBtns.length > 0 && productCards.length > 0) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      // Change active button
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      productCards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || category.includes(filter)) {
          // SHOW CARD
          card.style.display = "block";
          card.style.opacity = "1";         // IMPORTANT FIX
          setTimeout(() => card.classList.add("fade"), 10);

        } else {
          // HIDE CARD
          card.classList.remove("fade");
          card.style.opacity = "0";
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });
    });
  });
}


/* ======================================================
   TRUSTEES PAGE – STAGGERED FADE-IN
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const trusteeCards = document.querySelectorAll(".trustee-card");

  if (trusteeCards.length > 0) {
    trusteeCards.forEach((card, i) => {
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.transition = "0.8s ease";
        card.style.opacity = "1";
      }, i * 200);
    });
  }
});
