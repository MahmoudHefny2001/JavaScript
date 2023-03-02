function myCallBack(someNumber) {
    return someNumber * 2;
}

function mainFunction(randomNumber, shouldCall, callBack){
    let result = randomNumber;
    
    if(shouldCall){
        result = callBack(randomNumber);
    }

    return result;
}

let value = mainFunction(20, true, myCallBack);
console.log(value); // 40

//------------------------------------

value = mainFunction(20, true, function(number){
    return number * 2;
})

console.log(value); // 40

//------------------------------------

value = mainFunction(20, true, number => number * 2);

console.log(value); // 40

//------------------------------------


const myArray = [2, 4, 6, 8];

function myCustomMapOperationCallBack(itemFromArray){
    return itemFromArray * 2;
}

const newArray = myArray.map(myCustomMapOperationCallBack);

console.log(newArray)

const strArray = ["Hello", "world", "my", "name", "is", "Hefny"];

console.log(strArray.map(itemFromArray => itemFromArray[0]))