function getArrayIntersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

function getArrayUnion(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log('Intersection:', intersection);

const union = getArrayUnion(array1, array2);
console.log('Union:', union);