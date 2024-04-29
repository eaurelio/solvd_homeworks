function customShuffle(array) {
  const shuffledArray = [...array]; 

  // Fisher-Yates Algorithm - Knuth shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledResult = customShuffle(numbers);
console.log(shuffledResult);