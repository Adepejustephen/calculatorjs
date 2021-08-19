
const decimalBtn = document.querySelector('.num_decimal')
const clearnBtn = document.querySelector('.clear')
const backBtn = document.querySelector('.del')

const displayResult = document.querySelector('.display_result');
const numberBtns = document.getElementsByClassName('number');
const operatorBtn = document.getElementsByClassName('operator')

let displayVal = '0';
let pendingVal;
let evalStringArray = []

updateDisplay = (clickObj) => {
    const btnText = clickObj.target.innerText;
    if (displayVal === '0'){
        displayVal = ''
    }

    displayVal += btnText;
        
    displayResult.innerHTML = displayVal;

}

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns [i].addEventListener('click', updateDisplay, false);
    
}

clearnBtn.onclick = () => {
    displayVal = '0'
    pendingVal = undefined
    evalStringArray = []

    displayResult.innerHTML = displayVal
}

backBtn.onclick = () => {
    const lengthOfDisplayVal = displayVal.length
    displayVal = displayVal.slice(0, lengthOfDisplayVal-1)
    if (displayVal === '') {
        displayVal = '0'
    }

    displayResult.innerHTML = displayVal
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal += '.'

        displayResult.innerHTML = displayVal

    }
}
performOperation = (clickObj) => {
    const operator = clickObj.target.innerText

    switch (operator) {
        case '+':
            pendingVal = displayVal
            displayVal = '0'
            displayResult.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('+')
            break;
        
        case '-':
            pendingVal = displayVal
            displayVal = '0'
            displayResult.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('-')
            break;
    
        case 'x':
            pendingVal = displayVal
            displayVal = '0'
            displayResult.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('*')
            break;


        case '÷':
            pendingVal = displayVal
            displayVal = '0'
            displayResult.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('/')
            break;
    
    
        case '=':
            evalStringArray.push(displayVal)
            let evaluation = eval(evalStringArray.join(''))
            displayVal = evaluation + ''
            displayResult.innerHTML = displayVal 
            evalStringArray = []

            break;
    
    
        default:
            break;
    }
}
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn [i].addEventListener('click', performOperation, false);
    
}
