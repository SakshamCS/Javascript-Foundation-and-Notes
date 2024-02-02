"use strict";

const friends = ['Micheal', 'Steven', 'Peter'];
//Add elements-

//Add elements to the end of the array -
const newlength = friends.push('Jay');
//push() returns length of the new array
console.log(friends);
console.log(newlength); // it will return 4

//Add element at the beginning of an array-
friends.unshift('John');
console.log(friends);

//Remove elements-

friends.pop(); //Removes last element
//Pop methods returns the element removed not the length of new array
const popped = friends.pop();
console.log(popped);// will return Peter as it was popped out of the array
console.log(friends);

//Remove first element from the array -
friends.shift();
console.log(friends);

//Returns index of element needed -
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//Method to identify whether the element is in the array or not it is added in ES6, it will return true or false

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));//will return false
//this method requires strict equality and does not do type coersion
console.log(friends.includes(23));//returns true in this case
//we can use the includes method to use conditionals

if(friends.includes('Peter')){
    console.log('You have a friend called Peter');
}
if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}
