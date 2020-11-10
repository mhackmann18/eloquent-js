/*
ASSIGNMENT SPECS

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

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