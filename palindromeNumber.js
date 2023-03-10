function isBalindrome(number){
    let newNumber = String(number).split("")
    let reversedNumber = newNumber.slice().reverse();

    return newNumber.join() === reversedNumber.join();
}

console.log(isBalindrome(123210));