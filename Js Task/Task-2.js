//Task-2: Calculator with callback

function calculator(a, b, callback) {
  return callback(a, b);
}

console.log(calculator(5, 3, (x, y) => x + y)); // 8
console.log(calculator(5, 3, (x, y) => x - y)); // 2
console.log(calculator(5, 3, (x, y) => x * y)); // 15
console.log(calculator(6, 3, (x, y) => x / y)); // 2
