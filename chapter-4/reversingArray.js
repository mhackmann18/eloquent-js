/*
ASSIGNMENT SPECS
 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

// Returns a new array that is in reversed order of the passed in array.
function reverseArray(a){
  let aRev = [];
  for(let i = a.length - 1; i >= 0; --i)
    aRev.push(a[i]);
  return aRev;
}

// Modifies the passed in array by reversing its order without creating a new array.
function reverseArrayInPlace(a){
  let len = a.length;
  a.push(...a);
  for(let i = 0; i < len; ++i){
    let el = a.pop();
    a[i] = el;
  }
}

// Testing code
let a = [1,2,3,4,5];
reverseArrayInPlace(a);
console.log(a);