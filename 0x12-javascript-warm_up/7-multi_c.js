#!/usr/bin/node

const args = process.argv.slice(2);
const count = Number(args[0]);

if (args[0] === undefined || Number.isNaN(count)) {
  console.log('Missing number of occurrences');
}

for (let i = 0; i < count; i++) {
  console.log('C is fun');
}
