//Parameterised Way
function sumOfN(num, sum) {
  if (num === 0) {
    return sum;
  }
  return sumOfN(num - 1, sum + num);
}

//Functional way
function sumOfNNumbers(num) {
  if (num === 0) {
    return num;
  }
  return num + sumOfNNumbers(num - 1);
}

console.log(sumOfN(5, 0));
console.log(sumOfNNumbers(3));
