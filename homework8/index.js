import User from './User.js';
import Book from './Book.js';
import Cart from './Cart.js';
import Order from './Order.js';

const user1 = new User('John Doe', 25, '123456789', 'john@example.com', 1);
const user2 = new User('Jane Smith', 30, '987654321', 'jane@example.com', 2);

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic novel', '9780743273565', 15.99, true, 'Fiction');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Pulitzer Prize-winning novel', '9780061120084', 12.50, true, 'Fiction');
const book3 = new Book('1984', 'George Orwell', 'Dystopian novel', '9780451524935', 10.25, true, 'Fiction');

