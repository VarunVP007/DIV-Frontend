//Task-13: Clear interval after 10 runs

let count = 0;
const intervalId = setInterval(() => {
  console.log("Running", ++count);
  if (count === 10) {
    clearInterval(intervalId);
    console.log("Stopped after 10 runs");
  }
}, 1000);
