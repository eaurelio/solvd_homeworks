function deepCloneObject(obj, cloneMap = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }
  if (cloneMap.has(obj)) {
      return cloneMap.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  cloneMap.set(obj, clone);

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          clone[key] = deepCloneObject(obj[key], cloneMap);
      }
  }
  
  return clone;
}

const testData = {
  name: "John",
  age: 30,
  address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001"
  },
  hobbies: ["reading", "hiking", "cooking"],
  friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 },
      { name: "Charlie", age: 29 }
  ],
  pet: {
      name: "Buddy",
      species: "Dog",
      age: 5
  },
  favoriteColors: new Set(["blue", "green", "red"]),
  startDate: new Date(2020, 0, 1),
  preferences: {
      music: "rock",
      food: "pizza",
      season: "summer"
  }
};

// Adding a circular referente
testData.self = testData;

// Testing the function 
const clone = deepCloneObject(testData);
console.log(clone);


