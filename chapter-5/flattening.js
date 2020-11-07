let arrayOfArrays = [
  [1,2,3,4,5],
  [11,22,33,44],
  ['a','b','c','d']
]

const flatArray = arrayOfArrays.reduce((acc, cur) => acc.concat(cur));

console.log(flatArray);