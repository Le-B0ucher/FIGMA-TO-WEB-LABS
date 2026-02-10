const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

openButton.addEventListener("click", () => {
  // Show the modal by adding a class
  modal.classList.add("modal--open");
});

closeButton.addEventListener("click", () => {
  // Hide the modal by removing the class
  modal.classList.remove("modal--open");
});
