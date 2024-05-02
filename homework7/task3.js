function chainPromises(functionsArray) {
  let promiseChain = Promise.resolve();

  functionsArray.forEach((func) => {
    promiseChain = promiseChain.then(func);
  });

  return promiseChain;
}

function asyncFunction1() {
  return Promise.resolve("Witaj");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " przyjacielu!");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " życzę miłego dnia!");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then((result) => {
    console.log("Chained promise result:", result);
  })
  .catch((error) => {
    console.error("Chained promise error:", error);
  });
