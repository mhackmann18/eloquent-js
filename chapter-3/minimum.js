/*
ASSIGNMENT SPECS

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

function minimum(i, j){
  if(i > j) return j;
  else if(j > i) return i;
  else return i;
}