const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
];

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let resolved = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => handleResolvedPromise(index, value))
        .catch(reject);
    });

    function handleResolvedPromise(index, value) {
      result[index] = value;
      resolved += 1;

      if (resolved === promises.length) {
        resolve(result);
      }
    }
  });
}

promiseAll(promises)
  .then((results) => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
