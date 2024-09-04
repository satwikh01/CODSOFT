let outputDisplay = document.getElementById("outputField");

function addDigit(digitValue) {
  outputDisplay.value += digitValue;
}

function addMathSymbol(mathSymbol) {
  outputDisplay.value += mathSymbol;
}

function computeResult() {
  try {
    let calculationResult = calculateExpression(outputDisplay.value);
    outputDisplay.value = calculationResult;
  } catch (error) {
    outputDisplay.value = "Calculation Error";
  }
}

function resetOutput() {
  outputDisplay.value = "";
}

function calculateExpression(expression) {
  return eval(expression);
}
