/*
ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition is a simple function that returns an object containing two fields.

ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.

Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });

Use simple fields with object literals to create and return a Person object.
*/

const createPerson = (name, age, gender) => {
    "use strict";
    
    return {
      name,
      age,
      gender
    };
   
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object