/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function sumAll(arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce((a, b) => ((a + b) * (b - a + 1)) / 2);
}

sumAll([1, 4]);
