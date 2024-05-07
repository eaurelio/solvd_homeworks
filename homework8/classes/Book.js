// export default class Book {
//   constructor(title, author, description, ISBN, price, availability, category) {
//     this._title = title;
//     this._author = author;
//     this._description = description;
//     this._ISBN = ISBN;
//     this._price = price;
//     this._availability = availability;
//     this._category = category;
//   }

//   getTitle() {
//     return this._title;
//   }

//   setTitle(title) {
//     if (title.length < 3) {
//       throw new Error("Title must be at least 3 characters");
//     }
//     this._title = title;
//   }

//   getAuthor() {
//     return this._author;
//   }

//   setAuthor(author) {
//     if (author.length < 5) {
//       throw new Error("Author must be at least 5 characters");
//     }
//     this._author = author;
//   }

//   getDescription() {
//     return this._description;
//   }

//   setDescription(description) {
//     if (this._description.length < 5) {
//       throw new Error("Description must be at least 5 characters");
//     }
//     this._description = description;
//   }

//   getISBN() {
//     return this._ISBN;
//   }

//   setISBN(ISBN) {
//     if (ISBN.length < 10) {
//       throw new Error("ISBN must be at least 10 characters");
//     }
//     this._ISBN = ISBN;
//   }

//   getPrice() {
//     return this._price;
//   }

//   setPrice(price) {
//     if (typeof price !== 'number' || !isNaN(price)){
//       throw new Error('Price must be a number')
//     }
//     if (price <= 0) {
//       throw new Error("Price must be greater than 0");
//     }
//     this._price = price;
//   }

//   getAvailability() {
//     return this._availability;
//   }

//   setAvailability(availability) {
//     if (typeof availability !== "boolean") {
//       throw new Error("Availability must be true or false");
//     }
//     this._availability = availability;
//   }

//   getCategory() {
//     return this._category;
//   }

//   setCategory(category) {
//     if (category.length < 3) {
//       throw new Error("Gender must be at least 3 characters");
//     }
//     this._category = category;
//   }
// }

import { readDataFromFile, writeDataToFile } from './dataUtils.js';

export class Book {
  constructor(title, author, description, ISBN, price, availability, gender) {
    this._title = title;
    this._author = author;
    this._description = description;
    this._ISBN = ISBN;
    this._price = price;
    this._availability = availability;
    this._gender = gender;
  }

  // Getters e Setters...

  static loadBooks() {
    const data = readDataFromFile();
    return data ? data.books : [];
  }

  static saveBooks(books) {
    const data = readDataFromFile() || {};
    data.books = books;
    writeDataToFile(data);
  }

  static addBook(book) {
    const books = Book.loadBooks();
    books.push(book);
    Book.saveBooks(books);
  }

  static deleteBook(ISBN) {
    const books = Book.loadBooks().filter(book => book._ISBN !== ISBN);
    Book.saveBooks(books);
  }

  static updateBook(ISBN, newData) {
    const books = Book.loadBooks().map(book => {
      if (book._ISBN === ISBN) {
        return { ...book, ...newData };
      }
      return book;
    });
    Book.saveBooks(books);
  }

  static getBookByISBN(ISBN) {
    return Book.loadBooks().find(book => book._ISBN === ISBN);
  }
}
