// export default class Cart {
//   constructor(user) {
//     this.user = user;
//     this.items = [];
//   }

//   addItem(book, quantity = 1) {
//     this.items.push({ book, quantity });
//   }

//   removeItem(book) {
//     const index = this.items.findIndex(item => item.book === book);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   getTotalPrice() {
//     return this.items.reduce((total, item) => total + (item.book.getPrice() * item.quantity), 0);
//   }

//   getItems() {
//     return this.items;
//   }

//   getUser() {
//     return this.user;
//   }

//   setUser(user) {
//     this.user = user;
//   }
// }

import { readDataFromFile, writeDataToFile } from './dataUtils.js';

export class Cart {
  constructor(userId) {
    this._userId = userId;
    this._books = [];
  }

  addBook(ISBN) {
    const book = Book.getBookByISBN(ISBN);
    if (book) {
      this._books.push(book);
      this.saveCart();
    } else {
      console.error('Book with ISBN', ISBN, 'not found.');
    }
  }

  removeBook(ISBN) {
    const index = this._books.findIndex(book => book._ISBN === ISBN);
    if (index !== -1) {
      this._books.splice(index, 1);
      this.saveCart();
    } else {
      console.error('Book with ISBN', ISBN, 'not found in cart.');
    }
  }

  calculateTotalPrice() {
    return this._books.reduce((total, book) => total + book._price, 0);
  }

  saveCart() {
    const data = readDataFromFile() || {};
    data.carts = data.carts || {};
    data.carts[this._userId] = this._books;
    writeDataToFile(data);
  }

  static loadCart(userId) {
    const data = readDataFromFile() || {};
    return data.carts ? data.carts[userId] || [] : [];
  }
}
