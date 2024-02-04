"use strict";

const jonas = [
    'Jonas',
    'Schemdtmann',
    2024-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//0,1, ...,4
//4,3, ...,0
for(let i=jonas.length-1; i>=0; i--){
    console.log(i,jonas[i]);
}

for(let exercise=1; exercise <4; exercise++){
    console.log(`-------- Starting exercise ${exercise}`);
    
    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏻‍♀️`);
    }
}