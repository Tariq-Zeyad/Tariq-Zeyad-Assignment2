// Perform the selected mathematical operation
function calculate(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

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
    }

    // Display the calculation result
    document.getElementById("result").textContent = "Result: " + result;
}

// Reset the inputs and result
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Result: -";
}