class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addItem(book, quantity = 1) {
    if(!book.getAvailability()){
      throw new Error(`Book ${book.getTitle()} is not available`)
    }
    const foundItem = this.items.find(item => item.book === book);
    if (foundItem) {
      foundItem.quantity += quantity;
    } else {
      this.items.push({ book, quantity });
    }
  }

  removeItem(book) {
    const foundItem = this.items.find(item => item.book === book);
    if (foundItem) {
      foundItem.quantity -= 1;
      if (foundItem.quantity === 0) {
        const index = this.items.indexOf(foundItem);
        this.items.splice(index, 1);
      }
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
