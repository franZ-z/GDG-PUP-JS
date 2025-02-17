// Grab the Start button element
let startButton = document.getElementById("startButton"); // using getElementById
let userChoiceDisplay = document.querySelector("#userChoice"); // using querySelector
let computerChoiceDisplay = document.querySelector("#computerChoice"); // grab the computerChoice id
let resultDisplay = document.querySelector("#result"); // grab the result id
let winsDisplay = document.querySelector("#wins"); // grab the wins id
let lossesDisplay = document.querySelector("#losses"); // grab the losses id
let tiesDisplay = document.querySelector("#ties"); // grab the ties id

let userChoice = ""; // Store the user's choice

// Track the score: wins, losses, and ties initialized to 0
let wins = 0;
let losses = 0;
let ties = 0;

// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// Event listeners for the buttons
document
  .getElementById("rock")
  .addEventListener("click", () => selectChoice("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => selectChoice("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => selectChoice("scissors")); // Fixed incorrect button selection

document.getElementById("startButton").addEventListener("click", playGame);
document.getElementById("resetButton").addEventListener("click", resetGame);

// Function that updates the user's choice and enables the Start button
function selectChoice(choice) {
  userChoice = choice; // Update the user's choice with the selected choice
  userChoiceDisplay.innerHTML = `<img src="./assets-images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`; // Update the user's choice display
  startButton.disabled = false; // Enable the Start button
}

// A function that generates a random choice for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length); // generate a random index
  return choices[randomIndex]; // return the choice at the random index
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to update the score based on the result of the game
function updateScore(result) {
  if (result === "win") {
    wins++; // increment wins by 1
    winsDisplay.textContent = wins; // update the winsDisplay with the new value
  } else if (result === "lose") {
    losses++; // increment losses by 1
    lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
  } else {
    ties++; // increment ties by 1
    tiesDisplay.textContent = ties; // update the tiesDisplay with the new value
  }
}

// Function that will trigger when the Start button is clicked
function playGame() {
  const computerChoice = getComputerChoice(); // call the computer choice function
  const result = determineWinner(userChoice, computerChoice); // Compare the user's choice and the computer's choice to determine the winner

  computerChoiceDisplay.innerHTML = `<img src="./assets-images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`; // Update the computerChoiceDisplay

  // Display the result of the game (win, lose, draw)
  if (result === "draw") {
    resultDisplay.textContent = "It's a Draw!";
  } else if (result === "win") {
    resultDisplay.textContent = "YOU WIN!";
  } else {
    resultDisplay.textContent = "YOU LOSE!";
  }

  // Call the updateScore function and pass the result as an argument
  updateScore(result);
}

function resetGame() {
  userChoice = ""; // Reset the user's choice
  userChoiceDisplay.innerHTML = `<img src="./assets-images/icon-user.png" alt="user" class='choice--img'/>`; // Reset the userChoiceDisplay
  computerChoiceDisplay.innerHTML = `<img src="./assets-images/icon-computer.png" alt="computer" class='choice--img'/>`; // Reset the computerChoiceDisplay
  resultDisplay.textContent = "Choose your weapon!"; // Reset the resultDisplay

  // Reset the all score variables to 0
  wins = 0;
  losses = 0;
  ties = 0;

  // Update the score displays
  winsDisplay.textContent = wins; // update the winsDisplay with the new value
  lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
  tiesDisplay.textContent = ties; // update the tiesDisplay with the new value

  // Disable the Start button
  startButton.disabled = true;
}
