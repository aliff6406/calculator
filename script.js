let num1;
let num2;
let operator;
let displayValue = 0;
let operatorClicked = false;

const numberBtnArr = Array.from(document.querySelectorAll('[data-number]'));
const operatorBtnArr = Array.from(document.querySelectorAll('[data-operator]'));
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const currentDisplay = document.getElementById('current-operation');
const previousDisplay = document.getElementById('last-operation');

clearBtn.onclick = clearCalculator;
deleteBtn.onclick = deleteNumber;

numberBtnArr.forEach((number) => {
    number.addEventListener('click', () => {
        concatDisplayValue(number.textContent);
    });
});

operatorBtnArr.forEach((operatorBtn) => {
    console.log(operator)
    operatorBtn.addEventListener('click', () => {
        dataOperator = operatorBtn.getAttribute('data-operator');
        if(operatorClicked === false) {
            num1 = displayValue;
        } else {
            num2 = displayValue;
        }
        displayValue = 0;

        if(dataOperator !== '=') {
            operator = dataOperator;
        } else {
            displayValue = operate(operator);
            console.log(displayValue);
            updateCurrentDisplay();
        }
        operatorClicked = !operatorClicked;
    });
});

function operate(operator) {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
};

function updateCurrentDisplay() {
    currentDisplay.textContent = displayValue;
};

function updatePreviousDisplay() {
    previousDisplay.textContent = displayValue
};

function concatDisplayValue(num) {
    if(displayValue === 0) {
        displayValue = BigInt(num);
    } else {
        displayValue = BigInt(displayValue + '' + num);
    }
    updateCurrentDisplay();
};

function clearCalculator() {
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    updateCurrentDisplay();
};

function deleteNumber() {
    str = displayValue.toString();
    if(str.length === 1) {
        displayValue = 0;
    } else {
        displayValue = str.slice(0,-1);
    }
    updateCurrentDisplay();
};