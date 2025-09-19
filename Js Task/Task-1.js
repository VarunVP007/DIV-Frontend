// Task - 1 Higher order function 

function repeat(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

repeat(() => console.log("Hello!"), 3);
