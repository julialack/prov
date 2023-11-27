question1.js;

function howFast(number) {
  if (number >= 100) {
    return "Fast";
  } else if (number <= 20) {
    return "Slow";
  } else if (number >= 30 && number <= 50) {
    return "Medium";
  } else {
    return "Unknown";
  }
}

console.log(howFast(20)); // Ska logga "Slow"
console.log(howFast(50)); // Ska logga "Medium"
console.log(howFast(100)); // Ska logga "Fast"
console.log(howFast(25)); // Ska logga "Unknown"
