// Increasing order
let initial = 1;
function print(num) {
  if (num === 0) {
    return;
  }

  print(num - 1);
  console.log(num);
}
//Decreasing order
// function print(num) {
//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   print(num--);
// }

print(5);
