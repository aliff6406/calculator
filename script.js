let firstOperand;
let secondOperand;
let operator = null;
let shouldResetDisplay = false;

const numberBtnArr = Array.from(document.querySelectorAll('[data-number]'));
const operatorBtnArr = Array.from(document.querySelectorAll('[data-operator]'));
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const currentDisplay = document.getElementById('current-operation');
const previousDisplay = document.getElementById('last-operation');

clearBtn.onclick = clearCalculator;
deleteBtn.onclick = deleteNumber;

numberBtnArr.forEach((number) =>
    number.addEventListener('click', () => concatDisplayValue(number.textContent))
);

operatorBtnArr.forEach((button) => 
    button.addEventListener('click', () => {
        setOperator(button.getAttribute('data-operator'));
        console.log('operand 1: ' + firstOperand);
        console.log('operand 2: ' + secondOperand);
    })
);

equalBtn.addEventListener('click', () => evaluate());

function setOperator(operation) {
    if (operator != null) evaluate();
    firstOperand = currentDisplay.textContent;
    operator = operation;
    shouldResetDisplay = true;

};

function concatDisplayValue(number) {
    if (currentDisplay.textContent === '0' || shouldResetDisplay || currentDisplay.textContent === 'Error') resetDisplay();
    currentDisplay.textContent += number;
};

function evaluate() {
    if (operator === null || shouldResetDisplay) return;
    secondOperand = currentDisplay.textContent;
    currentDisplay.textContent = operate(firstOperand, secondOperand, operator);
    operator = null;
};


function resetDisplay() {
    currentDisplay.textContent = '';
    shouldResetDisplay = false;
}


function clearCalculator() {
    currentDisplay.textContent = '0';
    num1 = 0;
    num2 = 0;
    operator = null;
};

function deleteNumber() {
    if (currentDisplay.textContent.length === 1) {
        currentDisplay.textContent = '0';
        return;
    }
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0,-1);
};

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "%":
            return a % b;
        case "/":
            // console.log('test');
            if (b === 0) return 'Error';
            return a / b;
    }
};