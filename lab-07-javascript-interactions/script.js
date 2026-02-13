// =============================================
// MODAL INTERACTION
// =============================================

// Select the elements we need for the modal feature.
const openButton = document.querySelector("#open-modal"); // Open modal button.
const closeButton = document.querySelector("#close-modal"); // Close modal button.
const modal = document.querySelector("#modal"); // Modal overlay container.

// Only attach listeners if the required elements exist (prevents console errors).
if (openButton && closeButton && modal) {
  // When the open button is clicked, show the modal by adding a CSS class.
  openButton.addEventListener("click", function () {
    modal.classList.add("modal--open"); // CSS will display the modal.
  });

  // When the close button is clicked, hide the modal by removing the CSS class.
  closeButton.addEventListener("click", function () {
    modal.classList.remove("modal--open"); // CSS will hide the modal.
  });

  // Close the modal when clicking the dark overlay (but not when clicking the content).
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("modal--open"); // Hide modal when background is clicked.
    }
  });
}

// =============================================
// ACCORDION FAQ
// =============================================

// Select all FAQ question buttons.
const faqQuestions = document.querySelectorAll(".faq__question"); // NodeList of questions.

// Attach a click handler to each question.
faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const item = question.parentElement; // The parent .faq__item wrapper.
    if (!item) return; // Safety guard.
    item.classList.toggle("faq__item--open"); // Toggle the open/closed state.
  });
});

// =============================================
// FORM VALIDATION
// =============================================

// Select the form element.
const form = document.querySelector("#contact-form"); // Contact form.

// Validate the form on submit.
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the page from reloading.

    clearErrors(); // Remove previous errors before validating again.

    let isValid = true; // Track whether the form is valid.

    const nameInput = document.querySelector("#name"); // Name field.
    if (nameInput && nameInput.value.trim().length < 2) {
      showError(nameInput, "name-error", "Name must be at least 2 characters."); // Show name error.
      isValid = false; // Mark the form invalid.
    }

    const emailInput = document.querySelector("#email"); // Email field.
    if (emailInput) {
      const value = emailInput.value.trim(); // Normalize the email string.
      const looksValid = value.includes("@") && value.includes("."); // Simple validation rule.
      if (!looksValid) {
        showError(emailInput, "email-error", "Please enter a valid email address."); // Show email error.
        isValid = false; // Mark the form invalid.
      }
    }

    if (isValid) {
      alert("Form submitted successfully!"); // Provide feedback to the user.
      form.reset(); // Clear the fields.
    }
  });
}

// Show an error message for a given input and error span id.
function showError(input, errorId, message) {
  input.classList.add("field__input--invalid"); // Mark the input as invalid.
  const errorSpan = document.querySelector("#" + errorId); // Find the error message container.
  if (errorSpan) errorSpan.textContent = message; // Write the error message.
}

// Clear all validation errors from the form.
function clearErrors() {
  document.querySelectorAll(".field__input").forEach(function (input) {
    input.classList.remove("field__input--invalid"); // Remove invalid styling.
  });

  document.querySelectorAll(".field__error").forEach(function (span) {
    span.textContent = ""; // Clear error message text.
  });
}
