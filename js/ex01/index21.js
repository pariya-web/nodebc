/*Create a new index21.js file
Define age variable and assign your age as value (number)
Define phone variable and assign your phone number or similar (number)
Define streetName variable and assign your street name (string)
Define streetNumber variable and assign your house street number (number)
Use console log to show the following messages:
First message: I'm %age% years old
Second message: My phone number is: %phone%
Third message: I live on %streetNumber% %streetName%
Use template variables for each text
*/
var age = 33;
var phone = 6047298928;
var streetName = 'Hornby';
var streetNumber = 847;
var template = `I'm ${age} years old
My phone number is ${phone}
I live on ${streetName} ${streetNumber}`
 console.log(template);
