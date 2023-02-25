function sayHello(){
    // console.log("Hello World!");
}

// sayHello()

function sum(number1, number2){
    return number1 + number2;
}

// const number = sum(5, 6);
// console.log(number);

const Function1 = function() {
    console.log('Empty');
}

// Function1()

const Function2 = () => {
    console.log("Arrow function")
}

// Function2()


const MyFunction = () => {
    console.log('Something');
}


const returnFunction = () => {
    const a = 20;
    return a;
}

const returnedValue = returnFunction();
// console.log(returnedValue);

function func() {
    return 20;
}

function printHello() {
    // console.log("Hello")
}

const funcy = printHello;
funcy();

const myObject = {
    property1: 50,
    property2: func
} 

// console.log(myObject.property2)
// console.log(myObject.property2())

let myString = 'My name is Hefny';
myString = myString.split(' ');
console.log(myString);
console.log(myString.indexOf('name'));
console.log(myString.indexOf('Hefny'));