function getArrayIntersection(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const intersection = [...set1].filter(value => set2.has(value));
  return intersection;
}

function getArrayUnion(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

const array1 = [1, 2, 3, 3, 4, 5, 'a', 'b'];
const array2 = ['b', 'c',3, 3, 4, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log('Intersection:', intersection);

const union = getArrayUnion(array1, array2);
console.log('Union:', union);