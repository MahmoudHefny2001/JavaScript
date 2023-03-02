const arrayOfNumbers = [1, 2, 3, 5, 6];

console.log(arrayOfNumbers);
console.log(arrayOfNumbers.pop());
console.log(arrayOfNumbers.pop());
console.log(arrayOfNumbers);

arrayOfNumbers.push(4, 5, 6);
console.log(arrayOfNumbers);

arrayOfNumbers.unshift(0);
console.log(arrayOfNumbers);

//----------------------------------------------------

console.log("-------------------------");
const newArray = [0, 1, 2, 3, 4, 5, 6];
console.log(newArray);
const copyArray = newArray.slice();
console.log(copyArray);

console.log(newArray === copyArray);