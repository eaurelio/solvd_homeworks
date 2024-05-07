class Order {
  constructor(cart) {
    this._user = cart.getUser();
    this._items = cart.getItems();
    this._totalPrice = this.calculateTotalPrice();
    this._orderDate = new Date;
    this._orderNumber = Math.floor(Math.random() * 100000);
  }

  getUser() {
    return this._user;
  }

  getItems() {
    return this._items;
  }

  getTotalPrice() {
    return this._totalPrice;
  }

  getOrderDate(){
    return this._orderDate;
  }

  getOrderNumber(){
    return this._orderNumber;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this._items) {
      totalPrice += item.book.getPrice() * item.quantity;
    }
    return totalPrice.toFixed(2);
  }
}

module.exports = Order;