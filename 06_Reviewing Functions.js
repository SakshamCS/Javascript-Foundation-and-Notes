"use strict";

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
//both birthYears in these both function are different
//cause they are local variables still not to confuse yourself
//let's name them different

// const calcAge = function(Year){
//     return 2024-Year;
// }
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    //the return statement immediately exits or immediately
    // returns the function so there's no chance any other
    //statement or console.log will work after that they'll
    //be simply ignored.
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1955, "Mike"));
