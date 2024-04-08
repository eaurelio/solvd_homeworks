const dataTransform = require("./dataTransform");

// addValues
console.log(dataTransform.addValues(5, 3));
console.log(dataTransform.addValues("Hello", "World"));

// stringifyValue
const obj = {
  name: "value1",
  key2: [1, 2, 3],
  key3: { nestedKey: "nestedValue" },
};
console.log(
  dataTransform.stringifyValue({
    name: "value1",
    key2: [1, 2, 3],
    key3: { nestedKey: "nestedValue" },
  })
);

// invertBoolean
console.log(dataTransform.invertBoolean(true));

// convertToNumber
console.log(dataTransform.convertToNumber("string"));
