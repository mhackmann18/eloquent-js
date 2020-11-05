console.log(makeBoard(8));

function makeBoard(size){
  let string = "";

  for(let i = 0; i < size; ++i){
    for(let u = 0; u < size; ++u){
      i % 2 === 0 ? ( u % 2 === 0 ? string += " " : string += "#" ) : ( u % 2 === 0 ? string += "#" : string += " " );
    }
    if(i !== size - 1) string += "\n";
  }

  return string;
}