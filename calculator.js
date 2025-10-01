// --- 1. Implement Arithmetic Functions ---

/**
 * Adds two numbers.
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number} The sum of the two numbers.
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number} The difference between the two numbers.
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Multiplies two numbers.
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number} The product of the two numbers.
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Divides the first number by the second.
 * Handles division by zero.
 * @param {number} number1 
 * @param {number} number2 
 * @returns {(number|string)} The quotient or an error message.
 */
function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}


// --- Utility function to get inputs and display result ---

/**
 * Retrieves numbers from input fields, converts them to floats,
 * and handles default values for empty inputs.
 * @returns {{num1: number, num2: number}} The two numeric inputs.
 */
function getInputs() {
    // Get the string value from the input fields
    const num1String = document.getElementById('number1').value;
    const num2String = document.getElementById('number2').value;
    
    // Convert to float. If conversion fails (e.g., input is empty), default to 0.
    const number1 = parseFloat(num1String) || 0;
    const number2 = parseFloat(num2String) || 0;

    return { num1: number1, num2: number2 };
}

/**
 * Displays the final result in the dedicated span element.
 * @param {(number|string)} result 
 */
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}


// --- 2. Attach Event Listeners ---

document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = add(num1, num2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = divide(num1, num2);
    displayResult(result);
});
