// Select the main CTA button.
const ctaButton = document.querySelector("#cta-button");

// Add a click listener (no inline onclick).
if (ctaButton) {
  ctaButton.addEventListener("click", function () {
    // Simple interaction to confirm the button works.
    alert("Thanks — we'll follow up with demo details.");
  });
}
