// Show a friendly note when a visitor uses the contact button.
const contactButton = document.querySelector("#contact-button");
const contactMessage = document.querySelector("#contact-message");
const currentYear = document.querySelector("#current-year");

contactButton.addEventListener("click", () => {
  contactMessage.textContent =
    "Thanks for stopping by! I’d be happy to connect and talk about building something together.";
});

// Keep the footer year current without needing to edit the HTML each year.
currentYear.textContent = new Date().getFullYear();
