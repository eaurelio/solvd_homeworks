function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunkedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 4;
const result = chunkArray(originalArray, chunkSize);
console.log(result);