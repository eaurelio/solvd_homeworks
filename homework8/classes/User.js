class User {
  constructor(name, age, phone, email) {
    this._id = Math.floor(Math.random() * 1000000);
    this._name = name;
    this._age = age;
    this._phone = phone;
    this._email = email;
  }

  getName() {
    return this._name;
  }
  setName(name) {
    if (name.length < 3 || typeof name !== "string") {
      throw new Error("insert a valid name");
    }
    this._name = name;
  }
  getAge() {
    return this._age;
  }
  setAge(age) {
    if (typeof age !== "number" || !isNaN(age)) {
      throw new Error("age must be a number");
    }
    this._age = age;
  }
  getPhone() {
    return this._phone;
  }
  setPhone(phone) {
    if (typeof phone !== "number" || !isNaN(phone) || phone.length < 8) {
      throw new Error("phone must be a number");
    }
    this._phone = phone;
  }
  getEmail() {
    return this._email;
  }
  setEmail(email) {
    const validateMail = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (!validateMail.test(email)) {
      throw new Error("email is invalid");
    }
    this._email = email;
  }
  getId() {
    return this._id;
  }
}

module.exports = User;