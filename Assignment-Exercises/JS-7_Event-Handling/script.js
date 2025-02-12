// Select the button using its ID
let colorButton = document.getElementById("colorButton");

// Function to generate a random color
function getRandomColor() {
  // Generate a random number between 0 and 16777215 (which is 0xFFFFFF)
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Return the color formatted as a hex string
  return `#${randomColor.padStart(6, "0")}`; // Ensure it is 6 characters long
}

// Add an event listener to the button for the click event
colorButton.addEventListener("click", function () {
  let newColor = getRandomColor(); // Generate a random color
  document.body.style.backgroundColor = newColor; // Apply the color to the background
});
