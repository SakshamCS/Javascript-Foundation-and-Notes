"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schemdtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //a function declaration won't work here here we need an expression
  // function calcAge(birthYear){
  //     return 2024 - birthYear;
  // } //this will throw an error

  //1st way -
  // calcAge : function(birthYear){
  //     return 2024 - birthYear;
  // }//calcAge is a property of jonas object not a regular variable
  
  //2nd way -
  //'this' Keyword -

  //   calcAge: function () {
  //     console.log(this);
  //     //will console the whole object as jonas is 'this' in here calling the method
  //     return 2024 - this.birthYear;
  //   },
  // now we will read the birthYear directly from the object cause of our DRY principle

  //3rd way -
  //to access the age we will have to console.log(jonas["calcAge"]()); all lot of times so to not do that we will make a new property with 'this' keyword here
  calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;//good practice to return it
      },

  getSummary: function(){
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    return this.summary;
  }
};

//any function attached to object is called method

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

//After using this keyword we don't need to pass the 1991 so -

console.log(jonas["calcAge"]()); //jonas is 'this' in here calling the method
//without calling the calcAge function first 'this' won't work and will output undefined.

//now after 3rd way
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge - 
//Jonas is a 33-year old teacher and he has a driving license

console.log(jonas.getSummary());
//arrays are also objects that's why they can have methods as well