console.log(isEven(75));

function isEven(n){
  if(n < 0)
    n *= -1;
  if(n === 0)
    return true;
  else if(n === 1)
    return false;
  else 
    return isEven(n - 2);
}