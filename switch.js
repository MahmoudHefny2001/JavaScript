const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

switch (randomColor) {
    case 'orange':
        console.log('The color is orange');
        break;
    case 'green':
        console.log('The color is green');
        break;
    case 'yellow':
        console.log('The color is yellow');
        break;
    case 'purple':
        console.log('The color is purple');
        break;
    case 'blue':
        console.log('The color is blue');
        break;         
}