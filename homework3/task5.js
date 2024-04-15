// TASK 4 - Recursion and Tail Call Optimization
function lazyMap(array, mappingFunction) {
  let position = 0;

  return {
    next: function() {
      if(position < array.length){
        const mappedValue = mappingFunction(array[position])
        position += 1
        return { value: mappedValue, done: false }
      } else { 
        return {done: true}
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5];
const mappingFunction = x => x + `${x}`;

const mappedValues = lazyMap(numbers, mappingFunction);

console.log(mappedValues.next().value); // 11
console.log(mappedValues.next().value); // 22
console.log(mappedValues.next().value); // 33
console.log(mappedValues.next()); // { value: '44', done: false }
console.log(mappedValues.next()); // { value: '55', done: false }
console.log(mappedValues.next()); // done: true

// ---------------------------------------------------------------------------

function fibonacciGenerator (){
  let a = 0;
  let b = 1;
  return {
    next: function(){
      const current = a;
      a = b;
      b = current + a;
      return { value: current }
    }
  }
}
const fibonacci = fibonacciGenerator()
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())