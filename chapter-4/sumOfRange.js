function range(start, end, step = 1){
  let arr = [];
  if(step > 0){
    for(let i = start; i <= end; i += step){
      arr.push(i);
    }
  } else if(step < 0){
    for(let i = start; i >= end; i += step){
      arr.push(i);
    }
  }
  
  return arr;
}

function sum(a){
  count = 0;
  for(i of a){
    count += i;
  }
  return count;
}