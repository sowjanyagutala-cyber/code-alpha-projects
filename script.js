const display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the entire display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to perform the calculation and show the result
function calculate() {
    try {
        if (display.value === "") return;
        // The eval function evaluates the string expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        // Reset display after 1.5 seconds if there's an error
        setTimeout(clearDisplay, 1500);
    }
}