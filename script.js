"use strict";

const calcAge = function(birthYear){
    return 2024-birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName){
  const age = calcAge(birthYear)
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
