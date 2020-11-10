/*
ASSIGNMENT SPECS

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrayOfArrays = [
  [1,2,3,4,5],
  [11,22,33,44],
  ['a','b','c','d']
]

const flatArray = arrayOfArrays.reduce((acc, cur) => acc.concat(cur));

console.log(flatArray);