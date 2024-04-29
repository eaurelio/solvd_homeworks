// -------------------------------
function customFilterUnique(array, callback) {
  const unique = [];
  const map = new Map();

  for (const item of array) {
    const key = callback(item);
    if (!map.has(key)) {
      map.set(key, true);
      unique.push(item);
    }
  }

  return unique;
}

// Using array of numbers
const numbers = [1,1,2,3,3,4,5,6,6,6,7,8,9]

const uniqueNumbers = customFilterUnique(numbers, (el) => el)
console.log(uniqueNumbers)

// Using array of objects
const person = [
  { id: 1, name: 'Aleksandra' }, // Duplicated
  { id: 2, name: 'Wojciech' }, // Duplicated
  { id: 3, name: 'Katarzyna' },
  { id: 4, name: 'Jakub' },
  { id: 2, name: 'Wojciech' }, // Duplicated
  { id: 5, name: 'Zofia' },
  { id: 6, name: 'Mikołaj' },
  { id: 7, name: 'Anna' },
  { id: 1, name: 'Aleksandra' }, // Duplicated
  { id: 8, name: 'Tomasz' }
];

const uniqueObjects = customFilterUnique(person, (obj) => obj.id);
console.log(uniqueObjects);

