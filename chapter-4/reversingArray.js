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