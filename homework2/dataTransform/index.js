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

  emailValidator: function (email) {
    if (typeof email !== "string") {
      throw new Error("input type must be string");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  },

  passwordValidator: function (password) {
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    return passwordRegex.test(password);
  },
};

module.exports = dataTransform;
