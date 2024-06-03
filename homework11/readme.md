# JSON Syntax

* [Data Types](#data-types)
* [Parsing Rules](#parsing-rules)

JSON (JavaScript Object Notation) is a simple way to represent structured data using a straightforward syntax, making it easy for humans to read and write, and simplified for software to create and analyze.

### Data Types

1. **JSON Objects**: A JSON Object is a non-ordered collection of key/value pairs. The key-value pairs are separated by a colon (`:`), and the pairs are separated by commas (`,`). A JSON Object is delimited by braces `{}`.

```json
{
  "name": "Alice",
  "age": 22,
  "city": "Chicago"
}
```

2. **JSON Arrays**: A JSON Array is an ordered collection of values. The values of a JSON Array are separated by commas (`,`), and the array is delimited by square brackets `[]`.

```json
["apple", "banana", "cherry"]
```

3. **JSON Strings**: A JSON String is a sequence of characters delimited by double quotes (`"`). It can contain any valid Unicode character, including escape characters to represent special characters, like `\n` for newline.

```json
"Hi, there!"
```

4. **JSON Numbers**: A JSON Number is a sequence of digits, possibly with a decimal point and a minus sign to represent negative numbers.

```json
-273.15
```

5. **JSON Booleans**: JSON Booleans are represented by the keywords `true` and `false`.

```json
true
```

6. **JSON Null Values**: A JSON Null value is represented by the keyword `null`.

```json
null
```

### Parsing Rules

1. **Nested Objects and Arrays**: JSON allows nested objects and arrays inside other objects and arrays. This means that a JSON object may contain other objects as values and properties, and a JSON array may contain other JSON arrays as elements.

```json
{
  "book": {
    "title": "The Lord of the Rings",
    "author": {
      "name": "J.R.R. Tolkien",
      "nationality": "British"
    },
    "release_year": 1954,
    "protagonists": ["Frodo", "Gandalf", "Aragorn"]
  }
}
```

2. **Strings with Special Characters**: JSON strings may contain special characters, like double quotes (`"`), slashes (`\`), escape characters, and Unicode characters (`\n`, `\r`).

```json
"A string with special characters \" \\ \r"
```

3. **Negative and Decimal Numbers**: JSON numbers can be negative and/or decimals (float).

```json
-273.45
```

4. **Whitespace**: JSON is insensitive to blank spaces, tabulations, and newlines, except within string values.

# Custom JSON Parse Function

The `myJSONParse()` function is a custom implementation of JSON parsing in JavaScript. It takes a JSON string as input and returns the parsed JavaScript object. For this implementation, regex was an important factor in handling the transformation of a string into a JavaScript object, validating input data types through tokenization, and dealing with whitespace removal, special characters, and escape characters. This made the implementation robust and ensured the successful conversion of data.

* [Example Usage](#example-usage)
* [Exceptions](#exceptions)
* [Implementation](#implementation)
* [Reflection](#reflection)
* [External references](#external-references)

## Example Usage

```javascript
const myJSONParse = require('./myJSONParse');

const jsonObject = '{"name":"Tony", "age":22, "city":"Chicago"}';
const javascriptObject = myJSONParse(jsonObject);

console.log(javascriptObject); // Output: { name: 'Tony', age: 22, city: 'Chicago' }
```

## Exceptions

- `Error`: Throws an error if the provided JSON string is invalid.

```javascript
const wrongJson = `
  {
    "name": "Dude"
    "age": "30"
  }
`

console.log(myJSONParse(wrongJson)) // Output { Error: Expected ',' in the JSON object }
```

## Implementation

The `myJSONParse()` function is implemented in two parts:

1. **Tokenization**: The `tokenize` function takes a JSON string and splits it into an array of tokens like strings, numbers, booleans, null values, and punctuation, ignoring any whitespace. It uses regex patterns to match each token type and updates its position as it goes. If it encounters an invalid part, it throws an error. This function helps in breaking down JSON for easier processing or analysis.

2. **Parsing**: The `myJSONParse` function converts a JSON string into a JavaScript object. It first tokenizes the input, then parses the tokens based on their type (object, array, boolean, null, number, or string). Helper functions `parseObject`, `parseArray`, and `parseString` manage the nested structures and special characters. If any part of the JSON is invalid, it throws an error. This function essentially mimics the behavior of `JSON.parse`, breaking down and interpreting the JSON string step-by-step.

## Reflection

When we talk about implementing a native JavaScript function by hand with this level of complexity, we encounter some difficulties, such as:

1. Deep understanding of JSON syntax.
2. Correctly identifying each data type (tokenization).
3. Knowledge of regex.
4. Handling special and escape characters (input data validation).
5. Recursion (optimization and performance).
6. Error handling.
7. Writing code using best practices (readability and maintainability).

## External References

* [JSON - Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [Regex - Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
* [Tokenization](https://goodboychan.github.io/python/datacamp/natural_language_processing/2020/07/15/01-Regular-expressions-and-word-tokenization.html)
* [Regex Generator](https://regexr.com/)
* [Regex Tester](https://www.akto.io/tools/javascript-regex-tester)
