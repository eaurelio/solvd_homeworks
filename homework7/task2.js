const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject("Error occured"),
  Promise.resolve(4),
];

function promiseAllSettled(promises) {
  let results = [];
  let completed = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          completed += 1;
          if (completed === promises.length) resolve(results);
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
          completed += 1;
          if (completed === promises.length) resolve(results);
        });
    });
  });
}

promiseAllSettled(promises).then((results) => {
  console.log("All promises settled", results);
});
