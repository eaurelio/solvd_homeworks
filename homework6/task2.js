function highlightKeywords(strings, ...values) {
  const keywords = ["JavaScript", "template", "tagged"];
  let result = "";

  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      if (keywords.includes(values[i])) {
        result += `<span class='highlight'>${values[i]}</span>`;
      } else {
        result += values[i];
      }
    }
  });

  return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = highlightKeywords`Learn ${keywords[0]} tagged templates to create custom ${keywords[1]} literals for ${keywords[2]} manipulation.`;

console.log(template);