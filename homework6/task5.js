function throttle(func, interval) {
  let lastTime = 0;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

function onScroll(event) {
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
// window.addEventListener("scroll", throttledScrollHandler);
// You can test the complete code opening the task5.html file