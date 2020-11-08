/* 
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/

let object = {
  name: 'John Doe',
  age: 34,
  city: 'Columbia'
}

object.hasOwnProperty = function(){
  return "This is not the function you're looking for...";
}

console.log(object.hasOwnProperty("city"));
console.log(Object.prototype.hasOwnProperty.call(object, "city"));
