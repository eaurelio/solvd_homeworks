// TASK 3 - Closures and Higher-Order Functions
const createCounter = () => {
  let count = 0;
  function counter() {
    count += 1;
    return count;
  }
  return counter;
}
const counter = createCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())

// ---------------------------------------------------------------------------

function repeatFunction(fn, times) {
  if (times < 0) {
    return function (...args) {
      let count = 0;
      while (true) {
        fn(...args);
        count++;
        console.log(`Function ${fn.name} called ${count} times`);
      }
    };
  } else {
    return function (...args) {
      for (let i = 0; i < times; i++) {
        fn(...args);
      }
    };
  }
}

// controlled loop
const repeatCounter = repeatFunction(counter, 3);
repeatCounter(); 
console.log(counter()); // Should print 4

// infinity
const infiniteCounter = repeatFunction(createCounter(), -1);
infiniteCounter();
