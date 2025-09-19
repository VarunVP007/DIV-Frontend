//Task-3: Closure remembering function calls

function callCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(`Called ${count} times`);
  };
}

const counter = callCounter();
counter();
counter();
counter();
