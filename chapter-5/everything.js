function everyWithLoop(arr, predicate){
  for(el of arr)
    if(!predicate(el)) 
      return false;
  return true;
}

const everyWithSome = (arr, predicate) => !arr.some(e => predicate(e) === false);

console.log(everyWithSome([2,4,6,8,9], n => n % 2 === 0 ));