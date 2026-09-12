#!/usr/bin/node

function factorial (n) {
  if (Number.isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const n = Number(args[0]);

console.log(factorial(n));
