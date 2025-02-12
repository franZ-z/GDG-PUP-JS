// Define the car object
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

// Function to get car description
function getDescription(car) {
  return `This car is a ${car.year} ${car.make} ${car.model}.`;
}

// To call the function and display the output
console.log(getDescription(car));
