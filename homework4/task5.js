const person = {
  _firstName: "John",
  _lastName: "Doe",
  _age: 30,
  _email: "john.doe@example.com",

  get firstName() {
    return this._firstName;
  },
  set firstName(value) {
    throw new Error("firstName is read-only");
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(value) {
    throw new Error("lastName is read-only");
  },
  get age() {
    return this._age;
  },
  set age(value) {
    throw new Error("age is read-only");
  },
  get email() {
    return this._email;
  },
  set email(value) {
    throw new Error("email is read-only");
  },

  updateInfo({ firstName, lastName, age, email }) {
    if (firstName !== undefined) {
      this._firstName = firstName;
    }
    if (lastName !== undefined) {
      this._lastName = lastName;
    }
    if (age !== undefined) {
      this._age = age;
    }
    if (email !== undefined) {
      this._email = email;
    }
  }
};

Object.defineProperty(person, 'address', {
  value: {},
  writable: false,
  enumerable: false,
  configurable: false
});

const observeObject = (object, callback) => {
  return new Proxy(object, {
    get(target, property, receiver) {
      callback(property, 'get');
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      callback(property, 'set');
      return Reflect.set(target, property, value, receiver);
    }
  });
};

// const observeObject = (object, callback) => {
//   return new Proxy(object, {
//     get(target, property, receiver) {
//       callback(property, 'get');
//       return Reflect.get(target, property, receiver);
//     },
//     set(target, property, value, receiver) {
//       if (['firstName', 'lastName', 'age', 'email'].includes(property)) {
//         callback(property, 'set');
//       }
//       return Reflect.set(target, property, value, receiver);
//     }
//   });
// };


const callback = (property, action) => {
  console.log(`Property "${property}" was ${action}ted.`);
};

const observedPerson = observeObject(person, callback);

// console.log(observedPerson.firstName); // -> "John"
// console.log(observedPerson.age); // -> 30
observedPerson.updateInfo({firstName: "Dude"}); // ->: "Property "_lastName" was set."
