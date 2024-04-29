function curry(func, arity = func.length) {
  return function curried(...args) {
    const neededArgs = args.filter(arg => arg !== _).length;
    if (neededArgs >= arity) {
      return func(...args);
    } else {
      return function(...newArgs) {
        const combinedArgs = args.map(arg => arg === _ && newArgs.length ? newArgs.shift() : arg);
        return curry(func, arity)(...combinedArgs, ...newArgs);
      };
    }
  };
}

// Exemplo de uso da função curry com aplicação parcial e espaços reservados
function multiply(a, b, c) {
  return a * b * c;
}

const _ = Symbol('_');

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // expected: 24
console.log(curriedMultiply(_, 3)(2)(4)); // expected: 24
console.log(curriedMultiply(2, _, _)(3)(4)); // expected: 24
console.log(curriedMultiply(_, _, 4)(2)(3)); // expected: 24
