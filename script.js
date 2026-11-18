// Show a friendly note when a visitor uses the contact button.
const contactButton = document.querySelector("#contact-button");
const contactMessage = document.querySelector("#contact-message");
const currentYear = document.querySelector("#current-year");
const menuToggle = document.querySelector("#menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

contactButton.addEventListener("click", () => {
  contactMessage.textContent =
    "Thanks for stopping by! I’d be happy to connect and talk about building something together.";
});

// Keep the small-screen navigation accessible and close it after selection.
if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNavigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
}

// Keep the footer year current without needing to edit the HTML each year.
currentYear.textContent = new Date().getFullYear();
