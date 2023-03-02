try{
    var number = 20;
    number.toUpperCase();
}catch (error){
    console.log(error instanceof TypeError);
    console.log(error.message);
}

console.log(typeof(number) === 'number')