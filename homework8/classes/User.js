// export default class User {
//   constructor(name, age, phone, email, id) {
//     this._name = name;
//     this._age = age;
//     this._phone = phone;
//     this._email = email;
//     this._id = id;
//   }

//   getName() {
//     return this._name;
//   }
//   setName(name) {
//     if (name.length < 3 || typeof name !== "string") {
//       throw new Error("insert a valid name");
//     }
//     this._name = name;
//   }
//   getAge() {
//     return this._age;
//   }
//   setAge(age) {
//     if (typeof age !== "number" || !isNaN(age)) {
//       throw new Error("age must be a number");
//     }
//     this._age = age;
//   }
//   getPhone() {
//     return this._phone;
//   }
//   setPhone(phone) {
//     if (typeof phone !== "number" || !isNaN(phone) || phone.length < 8) {
//       throw new Error("phone must be a number");
//     }
//     this._phone = phone;
//   }
//   getEmail() {
//     return this._email;
//   }
//   setEmail(email) {
//     const validateMail = new RegExp(
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     );
//     if (!validateMail.test(email)) {
//       throw new Error("email is invalid");
//     }
//     this._email = email;
//   }
//   getId() {
//     return this._id;
//   }
//   setId(id) {
//     if(typeof id !== 'number' || !isNaN(id) || id < 1) {
//       throw new Error('id must be an integer')
//     }
//     this._id = id
//   }
// }

import { readDataFromFile, writeDataToFile } from '../data/dataUtils';

export class User {
  constructor(name, age, phone, email, id) {
    this._name = name;
    this._age = age;
    this._phone = phone;
    this._email = email;
    this._id = id;
  }

  // Getters e Setters...

  static loadUsers() {
    const data = readDataFromFile();
    return data ? data.users : [];
  }

  static saveUsers(users) {
    const data = readDataFromFile() || {};
    data.users = users;
    writeDataToFile(data);
  }

  static addUser(user) {
    const users = User.loadUsers();
    users.push(user);
    User.saveUsers(users);
  }

  static deleteUser(userId) {
    const users = User.loadUsers().filter(user => user._id !== userId);
    User.saveUsers(users);
  }

  static updateUser(userId, newData) {
    const users = User.loadUsers().map(user => {
      if (user._id === userId) {
        return { ...user, ...newData };
      }
      return user;
    });
    User.saveUsers(users);
  }

  static getUserById(userId) {
    return User.loadUsers().find(user => user._id === userId);
  }
}
