function createImmutableObject(object) {
  const immutableObject = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(object, key);
      if (propertyDescriptor.get || propertyDescriptor.set) {
        Object.defineProperty(immutableObject, key, {
          get: propertyDescriptor.get,
          set: propertyDescriptor.set,
          enumerable: propertyDescriptor.enumerable,
          configurable: false
        });
      } else if (typeof object[key] === 'object' && object[key] !== null) {
        immutableObject[key] = createImmutableObject(object[key]);
      } else {
        Object.defineProperty(immutableObject, key, {
          value: object[key],
          writable: false,
          enumerable: true,
          configurable: false
        });
      }
    }
  }

  return immutableObject;
}



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

const immutablePerson = createImmutableObject(person);

immutablePerson.updateInfo({
  firstName: "Jane",
  age: 32
});

console.table(
  Object.getOwnPropertyDescriptors(immutablePerson)
)

