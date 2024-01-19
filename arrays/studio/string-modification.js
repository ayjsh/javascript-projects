const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3).concat(str.slice(0,3));
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string was ${str} and the modified string is ${newStr} .`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let number = input.question("Please enter a number: ");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (number > str.length) {
    newStr = str.slice(3).concat(str.slice(0,3));
console.log(`${newStr}. You entered a number greater than the word's length, so the default is 3.`);
} else {
newStr = str.slice(number).concat(str.slice(0,3));
console.log(newStr);
}