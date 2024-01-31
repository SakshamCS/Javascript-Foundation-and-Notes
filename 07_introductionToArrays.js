"use strict";

//Arrays - 

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
//"the literal syntax"
console.log(friends);

const y = new Array(1991,1984,2008,2020);

console.log(friends[0]);

//No. of elements in the array -
console.log(friends.length);
console.log(friends[friends.length-1]);
//inside [] javascript expects an expression not a statement

//mutating/changing an array element -

friends[2]='Jay';
console.log(friends);
//We can mutate array elements even though they're declared
//with const cause in javascript the elements are stored in
//memory. But we can't do this -
// friends = ['Bob', 'Alice'];

//This will give an TypeError - Assignment to a constant
//variable

//Arrays can store/hold different types of values all at
//the same time -

const firstName = 'Jonas';

const jonas = [firstName, 'Schmedtmann', 2024-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);

//Exercise -
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const years = [1990,1967,2002,2010,2018];

// wrong way to do it
console.log(calcAge(years));
//We are attempting to subtract a whole array from a number
//so the result gonna be NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
