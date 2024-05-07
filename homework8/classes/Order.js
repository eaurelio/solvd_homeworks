class Order {
  constructor(cart) {
    this._user = cart.getUser();
    this._items = cart.getItems();
    this._totalPrice = cart.getTotalPrice();
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
}

module.exports = Order;
