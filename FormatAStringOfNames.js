/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, 
which should be separated by an ampersand.
*/

// function foramt(names){
    // const newArray = []; 
    // for(let i = 0; i < names.length; i++){
        // newArray.push(names[i].name);
    // }
    // return newArray;
// } 

function list(names){
    let finalString = '';
    
    if(names.length === 1){
        return names[0].name;
    }

    names.forEach((arrayItem, arrayIndex) => {
        const name = arrayItem.name;

        if(arrayIndex === names.length - 1){
            finalString = finalString + ' & ' + name;
        }else if(arrayIndex === names.length - 2){
            finalString = finalString + name;
        }else {
            finalString = finalString + name + ', ';
        }

    });

    return finalString;
}

// console.log(foramt([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));