const dataTransform = {
  addValues: function (value1, value2) {
    if (typeof value1 === "string" && typeof value2 === "string") {
      return `${value1}${value2}`;
    }

    if (typeof value1 === "number" && !isNaN(value1) &&
        typeof value2 === "number" && !isNaN(value2)) {
      return value1 + value2;
    }

    throw new Error("The input types are invalid!");
  },

  stringifyValue: function (value, stringifyFunction = undefined) {
    if (typeof value === "object" && value !== null) {
      const serializedObject = {};
      for (let key in value) {
        serializedObject[key] = stringifyFunction
          ? stringifyFunction(value[key], stringifyFunction)
          : JSON.stringify(value[key]);
      }
      return JSON.stringify(serializedObject);
    } else {
      return String(value);
    }
  },

  invertBoolean: function (value) {
    if (typeof value !== "boolean") {
      throw new Error("Input type must be boolean");
    }

    return !value;
  },

  convertToNumber: function (value) {
    if (typeof value === "number") return value;
    if (typeof value === "boolean") return value ? 1 : 0;
    if (typeof value === "string") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) return parsedValue;
    } else if (typeof value === "object" && value !== null) {
      return convertToNumber(JSON.stringify(value));
    }

    throw new Error("Unable to convert value to number");
  },

  coerceToType: function (value, type) {
    if (typeof type !== "string") {
      throw new Error("Type must be specified as a string");
    }

    switch (type) {
      case "string":
        return String(value);
      case "number":
        return Number(value);
      case "int":
        return parseInt(value);
      case "float":
        return parseFloat(value);
      case "date":
        const dateValue = new Date(value);
        if (isNaN(dateValue.getTime())) {
          throw new Error("Invalid date format");
        }
        return dateValue;
      case "boolean":
        return Boolean(value);
      default:
        throw new Error("Invalid type specified");
    }
  },

  stringDivide: function (string, delimiter) {
    if (typeof string !== "string") {
      throw new Error("Input type must be a string");
    }

    return string.split(delimiter);
  },

  objectMerge: function (array) {
    if (!Array.isArray(array)) {
      throw new Error("type of element in array must be object");
    }

    let output = {};
    for (const el of array) {
      if (typeof el !== "object") {
        throw new Error("type of element in array must be object");
      }
      output = { ...output, ...el };
    }

    return output;
  },
  convertCelciusToFahrenheit: function (temperature) {
    const parsedTemperature = parseFloat(temperature);

    if (!isNaN(parsedTemperature)) {
      return ((9 / 5) * parsedTemperature + 32).toFixed(2);
    } else {
      throw new Error("this conversion is not allowed");
    }
  },
  convertFahrenheitToCelcius: function (temperature) {
    const parsedTemperature = parseFloat(temperature);

    if (!isNaN(parsedTemperature)) {
      return ((5 / 9) * (temperature - 32)).toFixed(2);
    } else {
      throw new Error("this conversion is not allowed");
    }
  },
  USDConvertTo: async function (value, currency = "PLN", decimal = 2) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Invalid input value. Please provide a valid number.");
    }

    if (typeof decimal !== "number" || decimal < 0 || decimal > 10) {
      throw new Error(
        "Invalid decimal value. Please provide a valid number of decimal places (0-10)."
      );
    }

    const url =
      "https://openexchangerates.org/api/latest.json?app_id=cd9f9b2805754ee19d9d5fb0b4b4aeaf";
    let currencies;

    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Bad Request");
        }
        currencies = await response.json();
      } catch (error) {
        console.log(error.message);
      }
    }

    await getData();

    if (
      typeof currency !== "string" ||
      !currencies.rates.hasOwnProperty(currency)
    ) {
      throw new Error(
        "Invalid currency code. Please provide a valid currency code."
      );
    }

    return `${currency} ${(currencies.rates[currency] * value).toFixed(
      decimal
    )}`;
  },
};

module.exports = dataTransform;
