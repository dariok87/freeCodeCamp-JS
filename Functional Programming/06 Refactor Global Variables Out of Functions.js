/*
So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookNameto the end of an array. The removefunction should remove the given bookNamefrom an array. Both functions should return an array, and any new parameters should be added before the bookNameone.
*/

function add (arr, bookName) {
    let newArr = [...arr];  // Copy the bookList array to a new array.
    newArr.push(bookName);  // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
  }
  
  function remove (arr, bookName) {
    let newArr = [...arr];  // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given parameter from the new array.
      return newArr; // Return the new array.
      }
  }