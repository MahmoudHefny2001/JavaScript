const firstNumber = 20;
const secondNumber = 10;
const expression = firstNumber > secondNumber;

if (expression) {
    console.log('The expression is true');
}

if (expression) {
    console.log('The expression is true');
} else {
    console.log('The expression is false');
} 

if (expression) {
    console.log('The expression is true');
} else if (firstNumber > 0) {
    console.log('The expression is false and the firstNumber is greater than 0');
} else {
    console.log('The expression is false, and the firstNumber is 0 or less');
}

if (expression) { console.log('Another formatting'); }