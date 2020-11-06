console.log(countChars("BHBBdhjsdk", "k"));

function countChars(s, c){
  let count = 0;
  for(let i = 0; i < s.length; ++i){
    if(s[i] === String(c)) count += 1;
  }
  return count;
}