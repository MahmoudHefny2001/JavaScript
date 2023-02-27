var summation = function (num) {
    if(typeof(num)!== 'number'){
        return 'Enter a valid number';
    }
    else if (num < 0){
        return 'Enter a positive number';
    }
    else{
        let summation = 0;
        for(let i = 1; i <= num; i++){
          summation += i;
        }
        return summation;
    }
}

console.log(summation(3));
console.log(summation(-1));
console.log(summation(0));