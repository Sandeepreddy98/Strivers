function gcd(n1, n2) {
  let gcd = 1;
  for (let i = 1; i < Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(gcd(9, 12));
