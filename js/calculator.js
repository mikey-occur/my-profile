const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const acButton = document.getElementById('acButton');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if(buttonText >= '0' && buttonText <= '9' || buttonText === '.'){
            appendNumber(buttonText);
        } else if (buttonText === 'AC' || buttonText === 'C'){
            clear() ;
        } else if (buttonText === '±') {
            toggleSign();
        } else if (buttonText === '%') {
            percentage();
        } else if (['+','-','x','÷'].includes(buttonText)) {
            setOperation(buttonText);
        } else if(buttonText === '=') {
            evaluate();
        }
    });
});

function appendNumber(number) {
    if(display.textContent === '0' || shouldResetScreen) {
        display.textContent = '';
        shouldResetScreen = false;
    }
    display.textContent += number;

    if(display.textContent !== '0' &&  acButton.textContent === 'AC'){
        acButton.textContent = 'C';
    }
}

function clear() {
    if (display.textContent !== '0') {
        display.textContent = '0';
        acButton.textContent = 'AC';

        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
        shouldResetScreen = false;
    } else {
        display.textContent = '0';
        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
        shouldResetScreen = false;
    }
}

function toggleSign() {
    if(display.textContent === '0') return;
    display.textContent = display.textContent.startsWith('-') ? display.textContent.slice(1) : '-' + display.textContent;
}


function percentage(){
    display.textContent = (parseFloat(display.textContent) / 100).toString();
}

function setOperation(operator){
    if(currentOperation !== null) evaluate();
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if(currentOperation === null || shouldResetScreen) return;
    secondOperand = display.textContent;
    let result;
    switch(currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;    
        case 'x':
             result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;  
        case '÷':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
              break; 
    }
    display.textContent = Math.round(result * 1000000) / 1000000;
    currentOperation = null;
}