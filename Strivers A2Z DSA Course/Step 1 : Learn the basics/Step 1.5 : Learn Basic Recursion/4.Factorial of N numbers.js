// Functional Way
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Parameterised way
function fact(n, fa) {
  if (n === 1) {
    return fa;
  }
  return fact(n - 1, fa * n);
}
console.log(factorial(3));
console.log(fact(3, 1));
