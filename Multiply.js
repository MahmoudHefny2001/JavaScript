multiply = (number1, number2) => number1 * number2;
//-------------------------------------------------
function Product(a, b) {
    if(typeof(a) && typeof(b) === 'number'){
        console.log(a * b);
        return 
    }
    console.log("Insert valid numbers");
}

Product(2, 5);
Product(5, 'string');

