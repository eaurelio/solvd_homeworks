const dataTransform = {
  addValues: function (value, value2) {
    if (typeof value === "string" && typeof value2 === "string") {
      return `${value} ${value2}`;
    }

    if (typeof value === "number" && typeof value2 === "number") {
      return value + value2;
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
    const output = parseFloat(value);
    if (isNaN(output)) {
      throw new Error("The type conversion was unsuccessful");
    }
    return output;
  },
  stringDivide: function (string, delimiter) {
    if (typeof string !== "string") {
      throw new Error("Input type must be a string");
    }
  },
};

module.exports = dataTransform;
