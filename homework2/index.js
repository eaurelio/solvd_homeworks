const dataTransform = require("./dataTransform");

// // addValues
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
console.log(dataTransform.convertToNumber(true));

// coerceToType;
console.log(dataTransform.coerceToType("2132", "int"));

// stringDivide
const string = "sdfkllkjs-sdlkjlkjsdf-lskdjksjd";
console.log(dataTransform.stringDivide(string, "-"));

// objectMerge
const obj1 = { a: "a", b: "b", c: "c" };
const obj2 = { d: "d", e: "e", f: "f" };
const obj3 = { g: "g", h: "h", i: "i" };
const arr1 = [obj1, obj2, obj3];

console.log(dataTransform.objectMerge(arr1));

// Converting Celcius to Fahrenheit
console.log(dataTransform.convertCelciusToFahrenheit("33.5"));

// Converting Fahrenheit to Celcius
console.log(dataTransform.convertFahrenheitToCelcius(92.3));

// Converting USD to other currencies
dataTransform
  .USDConvertTo(1, undefined || "BRL", 4)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
