const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0].split(" ")[0]);
const X = parseInt(input[0].split(" ")[1]);
const A = input[1].split(" ");

let result = [];

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i]);
  }
}

console.log(result.join(" "));
