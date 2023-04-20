let num1;
let num2;
let operator;
let displayValue = 0;

const zeroBtn = document.getElementById('two-btn');
const oneBtn = document.getElementById('one-btn');
const twoBtn = document.getElementById('two-btn');
const threeBtn = document.getElementById('three-btn');
const fourBtn = document.getElementById('four-btn');
const fiveBtn = document.getElementById('five-btn');
const sixBtn = document.getElementById('six-btn');
const sevenBtn = document.getElementById('seven-btn');
const eightBtn = document.getElementById('eight-btn');
const nineBtn = document.getElementById('nine-btn');

zeroBtn.onclick = () => 

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
        displayValue = num;
    } else {
        displayValue = parseInt(displayValue + '' + num);
    }
}