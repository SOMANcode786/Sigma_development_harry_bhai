function faultyCalculator(a, b, operator) {
  // Generate a random number between 0 and 1
  // If < 0.1 → 10% chance of being faulty
  let isFaulty = Math.random() < 0.1;

  let result;

  if (!isFaulty) {
    // Normal calculator
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b !== 0 ? a / b : "Error: Divide by zero";
        break;
      default:
        return "Invalid operator";
    }
  } else {
    // Faulty output → give wrong result
    result = "😈 Wrong Answer: " + (a * b + Math.floor(Math.random() * 10));
  }

  return result;
}

// Example usage:
console.log(faultyCalculator(5, 3, "+"));
console.log(faultyCalculator(10, 2, "*"));
