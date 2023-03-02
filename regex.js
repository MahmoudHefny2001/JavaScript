const emailValidatorRegex = new RegExp('^.+@.+\..+$');

let userInput = 'invalidemail@g';

console.log(emailValidatorRegex.test(userInput));

userInput = 'hefny4@gmail.com';

console.log(emailValidatorRegex.test(userInput));