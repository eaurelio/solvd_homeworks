function measureArrayPerformance(func, array) {
  const start = performance.now();
  func(array);
  const end = performance.now();
  return end - start;
}


function customDouble(array) {
  const doubledItems = []
  for(let item in array) {
    doubledItems.push(array[item] * 2)
  }
  return doubledItems
}

const array = [1, 2, 3, 4, 5];

// Measuring custom function performance
const customFunctionPerformance = measureArrayPerformance(customDouble, array);
console.log(`Tempo de execução da função personalizada: ${customFunctionPerformance}ms`);

// Measuring built-in 'map'function performance
const builtInFunctionPerformance = measureArrayPerformance(array => array.map(item => item * 2), array);
console.log(`Tempo de execução da função built-in 'map': ${builtInFunctionPerformance}ms`);
