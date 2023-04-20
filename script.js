let num1;
let num2;
let operator;
let displayValue = 0;

const numberBtns = Array.from(document.querySelectorAll('[data-number]'));
const display = document.getElementById('display');

numberBtns.forEach((number) => {
    number.addEventListener('click', (e) => {
        concatenateDisplayValue(number.textContent);
    });
});

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
};

function concatenateDisplayValue(num) {
    if(displayValue === 0) {
        displayValue = parseInt(num);
    } else {
        displayValue = parseInt(displayValue + '' + num);
    }
    display.textContent = displayValue;
}
