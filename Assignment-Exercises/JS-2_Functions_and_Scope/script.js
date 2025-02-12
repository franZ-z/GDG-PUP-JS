// Assign Global Variables
let globalVar = "A Global Variable";
let anotherGlobalVar = 2;

// Function to Demonstrate Function Scope
function demoFunctionScope() {
  let localVar = "A Local Variable"; //Declare a local variable
  console.log(globalVar);
  console.log(anotherGlobalVar);
  console.log(localVar);

  // Return a string that contains the variables
  return `Global: ${globalVar}, Another Global: ${anotherGlobalVar}, Local: ${localVar}`;
}

// Call the function and log its return value
let result = demoFunctionScope();
console.log(result);

// Demonstrate block scope
if (true) {
  let blockVar = "A Block-Scoped Variable";
  console.log(blockVar);
}

// Trying to access blockVar outside the block will result in an error
try {
  console.log("Outside block:", blockVar);
} catch (error) {
  console.log("Error:", error.message);
}
