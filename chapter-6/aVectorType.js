/*
ASSIGNMENT SPECS:
Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

function Vector(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  plus(vec){
    return new Vector(this.x + vec.x, this.y + vec.y);
  }, 
  minus(vec){
    return new Vector(this.x- vec.y, this.y - vec.y);
  },
  get length(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  } 
}


const vec1 = new Vector(1,3);
const vec2 = new Vector(1,4);

console.log(vec1.length.toFixed(2));