// ================= DESKTOP EDITORIAL HOVER =================
const wrapper = document.querySelector(".navbar__dropdown-wrapper");

if (wrapper) {
  wrapper.addEventListener("mouseenter", () => {
    document.body.classList.add("editorial-open");
  });

  wrapper.addEventListener("mouseleave", () => {
    document.body.classList.remove("editorial-open");
  });
}


// ================= MOBILE =================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("mobileMenuClose");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");

    hamburgerBtn.textContent = isOpen ? "✕" : "☰";
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
}

if (closeBtn && mobileMenu) {
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
}

// ================= ACCORDION =================
const accordionTriggers = document.querySelectorAll(
  ".mobile-menu__accordion-trigger"
);

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const subMenu = trigger.nextElementSibling;

    if (subMenu) {
      subMenu.classList.toggle("open");
      trigger.classList.toggle("active");
    }
  });
});

// ปิด menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
});

