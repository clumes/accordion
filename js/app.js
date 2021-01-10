// Get elements
const containerEl = document.querySelector(".container");
const accordionTabEls = document.querySelectorAll(".accordion__tab");
const iconLineVertical = document.querySelector(".icon__line--vertical");

// Handles the opening and closing for accordions
handleAccordions();

// Centers the container vertically
centerElementVertically(containerEl);

// Detect when viewport height changes
window.addEventListener("resize", () => {
  centerElementVertically(containerEl);
});
