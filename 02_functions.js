"use strict";

function logger() {
  console.log("My name is Saksham");
}

//calling / running / invoking function
logger();
logger();
logger();
//since it doesn't have any parameters it'll
//technically produce undefined which we don't
//capture in the console

function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//result of the fruitProcessor function is the 
//string juice so we have to store/save it somewhere
//that's why we will store that result in a variable
//we named apple juice as you can see below
//and will console.log that value to print the string
const appleJuice = fruitProcessor(3,5);
console.log(appleJuice);

//or the other way is to have the same result
//though not the most efficient way is-
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,2);
console.log(appleOrangeJuice);

//Conclusion - 
//functions allow us to write more maintainable
//code because with functions we can create reusable
//chunks of code instead have to manually write the
//the same code over and over again.

//DON'T REPEAT YOURSELF(DRY) - one of the main concepts
//of software development and programming so functions
// helps us do that and not rewriting the same code
// again and again