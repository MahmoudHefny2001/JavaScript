/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
*/

// arrayDiff([1,2,3], [1,2]) == [3]
// arrayDiff([1,2,2], [2]))  == [1]

function arrayDiff(arrayA, arrayB) {
    const newArray = [];
    newArray.push(arrayA.filter(item => !(arrayB.includes(item))));
    const lastArray = newArray.flat(1);
    return lastArray;
}   
 
console.log(arrayDiff([1,2,3], [1,2]));     // [3]
console.log(arrayDiff([1,2,2], [1]));       // [2,2]
console.log(arrayDiff([1,2,2], [2]));       // [1]
console.log(arrayDiff([1,2,2], []));        // [1,2,2]
console.log(arrayDiff([], [1,2]));          // []
console.log(arrayDiff([1,2,3], [1,2]));     // [3]

