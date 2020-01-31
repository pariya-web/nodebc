/* Create a new index27.js file

Define a firstNumber and secondNumber variables

Assign each variable a number type value

Code the following operations:

Adding both variables
Subtracting both variables
Multiplying both variables
Dividing both variables
Remainder from both variables
For each operation show the following output:

Example: I add 2 + 3 and the result is 5 (where 2 and 3 are firstNumber and secondNumber and 5 it's the operation result)
Use a template variable for each output and console.log()
*/
const firstNumber = 30;
const secondNumber = 67;
console.log(firstNumber + secondNumber);
const result1 = firstNumber + secondNumber;
console.log( firstNumber - secondNumber);
const result2 = firstNumber - secondNumber;
console.log(firstNumber * secondNumber);
const result3 = firstNumber * secondNumber;
console.log(firstNumber / secondNumber);
const result4 = firstNumber / secondNumber;
console.log(firstNumber % secondNumber);
const result5 = firstNumber % secondNumber;

var template1 = `I add ${firstNumber} + ${secondNumber} and the result is ${result1}`;
var tempalte2 = `I substarct ${firstNumber} - ${secondNumber} and the result is ${result2}`;
var template3 = `I multiply ${firstNumber} * ${secondNumber} and the result is ${result3}`;
var template4 = `I divide ${firstNumber} / ${secondNumber} and the result is ${result4}`;
var template5 = `I remaind ${firstNumber} % ${secondNumber} and the result is ${result5}`;

console.log(template1);
console.log(tempalte2);
console.log(template3);
console.log(template4);
console.log(template5);
