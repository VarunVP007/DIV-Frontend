//Task-14: Print current time every second

setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
