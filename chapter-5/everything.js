/*
ASSIGNMENT SPECS

Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
*/

function everyWithLoop(arr, predicate){
  for(el of arr)
    if(!predicate(el)) 
      return false;
  return true;
}

const everyWithSome = (arr, predicate) => !arr.some(e => predicate(e) === false);

console.log(everyWithSome([2,4,6,8,9], n => n % 2 === 0 ));