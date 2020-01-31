/* Create a new index28.js file
Define a number variabe and assign the following value: 9
Using the number variable show the multiplication table from 1 to 10
Example: 9 times 1 equals 9
Use string concatenation for each output and console.log() */
const number = 9;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const ten = 10;

var result1 = number * one;
var result2 = number * two;
var result3 = number * three;
var result4 = number * four;
var result5 = number * five;
var result6 = number * six;
var result7 = number * seven;
var result8 = number * eight;
var result9 = number * nine;
var result10 = number * ten;

var template1 = `${number} times ${one} equals ${result1}`;
var template2 = `${number} times ${two} equals ${result2}`;
var template3 = `${number} times ${three} equals ${result3}`;
var template4 = `${number} times ${four} equals ${result4}`;
var template5 = `${number} times ${five} equals ${result5}`;
var template6 = `${number} times ${six} equals ${result6}`;
var template7 = `${number} times ${seven} equals ${result7}`;
var template8 = `${number} times ${eight} equals ${result8}`;
var template9 = `${number} times ${nine} equals ${result9}`;
var template10 = `${number} times ${ten} equals ${result10}`;

console.log(template1);
console.log(template2);
console.log(template3);
console.log(template4);
console.log(template5);
console.log(template6);
console.log(template7);
console.log(template8);
console.log(template9);
console.log(template10);
console.log(result1 + ' ' + result2 + ' ' + result3 + ' ' + result4 + ' ' + result5 + ' ' + result6 + ' ' + result7 + ' ' + result8 + ' ' + result9 + ' ' + result10)
