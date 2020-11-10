/*
ASSIGNMENT SPECS

Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

car and cat

pop and prop

ferret, ferry, and ferrari

Any word ending in ious

A whitespace character followed by a period, comma, colon, or semicolon

A word longer than six letters

A word without the letter e (or E)
*/

const test = (re, str) => console.log(re.exec(str));

// test(/ca[rt]/, "The Cat meows in the car");
// test(/pr?op/, "prop");
// test(/ferr(et|ari|y)/, "ferri");
// test(/\b\w+ious\b/, "the superstitious man was ");
// test(/\s[.,;]/, "dasds\n.dds");
test(/\b[a-z]{1,6}\b/i, "I am your father");



