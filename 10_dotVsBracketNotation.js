"use strict";

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schemdtmann',
    age : 2024-1991,
    job : 'Teacher',
    friends : ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
//This . is an operator(dot operator) which will go in the object jonas and will retrieve the property lastName for us
console.log(jonas['lastName']);
//[] This is a bracket operator does the same thing as dot

const nameKey = 'Name';

console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);
//this same thing will not work with dot operator or . though
//See this example-
// console.log(jonas.'first'+nameKey); //Unexpected string (syntax error in the console)

//We need [] notation more often when we don't know which property the user might need -

const interestedIn = prompt('Who do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
console.log(jonas.interestedIn); //will show undefined just cause interestedIn isn't a property.

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);// but this will work cause [] operator will get the value out of the const interestedIn
}
else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

//adding new properties with the help of . and [] notations -
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemedtman';
console.log(jonas);

//Challenge 
//Jonas has 3 friends and his best friend is called Micheal

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)