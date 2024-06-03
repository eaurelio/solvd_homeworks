const myJSONParse = require("./functions/myJSONParse");

// Array with different data types
console.log(
  myJSONParse(
    `[
      true,
      false,
      null,
      "some string",
      123456789,
      -678.90,
      {"key": "value"},
      [1, 2, 3, 4, 5]
    ]`
  )
);

// Object with nested arrays and objects
console.log(
  myJSONParse(`{
  "person": {
    "name": "Alice",
    "age": 25, 
    "contact": {
      "email": "alice@example.com",
      "phones": ["123-456-7890", "098-765-4321"]
      }
    }, 
    "languages": ["English", "Portuguese", "Polish"]
  }`)
);

// Array of objects
console.log(
  myJSONParse(
    `[
      {"id": 1, "name": "Item 1"},
      {"id": 2, "name": "Item 2"},
      {"id": 3, "name": "Item 3"}
    ]`
  )
);

// Object with number in scientific notation
console.log(
  myJSONParse(
    `{
      "smallNumber": 1.23e-4,
      "largeNumber": 5.67e+8,
      "negativeExp": -9.01e-4,
      "positiveExp": 3.45e+8
    }`
  )
);
