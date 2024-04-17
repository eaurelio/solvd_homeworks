// TASK 2 - Function Composition and Point-Free Style
const person = { firstName: "Klaus", lastName: "Meine" };
const getFullName = (person) => `${person.firstName} ${person.lastName}`;

console.log(getFullName(person));

// ---------------------------------------------------------------------------
const items = "Radish Lettuce Tomato Carrot Cucumber Carrot Spinach Kale Pepper Lettuce Broccoli Cauliflower Cucumber Radish Celery Asparagus Zucchini Eggplant Spinach Beans Sprouts Arugula Artichoke Radish Lettuce Peas Onion Broccoli Carrot";
const items2 = 'hello Hello    hellO          !!!'

const cleaningInput = (input) => input.toLowerCase().replace(/[^a-z ]+/g, ' ').replace(/ +/g, ' ').trim();
const splitString = (input) => input.split(" ");
const filterArray = (array) => array.filter((element, index) => array.indexOf(element) === index);
const sortArray = (array) => array.sort();

const filterUniqueWords = (input) => sortArray(filterArray(splitString(cleaningInput((input)))));

console.table(filterUniqueWords(items));
console.table(filterUniqueWords(items2));

// ---------------------------------------------------------------------------

const students = [
  { name: "Anna Kowalska", grades: [8.5, 6.7, 7.8, 9.2] },
  { name: "Maria Nowakowska", grades: [6.3, 7.1, 8.3, 9.0] },
  { name: "Katarzyna Zielińska", grades: [7.7, 8.2, 6.5, 9.4] },
  { name: "Agnieszka Wiśniewska", grades: [9.2, 8.0, 7.3, 6.9] },
  { name: "Aleksandra Szymańska", grades: [5.8, 7.6, 8.9, 6.4] },
  { name: "Zofia Wojtasik", grades: [9.4, 6.1, 7.2, 8.7] },
  { name: "Zuzanna Kowalczyk", grades: [8.1, 7.4, 6.8, 9.5] },
  { name: "Julia Górska", grades: [7.9, 8.6, 6.2, 9.3] },
  { name: "Magdalena Marciniak", grades: [6.7, 7.9, 8.4, 9.1] },
  { name: "Wiktoria Dąbrowska", grades: [8.9, 6.8, 7.5, 9.8] },
  { name: "Oliwia Pawłowska", grades: [9.8, 7.3, 8.1, 6.5] },
  { name: "Laura Wójcik", grades: [7.2, 8.9, 6.7, 9.4] },
  { name: "Maja Słońska", grades: [6.5, 8.2, 9.0, 7.6] },
  { name: "Weronika Kozłowska", grades: [8.3, 6.4, 7.7, 9.6] },
  { name: "Wiktoria Adamczyk", grades: [9.1, 7.5, 8.8, 6.3] },
  { name: "Gabriela Michalska", grades: [7.4, 8.1, 6.6, 9.2] },
  { name: "Sandra Nowak", grades: [6.9, 8.3, 7.1, 9.7] },
  { name: "Patrycja Jakubowska", grades: [8.7, 6.9, 7.4, 9.0] },
  { name: "Isabella Zielińska", grades: [9.6, 7.8, 8.2, 6.7] },
  { name: "Lena Jankowska", grades: [7.5, 8.4, 6.3, 9.1] },
  { name: "Emilia Kraus", grades: [6.2, 8.7, 7.9, 9.4] },
  { name: "Hanna Lisowska", grades: [8.8, 6.5, 7.2, 9.9] },
  { name: "Iga Kamińska", grades: [9.3, 7.2, 8.5, 6.8] },
  { name: "Natalia Duda", grades: [7.8, 8.5, 6.7, 9.3] },
  { name: "Julia Woźniak", grades: [6.6, 9.1, 7.6, 8.3] },
  { name: "Michalina Wieczorek", grades: [8.4, 7.1, 6.9, 9.6] },
  { name: "Klaudia Zabiełło", grades: [9.5, 7.7, 8.3, 6.2] },
  { name: "Aleksandra Stasiak", grades: [7.7, 8.8, 6.4, 9.0] },
  { name: "Kinga Zielińska", grades: [6.3, 8.3, 7.8, 9.4] },
  { name: "Nela Lewandowska", grades: [8.1, 6.6, 7.9, 9.2] },
];

const totalStudents = (students) => students.length;
const sumStudentGrade = (student) => student.grades.reduce((sum, grade) => sum + grade, 0);
const getTotalGrade = (students) => students.reduce((total, student) => total + sumStudentGrade(student), 0);
const getAverageGrade = (students) => {
  return (getTotalGrade(students) / (students.length * students[0].grades.length)).toFixed(2);
}

console.log(getAverageGrade(students));