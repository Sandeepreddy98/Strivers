/*
1234
1234
1234
1234
*/

function pattern(n) {
  let string = "";
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      string = string + j;
    }
    string = string + (i == n ? "" : "\n");
  }
  return string;
}
// console.log(pattern(4));

function patternStarSquare(n){
  let string = ""
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      string = string + "*";
    }
    string = string + (i == n ? "" : "\n");
  }
  return string;
}

console.log(patternStarSquare(4));
