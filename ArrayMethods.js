const Colors = ['blue', 'red', 'purple', 'orange', 'green'];

// Check if orange color exists or not 
// 1:

let orangeExists = false;
for (let i = 0; i < Colors.length; i++){
    if (Colors[i] === 'orange'){
        orangeExists = true;
    }
}
console.log("Orange color exists? " + orangeExists);

// 2:
let isOrangeExists = false;
Colors.forEach(color => {
    if (color === 'orange') {
        isOrangeExists = true;
    }
})
console.log("Orange color exists? " + isOrangeExists);

// 3:
console.log("Orange color exists? " + Colors.includes('orange'));

//----------------------------------------------------------------------

const Orders = [
    {
        productName: 'Tea pot',
        isDigital: false,
        isCanceled: false,
        isOpen: false
    },
    {
        productName: 'Blue Gilden Men Hoodie',
        isDigital: false,
        isCanceled: true,
        isOpen: false
    },
    {
        productName: 'Code Complete Kindle Book',
        isDigital: true,
        isCanceled: true,
        isOpen: false
    },
    {
        productName: 'Atomic Habits kindle Book',
        isDigital: true,
        isCanceled: false,
        isOpen: false
    },
]

const digitalOrders = Orders.filter(item => {
    if (item.isDigital === true){
        return item;
    }
})

console.log(digitalOrders);

console.log("-------------------------");
console.log("Break");
console.log("-------------------------");

const digitalCanceledOrders = Orders.filter(item => {
    if (item.isDigital === true && item.isCanceled === true){
        return item;
    }
})

console.log(digitalCanceledOrders);