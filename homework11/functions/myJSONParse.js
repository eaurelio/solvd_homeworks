function tokenize(json) {
// Tokenizes the JSON input string
  const tokens = [];
  let lastIndex = 0;
  
  // Identifying and parsing each type of input data
  const tokenPatterns = {
      whitespace: /\s+/y,
      true: /true/y,
      false: /false/y,
      null: /null/y,
      number: /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/y,
      string: /"(?:\\["\\/bfnrt]|\\u[a-fA-F0-9]{4}|[^"\\\x00-\x1F\x7F]+)*"/y,
      punctuation: /[{}[\],:]/y
  };

  // looping through each json element for tokenization
  while (lastIndex < json.length) {
      let matched = false;

      for (const [type, pattern] of Object.entries(tokenPatterns)) {
          pattern.lastIndex = lastIndex;
          const match = pattern.exec(json);

          if (match) {
              if (type !== 'whitespace') {
                  tokens.push(match[0]);
              }
              lastIndex = pattern.lastIndex;
              matched = true;
              break;
          }
      }

      if (!matched) {
          throw new SyntaxError(`invalid JSON at position ${lastIndex}`);
      }
  }

  return tokens;
}

// Main Function
function myJSONParse(json) {
  const tokens = tokenize(json);
  let index = 0;

  // Data transform - JSON to Javascript Object
  function parseValue() {
      const token = tokens[index++];
      const validNumber = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;
      const delimitedString = /^".*"$/;
      
      if (token === '{') return parseObject();
      if (token === '[') return parseArray();
      if (token === 'true') return true;
      if (token === 'false') return false;
      if (token === 'null') return null;
      if (validNumber.test(token)) return Number(token);
      if (delimitedString.test(token)) return parseString(token);

      throw new SyntaxError("invalid JSON: " + token);
  }

  // Function to handle strings and avoid special chacacters
  function parseString(token) {
    const specialCharacteres = /\\(u[\dA-Fa-f]{4}|["\\/bfnrt])/g;
    
    return token.slice(1, -1).replace(specialCharacteres, match => {
        switch (match[1]) {
            case 'b': return '\b';
            case 'f': return '\f';
            case 'n': return '\n';
            case 'r': return '\r';
            case 't': return '\t';
            case 'u': return String.fromCharCode(parseInt(match.slice(2), 16));
            default: return match[1];
        }
      });
  }

  // Function to handle objects in JSON input
  function parseObject() {
      const object = {};
      let first = true;

      while (tokens[index] !== '}') {
          if (!first) {
              if (tokens[index++] !== ',') throw new SyntaxError("Expected ',' in the JSON object");
          }
          first = false;
          const key = parseValue();
          if (typeof key !== 'string') throw new SyntaxError("The object key must be a string");
          if (tokens[index++] !== ':') throw new SyntaxError("Expected ':' after a JSON object key");
          object[key] = parseValue();
      }
      index += 1;
      return object;
  }

  // Function to handle arrays in JSON input
  function parseArray() {
      const array = [];
      let first = true;
      while (tokens[index] !== ']') {
          if (!first) {
              if (tokens[index++] !== ',') throw new SyntaxError("Expected ',' in JSON array");
          }
          first = false;
          array.push(parseValue());
      }
      index += 1;
      return array;
  }

  return parseValue();
}

module.exports = myJSONParse;
