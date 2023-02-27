function removeFisrtAndLastCharacter(stringValue){
    return stringValue.slice(1, stringValue.length-1);
}


let myString = removeFisrtAndLastCharacter("Hello");
console.log(myString);