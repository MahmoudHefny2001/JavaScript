function getVowelsCount(string) {
    if(typeof(string) !== 'string'){
        return 'Enter a valid string';
    }
    let vowelsNumber = 0;
    let characters = string.toLowerCase().split("");
    for(let i = 0; i < characters.length; i++){
        if(characters[i] === 'a' || characters[i] === 'e' || characters[i] === 'i' || characters[i] === 'o' || characters[i] === 'u'){
            vowelsNumber++;
        }
    }
    return vowelsNumber;
}

let vowels = getVowelsCount('This is a string');

console.log(vowels);

