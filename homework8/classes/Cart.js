class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addItem(book, quantity = 1) {
    if(!book.getAvailability()){
      throw new Error(`Book ${book.title} is not available`)
    }
    this.items.push({ book, quantity });
  }

  removeItem(book) {
    const index = this.items.findIndex(item => item.book === book);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.book.getPrice() * item.quantity), 0);
  }

  getItems() {
    return this.items;
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}

module.exports = Cart;
