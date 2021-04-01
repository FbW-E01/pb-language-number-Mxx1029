// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// ```javascript
// let introSentence = "hello, my name is Fran and I am";
// let age = 25;
// ```
const intro = "Hello and Good day, I am Maxie and my favorite number is ";
const favNumber = 2;
console.log(intro + favNumber + ".");

// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

// Answer: The plus operator is concatenating the number to the end of the string, kind of like an arithmetic addition between numbers, but with a string and a number. 

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 
const stringInt = "1005";
parseInt(stringInt);
const stringFloat = "10.05";
parseFloat(stringFloat)
console.log(stringInt);
console.log(stringFloat);