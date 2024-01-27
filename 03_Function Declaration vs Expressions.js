"use strict";

//Two types of functions in Javascript -

//Function Declaration -
function calcAge1(birthYear){
    // const age = 2024 - birthYear;
    // return age;
    return 2024 - birthYear;
}
//capturing the value the function is returning
const age1 = calcAge1(1991);
// console.log(age1);

//Function Expression -
const calcAge2 = function (birthYear){
   //function with a name as you can see
   //that is an anonymous function and the way of
   //storing function in a variable (constant mostly)
   //that is called function expression.
   //i.e from func(param) to return statement
   //i.e a function expression stored in calcAge2 here
    return 2024 - birthYear;
}

const age2 = calcAge2(1971);
console.log(age1, age2);
//function is not a type like a string or boolean
//function is just a value. So if it's a value we 
//can store it in a variable.

//The main difference between Function Expression and
//Declaration is that incase of function declaration we
// can call it in the code even before it is even defined

//See the example below -
const age3 = calcAge1(1981);
function calcAge3(birthYear){
    // const age = 2024 - birthYear;
    // return age;
    return 2024 - birthYear;
}
console.log(age3);

//But we cannot do the same for function expression we
//cannot call it before the initialization.

//And internally this all happens due to a process called
//hoisting.