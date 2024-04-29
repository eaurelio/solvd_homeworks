function multiline(strings, ...values) {
  let fullString = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
  let lines = fullString.split('\n');

  if (lines[0].trim() === '') {
    lines.shift();
  }

  if (lines[lines.length - 1].trim() === '') {
    lines.pop();
  }

  return lines.map((line, index) => `${index + 1} ${line}`).join('\n');
}

const code = multiline`
function add(a, b) {
  return a + b;
}
`;

console.log(code);