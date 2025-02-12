function checkAge() {
  // Retrieve the user's age input
  const ageInput = document.getElementById("ageInput").value;

  // Convert the input value to a number
  const age = Number(ageInput);

  // Initialize a variable to hold the category
  let category;

  // Check the input and categorize the age
  if (isNaN(age) || age < 0) {
    category = "Invalid age. Please enter a valid number.";
  } else if (age >= 0 && age <= 12) {
    category = "Child";
  } else if (age >= 13 && age <= 19) {
    category = "Teenager";
  } else {
    category = "Adult";
  }

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = category;
}
