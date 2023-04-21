let num1;
let num2;
let operator;
let displayValue = 0;
let operatorClicked = false;

const numberBtnArr = Array.from(document.querySelectorAll('[data-number]'));
const operatorBtnArr = Array.from(document.querySelectorAll('[data-operator]'));
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const display = document.getElementById('display');

clearBtn.onclick = clearCalculator;

numberBtnArr.forEach((number) => {
    number.addEventListener('click', () => {
        concatDisplayValue(number.textContent);
    });
});

operatorBtnArr.forEach((operatorBtn) => {
    console.log(operator)
    operatorBtn.addEventListener('click', () => {
        if(operatorClicked === false) {
            num1 = displayValue;
        } else {
            num2 = displayValue;
        }
        displayValue = 0;
        dataOperator = operatorBtn.getAttribute('data-operator');
        
        if(dataOperator !== '=') {
            operator = dataOperator;
        } else {
            displayValue = operate(operator);
            console.log(displayValue);
        }
        operatorClicked = !operatorClicked;
    });
});

function concatDisplayValue(num) {
    if(displayValue === 0) {
        displayValue = BigInt(num);
    } else {
        displayValue = BigInt(displayValue + '' + num);
    }
    updateDisplay();
};

function clearCalculator() {
    displayValue = 0;
    updateDisplay();
};

function updateDisplay() {
    display.textContent = displayValue;
}

function add() {
    return num1 + num2;
};

function subtract() {
    return num1 - num2;
};

function multiply() {
    return num1 * num2;
};

function divide() {
    return num1 / num2;
};

function operate(operator) {
    switch(operator) {
        case "+":
            return add();
        case "-":
            return subtract();
        case "*":
            return multiply();
        case "/":
            return divide();
    }
};