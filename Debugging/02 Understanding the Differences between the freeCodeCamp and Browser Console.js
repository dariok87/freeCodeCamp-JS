/*
You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

When you run ordinary JavaScript, the browsers console will display your console.log() statements the exact number of times you requested.

The freeCodeCamp console will print your console.log() statements for each test of that challenge, as well as one more time for any function calls that you have in your code.

This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times.

If you would like to see only your single output and not have to worry about running through the test cycles, you can use console.clear() and check the browsers console.

First, use console.clear() to clear the browser console. After that, use console.log to log the output variable.
*/

// Open your browser console.
let output =
  "Get this to log once in the browser console and twice in the freeCodeCamp console";
// Use console.clear() on the next line to clear the browser console.
console.clear();

// Use console.log() to print the output variable.
console.log(output);

// Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, once for each test of this challenge. The browser console should only print the variable once because you cleared it first.
