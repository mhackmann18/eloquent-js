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