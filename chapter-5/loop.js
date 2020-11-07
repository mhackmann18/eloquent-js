function loop(val, test, update, body){
  for(let i = val; test(i); update(i)){
    body(i);
  }
}