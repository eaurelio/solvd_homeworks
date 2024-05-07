class Book {
  constructor(title, author, description, ISBN, price, category, availability) {
    this._title = title;
    this._author = author;
    this._description = description;
    this._ISBN = ISBN;
    this._price = price;
    this._category = category;
    this._availability = availability;
  }

  getTitle() {
    return this._title;
  }

  setTitle(title) {
    if (title.length < 3) {
      throw new Error("Title must be at least 3 characters");
    }
    this._title = title;
  }

  getAuthor() {
    return this._author;
  }

  setAuthor(author) {
    if (author.length < 5) {
      throw new Error("Author must be at least 5 characters");
    }
    this._author = author;
  }

  getDescription() {
    return this._description;
  }

  setDescription(description) {
    if (description.length < 3) {
      throw new Error("Description must be at least 3 characters");
    }
    this._description = description;
  }

  getISBN() {
    return this._ISBN;
  }

  setISBN(ISBN) {
    if (ISBN.length < 10) {
      throw new Error("ISBN must be at least 10 characters");
    }
    this._ISBN = ISBN;
  }

  getPrice() {
    return this._price;
  }

  setPrice(price) {
    if (typeof price !== "number" || isNaN(price)) {
      throw new Error("Price must be a number");
    }
    if (price <= 0) {
      throw new Error("Price must be greater than 0");
    }
    this._price = price;
  }

  getCategory() {
    return this._category;
  }

  setCategory(category) {
    if (category.length < 3) {
      throw new Error("Category must be at least 3 characters");
    }
    this._category = category;
  }

  getAvailability() {
    return this._availability;
  }

  setAvailability(availability) {
    if (typeof availability !== "boolean") {
      throw new Error("Availability must be true or false");
    }
    this._availability = availability;
  }
}

class FictionBook extends Book {
  constructor(title, author, description, ISBN, price, category, availability, fiction) {
    super(title, author, description, ISBN, price, category, availability);
    this._fiction = fiction;
  }

  getFiction() {
    return this._fiction;
  }

  setFiction(fiction) {
    if(typeof fiction !== 'boolean'){
      throw new Error('fiction must be true or false')
    }
    this._fiction = fiction;
  }
}

module.exports = { Book, FictionBook };
