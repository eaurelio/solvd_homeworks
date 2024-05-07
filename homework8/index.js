// importing classes

const { Book, FictionBook } = require("./classes/Book");
const User = require("./classes/User");
const Cart = require("./classes/Cart");
const Order = require("./classes/Order");

// instancing users

const user1 = new User('John Doe', 25, '123456789', 'john@mail.com');
const user2 = new User('Jane Smith', 30, '987654321', 'jane@mail.com');
const user3 = new User('Alice Johnson', 28, '234567890', 'alice@mail.com');
const user4 = new User('Bob Williams', 32, '345678901', 'bob@mail.com');
const user5 = new User('Charlie Brown', 22, '456789012', 'charlie@mail.com');
const user6 = new User('Diana Miller', 27, '567890123', 'diana@mail.com');
const user7 = new User('Ethan Wilson', 31, '678901234', 'ethan@mail.com');
const user8 = new User('Fiona Davis', 24, '789012345', 'fiona@mail.com');

// instancing books

const book1 = new Book('A Brief History of Time', 'Stephen Hawking', 'Guide to cosmology', '9780553380163', 18.00, 'Non-fiction',true);
const book2 = new Book('The Art of War', 'Sun Tzu', 'Military strategy', '9781599869773', 6.99, 'Philosophy', true);
const book3 = new Book('A Room of One\'s Own', 'Virginia Woolf', 'Feminist text', '9780156787338', 13.95, 'Essay', true);
const book4 = new Book('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 'Medical history', '9781400052189', 16.00, 'Non-fiction', true);
const book5 = new Book('The Prince', 'Niccolò Machiavelli', 'Political treatise', '9780486272740', 3.00, 'Philosophy', true);
const book6 = new FictionBook('1984', 'George Orwell', 'Dystopian novel', '9780451524935', 10.25, 'Fiction', true, true);
const book7 = new FictionBook('The Odyssey', 'Homer', 'Epic poem', '9780140268867', 13.99, 'Greek Mythology', true, true);
const book8 = new FictionBook('The Old Man and the Sea', 'Ernest Hemingway', 'Classic novel', '9780684801223', 10.29, 'Novella', true, true);


// creating carts and adding/removing books
const cart1 = new Cart(user1)
cart1.addItem(book1, 3)
cart1.addItem(book8)
cart1.removeItem(book1)

// creating order
const order1 = new Order(cart1)
console.log(order1)

// creating carts and adding books
const cart2 = new Cart(user2);
cart2.addItem(book3);
cart2.addItem(book4);
cart2.addItem(book5);
cart2.addItem(book7, 3);

// creating order
const order2 = new Order(cart2);
console.log(order2);

// creating carts and adding books
const cart3 = new Cart(user3);
cart3.addItem(book1);
cart3.addItem(book5);
cart3.addItem(book6);

// creating order
const order3 = new Order(cart3);
console.log(order3);

// creating carts and adding books
const cart4 = new Cart(user4);
cart4.addItem(book5);
cart4.addItem(book7);
cart4.addItem(book8);

// creating order
const order4 = new Order(cart4);
console.log(order4);

// creating carts and adding books
const cart5 = new Cart(user5);
cart5.addItem(book3);

// creating order
const order5 = new Order(cart5);
console.log(order5);

// creating carts and adding books
const cart6 = new Cart(user6);
cart6.addItem(book2);
cart6.addItem(book4);
cart6.addItem(book5, 2);

// creating order
const order6 = new Order(cart6);
console.log(order6);

// creating carts and adding books
const cart7 = new Cart(user7);
cart7.addItem(book5);
cart7.addItem(book7);

// creating order
const order7 = new Order(cart7);
console.log(order7);

// creating carts and adding books
const cart8 = new Cart(user8);
cart8.addItem(book6);
cart8.addItem(book7);

// creating order
const order8 = new Order(cart8);
console.log(order8);

