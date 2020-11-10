/*
ASSIGNMENT SPECS

The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

function deepEqual(a, b){
  // First if else checks for the special case of null, since its type is an object for some reason.
  if(a === null && b === null)
    return true;
  else if(a === null || b === null)
    return false;
  /* 
  Second if else checks to see if the values being compared are objects 
  in order to see if they can be compared directly. If they can't, then
  all of their properties will be compared individually, returning true if 
  no differences are discovered.
  */
  if(typeof(a) === "object" && typeof(b) === "object"){
    for(key of Object.keys(a).concat(Object.keys(b))){
      if(!deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  } else if(a === b) {
    return true;
  } else {
    return false;
  }
}

// Testing code
console.log(deepEqual({ mom: "Tonya", dad: { name: "Steve", age: 41 } },{ mom: "Tonya", dad: { name: "Steve", age: [39, 40, 41] } }));
// output -> false
console.log(deepEqual(new Object(), new Object()));
// output -> true