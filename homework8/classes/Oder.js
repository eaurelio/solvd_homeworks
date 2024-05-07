// export default class Order {
//   constructor(user, books) {
//     this._user = user;
//     this._books = books;
//     this._totalPrice = this.calculateTotalPrice();
//   }

//   getUser() {
//     return this._user;
//   }

//   setUser(user) {
//     this._user = user;
//   }

//   getBooks() {
//     return this._books;
//   }

//   setBooks(books) {
//     this._books = books;
//   }

//   getTotalPrice() {
//     return this._totalPrice;
//   }

//   calculateTotalPrice() {
//     let totalPrice = 0;
//     for (const book of this._books) {
//       totalPrice += book.getPrice();
//     }
//     return totalPrice;
//   }
// }

import { readDataFromFile, writeDataToFile } from '../data/dataUtils';

export class Order {
  constructor(userId, books) {
    this._userId = userId;
    this._books = books;
    this._totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    return this._books.reduce((total, book) => total + book._price, 0);
  }

  static saveOrder(order) {
    const data = readDataFromFile() || {};
    data.orders = data.orders || [];
    data.orders.push(order);
    writeDataToFile(data);
  }

  static loadOrders() {
    const data = readDataFromFile() || {};
    return data.orders || [];
  }
}
