function stringPlus(string1, string2) {
  let output = "";
  let carry = 0;

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
}

function stringMinus(string1, string2) {
  let output = "";
  let borrow = 0;

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
}

function stringMultiply(string1, string2) {
  let output = "";

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

    output = stringPlus(output, tempResult);
  }

  output = output.replace(/^0+/, "");

  return output || "0";
}

function stringDivides(dividend, divisor) {
  if (divisor === "0") {
    throw new Error("Divisão por zero não é permitida.");
  }

  let result = "";
  let currentQuotient = "";

  for (let i = 0; i < dividend.length; i++) {
    currentQuotient += dividend[i];

    currentQuotient = currentQuotient.replace(/^0+/, "");

    let quotient = "0";

    while (
      currentQuotient !== "" &&
      isGreaterOrEqual(currentQuotient, divisor)
    ) {
      let remainder = currentQuotient;
      let count = "0";

      while (isGreaterOrEqual(remainder, divisor)) {
        remainder = stringMinus(remainder, divisor);
        count = stringPlus(count, "1");
      }

      currentQuotient = remainder;
      quotient = stringPlus(quotient, count);
    }

    result += quotient;
  }

  result = result.replace(/^0+/, "");

  return result || "0";
}

function stringDivide(dividend, divisor) {
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
  if (divisor === "0") {
    console.error("Division by zero is not allowed.");
    return;
  }

  let output = "";
  let remainder = "";

  for (let digit of dividend) {
    remainder += digit;

    let count = "0";

    while (isGreaterOrEqual(remainder, divisor)) {
      remainder = stringMinus(remainder, divisor);
      count = stringPlus(count, "1");
    }

    output += count;
  }

  output = output.replace(/^0+/, "");

  return output || "0";
}

const str1 = "65465321654987654621321654987";
const str2 = "6545465654654654654654654654";

console.log(stringPlus(str1, str2));
console.log(stringMinus(str1, str2));
console.log(stringMultiply(str1, str2));
console.log(stringDivide(str1, str2));
