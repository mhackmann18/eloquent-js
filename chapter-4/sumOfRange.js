let range = (start, end, step = 1) => {
  let arr = [];
  for(let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

let sum = (arr) => {
  let sum = 0;
  for(let i of arr){
    sum += i;
  }
  return sum;
}

console.log((range(1,10, 2)));