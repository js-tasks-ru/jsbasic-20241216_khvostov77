function factorial(n) {
  // ваш код...
  if (n === 0) {
    return 1;
  }
  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n;
}

console.log(factorial(0));
