
// ==========================================
// AERIS — INTERACTIVE FEATURES
// Author: Stephen Oyugi
// ==========================================

// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}


// ==========================================
// VEHICLE FINISH CUSTOMIZER
// ==========================================

const finishInputs = document.querySelectorAll(
  'input[name="finish"]'
);

const preview = document.querySelector("#vehicle-preview");
const finishName = document.querySelector("#finish-name");
const selectedDot = document.querySelector(".selected-dot");

const finishLabels = {
  graphite: {
    label: "Graphite",
    color: "#3d423e"
  },

  pearl: {
    label: "Ivory pearl",
    color: "#d7d5ca"
  },

  forest: {
    label: "Deep forest",
    color: "#34493d"
  },

  copper: {
    label: "Burnished copper",
    color: "#9c654c"
  }
};

finishInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (!input.checked) return;

    const finish = finishLabels[input.value];

    if (!finish) return;

    preview.dataset.finish = input.value;

    finishName.textContent = finish.label;

    selectedDot.style.backgroundColor = finish.color;

    preview.setAttribute(
      "aria-label",
      `Vehicle preview in ${finish.label} finish`
    );
  });
});


// ==========================================
// SPECIFICATIONS ACCORDION
// ==========================================

const specDetails = document.querySelectorAll(
  ".accordion details"
);

specDetails.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    specDetails.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});


// ==========================================
// AUTOMATIC FOOTER YEAR
// ==========================================

document.querySelector("#year").textContent =
  new Date().getFullYear();
