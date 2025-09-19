//Variable shadowing with let

let a = 100;
{
  let a = 200; // shadows outer a
  console.log("Inside block:", a); // 200
}
console.log("Outside block:", a); // 100
