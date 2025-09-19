if (true) {
  var x = 10;   // function-scoped
  let y = 20;   // block-scoped
  const z = 30; // block-scoped
}
console.log(x); //  Works (10)
// console.log(y); //  Error
// console.log(z); //  Error