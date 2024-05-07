# Online Bookstore Project
This project simulates the operation of an online bookstore. It is implemented in JavaScript and uses object-oriented programming.

### Functionalities
The project allows users to search for books, add them to carts, and place orders. It demonstrates the interaction between different classes and the overall functionality of the program.

How to Use To use this project, you can instantiate objects from the User, Book, FictionBook, Cart, and Order classes. You can then use the methods of these objects to simulate the functionality of an online bookstore.


Classes The project consists of the following classes:

### User Class
The User class represents the users of the bookstore. Each user has a name, age, phone number, email, and a unique user ID.
```javascript
// instantiating class User
const User = require("./classes/User");
```

the instance of user expects to receive name, age, telephone number and a valid email as parameters

```javascript
// creating a user
const user1 = new User('John Doe', 25, '123456789', 'john@example.com');
```

### Book Class
The Book class represents individual books. Each book has a title, author, description, ISBN, price, and availability.
```javascript
// instantiating class Book
const { Book } = require("./classes/Book");
```

the instance of book expects to receive title, author, description ISBN, price and avaiability as parameters

```javascript
// creating a book
const book2 = new Book('A Brief History of Time', 'Stephen Hawking', 'Guide to cosmology', '9780553380163', 18.00, true);
```

### FictionBook Class
The FictionBook class inherits from the Book class and adds a genre property. This class is used to represent fiction books.
```javascript
// instantiating
const { FictionBook } = require("./classes/Book");
```

the instance of book expects to receive title, author, description ISBN, price, avaiability and genre as parameters

```javascript
// creating a fiction book
const book1 = new FictionBook('1984', 'George Orwell', 'Dystopian novel', '9780451524935', 10.25, true, 'Fiction');
```

### Cart Class
 The Cart class simulates a shopping cart. It has methods to add books, remove books, and calculate the total price of the books in the cart.
 ```javascript
// instantiating a Class Cart 
const Cart = require("./classes/Cart");
```

the cart expects to receive a user as parameter. You can use the addItem method to add items to cart.

```javascript
// creating a cart
const cart1 = new Cart(user1)

// inserting books into the cart
cart1.addItem(book1)
cart1.addItem(book2)
cart1.addItem(book5)

// cart output in console
Cart {
  user: User {
    _id: 942425,
    _name: 'John Doe',
    _age: 25,
    _phone: '123456789',
    _email: 'john@mail.com'
  },
  items: [
    { book: [FictionBook], quantity: 1 },
    { book: [Book], quantity: 1 },
    { book: [FictionBook], quantity: 1 }
  ]
}
```

### Order Class
The Order class represents a user’s order. It includes information about the user, the ordered books, the total price, the order date, and an order number.
```javascript
// instantiating a Class Order
const Order = require("./classes/Order");
```

the instance of order expects to receive a cart as parameter


```javascript
const order1 = new Order(cart1)

// output output in console
Order {
  _user: User {
    _id: 942425,
    _name: 'John Doe',
    _age: 25,
    _phone: '123456789',
    _email: 'john@mail.com'
  },
  _items: [
    { book: [FictionBook], quantity: 1 },
    { book: [Book], quantity: 1 },
    { book: [FictionBook], quantity: 1 }
  ],
  _totalPrice: '42.24',
  _orderDate: 2024-05-07T20:54:37.319Z,
  _orderNumber: 44394
}
```