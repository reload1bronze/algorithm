const fs = require("fs");

const n = fs.readFileSync("/dev/stdin");
let sum = 0;

for (let i = 1; i <= n; ++i) {
  sum += i;
}

console.log(sum);
