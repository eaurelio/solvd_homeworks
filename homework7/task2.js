const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject("Error occured"),
  Promise.resolve(4),
];

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const result = [];

    promises.forEach((promise, index) => {
      promise
        .then((value) => handleResolvedPromise(index, value))
        .catch((reason) => handleResolvedPromise(index, reason));
    });

    function handleResolvedPromise(index, value) {
      result[index] = { status: value };

      if (result.length === promises.length) {
        resolve(result);
      }
    }
  });
}

promiseAllSettled(promises).then((results) => {
  console.log("All promises settled");
  console.table(results);
});
