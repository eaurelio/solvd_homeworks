String.prototype.plus = function (str) {
  let output = "";
  let carry = 0;
  let string1 = this.toString();
  let string2 = str.toString();

  for (
    let i = string1.length - 1, j = string2.length - 1;
    i >= 0 || j >= 0 || carry > 0;
    i--, j--
  ) {
    const digit1 = i >= 0 ? parseInt(string1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(string2[j]) : 0;
    const sum = digit1 + digit2 + carry;
    const digitSum = sum % 10;
    output = digitSum + output;
    carry = Math.floor(sum / 10);
  }

  return output;
};

String.prototype.minus = function (str) {
  let output = "";
  let borrow = 0;
  let string1 = this.toString();
  let string2 = str.toString();

  for (
    let i = string1.length - 1, j = string2.length - 1;
    i >= 0 || j >= 0 || borrow > 0;
    i--, j--
  ) {
    const digit1 = i >= 0 ? parseInt(string1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(string2[j]) : 0;

    const difference = digit1 - digit2 - borrow;

    if (difference < 0) {
      output = (difference + 10).toString() + output;
      borrow = 1;
    } else {
      output = difference.toString() + output;
      borrow = 0;
    }
  }

  output = output.replace(/^0+/, "");

  return output || "0";
};

String.prototype.multiply = function (str) {
  let output = "";
  let string1 = this.toString();
  let string2 = str.toString();

  for (let j = string2.length - 1; j >= 0; j--) {
    let carry = 0;
    let tempResult = "";

    for (let k = 0; k < string2.length - 1 - j; k++) {
      tempResult += "0";
    }

    const digit2 = parseInt(string2[j]);

    for (let i = string1.length - 1; i >= 0 || carry > 0; i--) {
      const digit1 = i >= 0 ? parseInt(string1[i]) : 0;
      const product = digit1 * digit2 + carry;
      const digitProduct = product % 10;

      carry = Math.floor(product / 10);

      tempResult = digitProduct.toString() + tempResult;
    }

    output = output.plus(tempResult);
  }

  return output;
};

String.prototype.divide = function (str) {
  function isGreaterOrEqual(num1, num2) {
    num1 = num1.replace(/^0+/, "");
    num2 = num2.replace(/^0+/, "");

    if (num1.length > num2.length) return true;
    if (num1.length < num2.length) return false;

    for (let i = 0; i < num1.length; i++) {
      if (num1[i] > num2[i]) return true;
      if (num1[i] < num2[i]) return false;
    }

    return true;
  }

  if (str === "0") {
    console.error("Division by zero is not allowed.");
    return;
  }

  let dividend = this.toString();
  let divisor = str.toString();
  let output = "";
  let remainder = "";

  for (let digit of dividend) {
    remainder += digit;

    let count = "0";

    while (isGreaterOrEqual(remainder, divisor)) {
      remainder = remainder.minus(divisor);
      count = count.plus("1");
    }

    output += count;
  }

  output = output.replace(/^0+/, "");

  return output || "0";
};

const str1 =
  "222222222222222222222222222222222222222222222222222222222222222222";
const str2 =
  "222222222222222222222222222222222222222222222222222222222222222222";

console.log(str1.plus(str2));
