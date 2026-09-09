// Perform the selected mathematical operation
function calculate(operation) {
    const firstInput = document.getElementById("num1").value;
    const secondInput = document.getElementById("num2").value;

    // Check that both inputs are provided
    if (firstInput === "" || secondInput === "") {
        showResult("Please enter both numbers.");
        return;
    }

    const num1 = Number(firstInput);
    const num2 = Number(secondInput);

    // Check that the inputs are valid numbers
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        showResult("Invalid input. Please enter valid numbers.");
        return;
    }

    // Prevent division by zero
    if (operation === "/" && num2 === 0) {
        showResult("Cannot divide by zero.");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            showResult("Invalid operation.");
            return;
    }

    showResult("Result: " + result);
}


// Display the result or validation message
function showResult(message) {
    document.getElementById("result").textContent = message;
}


// Clear inputs and result
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    showResult("Result: -");
}