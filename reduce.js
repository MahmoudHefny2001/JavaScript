const numbers = [10, 20, 30, 40, 50];

function reducerCallBack(sum, item){
    return sum += item;
}

const result = numbers.reduce(reducerCallBack, 0);
console.log(result);

