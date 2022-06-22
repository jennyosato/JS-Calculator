function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let functionToPerform = prompt(
    "Enter + for addition, - for subtraction, * for multiplication, / for division"
  );
if (functionToPerform == "+") {
  alert("The answer is : " + add(firstNumber, secondNumber)
  );
}
else if (functionToPerform == "-") {
  alert(
    "The answer is : " + subtract(firstNumber,secondNumber)
  );
}
else if (functionToPerform == "*") {
  alert(
    "The answer is : " + multiply(firstNumber,secondNumber)
  );
}
 else if (functionToPerform == "/") {
  alert(
    "The answer is : " + divide(firstNumber,secondNumber)
  );
}
else {
    alert("You have entered an invalid function")
}
