const myString = 'My Dog jumped on the bed. My dog is a bad Dog';

const newString = myString.replaceAll('Dog', 'Cat');

console.log(newString);

const correctedString = myString.replaceAll(/[Dd]{1}og/g, 'cat');

console.log(correctedString);

const anotherString = 'some string';
let newAnotherString = anotherString.toUpperCase();

console.log(newAnotherString)

//-------------------------------------------------

const externalData = [
    {
        title: 'How to code     ',
        author: '   Hefny'
    },
    {
        title: '    What is vim?',
        author: '   Hefny'
    },
    {
        title: '    How do loops work in JavaScript?     ',
        author: '   Hefny'
    },
]

for (let i = 0; i < externalData.length; i++) {
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;

    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();

}

console.log(externalData);