function validateObject(object, schema) {
  for (let prop in schema) {
    if(!(prop in object)) {
      return false
    }

    if(typeof object[prop] !== schema[prop]) {
      return false
    }
  }
  return true
}

const person = {
  name: 'Edson',
  age: 30,
  jobTitle: 'Developer',
  active: false
}

const schema = {
  name: 'string',
  age: 'number',
  jobTitle: 'string',
  active: 'boolean'
}

console.log(
  validateObject(person, schema)
)


// -----------------
const data = [
  { name: 'Edson', age: 30, jobTitle: 'Developer', active: false },
  { name: 'Maria', age: '29', jobTitle: 'Designer', active: true },
  { name: 'John', age: 35, jobTitle: 'Engineer', active: 'yes' },
  { name: 'Sophia', age: 28, jobTitle: 'Manager', active: false },
  { name: 'Michael', age: '27', jobTitle: 'Data Scientist', active: true },
  { name: 'Emma', age: 32, jobTitle: 'Software Engineer', active: 'no' },
  { name: 'David', age: '31', jobTitle: 'Project Manager', active: true },
  { name: 'Olivia', age: 34, jobTitle: 'Frontend Developer', active: false },
  { name: 'James', age: 26, jobTitle: 'Backend Developer', active: true },
  { name: 'Ava', age: '25', jobTitle: 'Product Manager', active: false },
  { name: 'Alexander', age: 33, jobTitle: 'QA Engineer', active: 'yes' },
  { name: 'Isabella', age: 29, jobTitle: 'UI/UX Designer', active: true },
  { name: 'Ethan', age: '28', jobTitle: 'Data Analyst', active: 'no' },
  { name: 'Mia', age: 31, jobTitle: 'Scrum Master', active: true },
  { name: 'William', age: 27, jobTitle: 'System Administrator', active: false },
  { name: 'Charlotte', age: '26', jobTitle: 'DevOps Engineer', active: true },
  { name: 'Daniel', age: 30, jobTitle: 'Software Architect', active: 'yes' },
  { name: 'Amelia', age: 32, jobTitle: 'Technical Lead', active: true },
  { name: 'Benjamin', age: '31', jobTitle: 'Product Owner', active: 'no' },
  { name: 'Emily', age: 28, jobTitle: 'Full Stack Developer', active: false }
];

const filteredObjectsBySchema = (array, schema) =>
  array.filter(el => validateObject(el, schema))

const filteredData = filteredObjectsBySchema(data, schema)

console.table(
  filteredData
)