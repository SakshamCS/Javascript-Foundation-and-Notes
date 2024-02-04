"use strict";

const jonas = [
    'Jonas',
    'Schemdtmann',
    2024-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[5]);
//jonas[6] does NOT EXIST

for(let i=0;i<jonas.length;i++){
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    //Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];

for(let i=0;i<years.length;i++){
    ages.push(2024-years[i]);
}

console.log(ages);

//continue and break statement

console.log('---ONLY STRINGS---')
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---')
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}