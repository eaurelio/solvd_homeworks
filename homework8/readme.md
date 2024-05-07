# Online Bookstore Project
This project simulates the operation of an online bookstore. It is implemented in JavaScript and uses object-oriented programming.

## Functionalities
The project allows users to search for books, add them to their carts, and place orders. It demonstrates the interaction between different classes and the overall functionality of the program.

To use this project, you can instantiate objects from the User, Book, FictionBook, Cart, and Order classes. You can then use the methods of these objects to simulate the functionality of an online bookstore.

## Classes
The project consists of the following classes:

### User Class
The User class represents the users of the bookstore. Each user has a name, age, phone number, email, and a unique user ID.

```JavaScript
// Instantiating the User class
const User = require("./classes/User");
```

The User instance expects to receive a name, age, phone number, and a valid email as parameters.

```JavaScript
// Creating a user
const user1 = new User('John Doe', 25, '123456789', 'john@example.com');
```

### Book Class
The Book class represents individual books. Each book has a title, author, description, ISBN, price, and availability.

```JavaScript
// Instantiating the Book class
const { Book } = require("./classes/Book");
```
The Book instance expects to receive a title, author, description, ISBN, price, category,and availability as parameters.

```JavaScript
// Creating a book
const book1 = new Book('A Brief History of Time', 'Stephen Hawking', 'Guide to cosmology', '9780553380163', 18.00, 'Non-fiction',true);
```
### FictionBook Class
The FictionBook class inherits from the Book class and adds a genre property. This class is used to represent fiction books.

```JavaScript
// Instantiating the FictionBook class
const { FictionBook } = require("./classes/Book");
```
The FictionBook instance expects to receive a title, author, description, ISBN, price, category, availability and fiction as parameters.
```JavaScript
// Creating a fiction book
const book1 = new FictionBook('1984', 'George Orwell', 'Dystopian novel', '9780451524935', 10.25, 'Fiction', true, true);
```
### Cart Class
The Cart class simulates a shopping cart. It has methods to add books, remove books, and calculate the total price of the books in the cart.

```JavaScript
// Instantiating the Cart class 
const Cart = require("./classes/Cart");
```
The Cart instance expects to receive a user as a parameter. You can use the addItem method to add items to the cart.

```JavaScript
// Creating a cart
const cart1 = new Cart(user1)

// Adding books to the cart
cart1.addItem(book1, 2)
cart1.addItem(book8)

// Cart output in console
Cart {
  user: User {
    _id: 53711,
    _name: 'John Doe',
    _age: 25,
    _phone: '123456789',
    _email: 'john@mail.com'
  },
  items: [
    { book: [Book], quantity: 2 },
    { book: [FictionBook], quantity: 1 }
  ]
}
```
### Order Class
The Order class represents a user’s order. It includes information about the user, the ordered books, the total price, the order date, and an order number.

```JavaScript
// Instantiating the Order class
const Order = require("./classes/Order");
```
The Order instance expects to receive a cart as a parameter.

```JavaScript
const order1 = new Order(cart1)

// Order output in console
Order {
  _user: User {
    _id: 443052,
    _name: 'John Doe',
    _age: 25,
    _phone: '123456789',
    _email: 'john@mail.com'
  },
  _items: [
    { book: [Book], quantity: 2 },
    { book: [FictionBook], quantity: 1 }
  ],
  _totalPrice: 46.29,
  _orderDate: 2024-05-07T23:15:56.800Z,
  _orderNumber: 71453
}
```