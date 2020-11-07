// Takes in an array and returns a list data structure containing all of its values.
function arrayToList(a){
  let list = null;

  if(!a.length) return list;
  else list = new Object();

  let temp = list;
  for(let i = 0; i < a.length; ++i){
    temp.value = a[i];
    i === a.length - 1 ? temp.rest = null : temp.rest = new Object();
    temp = temp.rest;
  }
  return list;
}

// Takes in a list and returns an array containing all of its elements.
function listToArray(li){
  let temp = li;
  let arr = [];
  while(temp){
    arr.push(temp.value);
    temp = temp.rest;
  }
  return arr;
}

// Adds the passed in value to the beginning of a list
function prepend(el, list){
  return {
    value: el,
    rest: list
  }
}

// Returns the value at the specified index of the list, or undefined if the index doesn't exist.
function nth(list, index){
  if(!list) return;
  if(!index){
    return list.value;
  } else {
    return nth(list.rest, index - 1);
  }
}

// Testing code
let list = arrayToList([1,2,3,4,5,6]);
console.log(nth(list, 6));