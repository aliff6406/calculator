let firstOperand;
let secondOperand;
let operator = null;
let shouldResetDisplay = false;
let positive = true;

const numberBtnArr = Array.from(document.querySelectorAll('[data-number]'));
const operatorBtnArr = Array.from(document.querySelectorAll('[data-operator]'));
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const currentDisplay = document.getElementById('current-operation');
const previousDisplay = document.getElementById('last-operation');
const periodBtn = document.getElementById('period-btn');
const signBtn = document.getElementById('sign-btn');

clearBtn.onclick = clearCalculator;
deleteBtn.onclick = deleteNumber;
periodBtn.onclick = appendPeriod;
signBtn.onclick = setSign;

numberBtnArr.forEach((number) =>
    number.addEventListener('click', () => concatDisplayValue(number.textContent))
);

operatorBtnArr.forEach((button) => 
    button.addEventListener('click', () => {
        setOperator(button.textContent)
        console.log(typeof button.textContent);
    })
);

equalBtn.addEventListener('click', () => evaluate());

function appendPeriod() {
    if (currentDisplay.textContent.includes('.')) return;
    currentDisplay.textContent += ".";  
};

function setOperator(operation) {
    if (operator != null) evaluate();
    firstOperand = currentDisplay.textContent;
    operator = operation;
    previousDisplay.textContent = `${firstOperand} ${operator}`;
    positive = true;
    shouldResetDisplay = true;
};

function concatDisplayValue(number) {
    if (currentDisplay.textContent.slice(1) === '0' || currentDisplay.textContent === '0' || shouldResetDisplay || currentDisplay.textContent === 'Error') resetDisplay();
    currentDisplay.textContent += number;
};

function evaluate() {
    if (operator === null || shouldResetDisplay) return;
    secondOperand = currentDisplay.textContent;
    currentDisplay.textContent = operate(firstOperand, secondOperand, operator);
    previousDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} `
    operator = null;
};


function resetDisplay() {
    if (currentDisplay.textContent.includes('-')){
        currentDisplay.textContent = '-';
    } else {
        currentDisplay.textContent = '';
    }
    shouldResetDisplay = false;
};

function setSign() {
    if (currentDisplay.textContent.includes('-')) {
        currentDisplay.textContent = currentDisplay.textContent.toString().slice(1);
        positive = true;
    } else {
        currentDisplay.textContent = '-' + currentDisplay.textContent;
        positive = false;
    }
}


function clearCalculator() {
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
    num1 = 0;
    num2 = 0;
    operator = null;
    positive = true;
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
        case "×":
            return a * b;
        case "%":
            return a % b;
        case "÷":
            if (b === 0) return 'Error';
            return a / b;
    }
};