const array = [1, 2, 3, 4];

array.forEach(item => {
    console.log(item);
})

array.forEach((item, index) => {
    console.log(item);
    console.log(index);
})