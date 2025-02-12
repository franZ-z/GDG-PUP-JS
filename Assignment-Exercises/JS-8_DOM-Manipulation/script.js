// Select elements using document.querySelector
const counterText = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");

// Initialize the counter value
let counterVal = 0;

// Event listener for add button
addButton.addEventListener("click", function () {
  counterVal++; // Increase the counter value
  counterText.textContent = counterVal; // Update display in the webpage
});

// Event listener for subtract button
subtractButton.addEventListener("click", function () {
  if (counterVal > 0) {
    // To make the counter value not go to negative
    counterVal--; // Decrease the counter value
    counterText.textContent = counterVal; // Update display in the webpage
  }
});
