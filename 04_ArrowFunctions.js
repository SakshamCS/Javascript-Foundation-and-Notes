"use strict";

//Arrow Function was introduced in ES6
//It is a form of function expression but shorter and
//faster to write.

//Function Expression -
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

//Arrow Function -
const calcAge1 = birthYear => 2024 - birthYear;

// we don't have to use {} in arrow function plus
//it returns implicitly we don't have to return manually
//(just incase if it's a one liner function if not we have
// to return again)
//like incase of the function expression mentioned above.

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); 