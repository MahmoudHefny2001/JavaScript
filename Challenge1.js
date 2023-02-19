// 1. Create a boolean variable called 'myBoolean' and set it to 'true'.

const myBoolean = true;

// 2. Create a string variable called 'myString' and set it to 'hello world'.

const myString = 'hello world';

// 3. Create a number variable called 'firstNumber' and set it equal to '20'.

const firstNumber = 20;

// 4. Create another number variable called 'secondNumber' and set it equal to '40'.

let secondNumber = 40;

// 5. Re-assign 'secondNumber' and set it equal to '80'

secondNumber = 80;

// 6. Create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1.

const myArray = [myBoolean, myString];

/* 7. Create an object called 'myObject' and assign 'myArray' to a property called 'firstProperty', and 
The sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty'.
*/

const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
};


// 8. Print 'myObject' to the console. 
console.log(myObject);

// 9. Print the 'sumProperty' of 'myObject' to the console.

console.log(myObject['sumProperty']);
console.log(myObject.sumProperty);

// 10. Print the value at index 1 of 'firstProperty'.

console.log(myObject.firstProperty[1]);