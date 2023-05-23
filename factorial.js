
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;

  } 
  else if (n>=1){
    return n * factorial(n - 1);
  }
  else if (n<0){
    return 0;
  }
}

const prompt = require("prompt-sync")();
const number = prompt("Enter a number:");
const parsedNumber = parseInt(number);

if (isNaN(parsedNumber)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  const result = factorial(parsedNumber);
  if (result==0){
    console.log("Input should be a positive number");
  }
  else{
    console.log(`The factorial of ${parsedNumber} is: ${result}`);
  }
  
}



