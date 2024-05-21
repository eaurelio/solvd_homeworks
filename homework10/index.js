const CustomHashTable = require('./classes/CustomHashTable');

// Implementation and usage examples

// Users
const users = new CustomHashTable();
users.insert('maria123', { name: 'Maria Silva', age: '28', userName: 'maria123' });
users.insert('john_doe', { name: 'John Doe', age: '45', userName: 'john_doe' });
users.insert('lucas99', { name: 'Lucas Pereira', age: '23', userName: 'lucas99' });
users.insert('anna_k', { name: 'Anna Kimura', age: '30', userName: 'anna_k' });
users.insert('sophie', { name: 'Sophie Brown', age: '26', userName: 'sophie' });
users.insert('julia_taylor', { name: 'Julia Taylor', age: '34', userName: 'julia_taylor' });
users.insert('max_miller', { name: 'Max Miller', age: '29', userName: 'max_miller' });
users.insert('chris_evans', { name: 'Chris Evans', age: '40', userName: 'chris_evans' });
users.insert('linda_smith', { name: 'Linda Smith', age: '37', userName: 'linda_smith' });
users.delete('john_doe');
console.log(
  users.get('maria123')
);
console.table(
  users.iterate()
);

// ------------------------------------------------------------------


// DNS cache
const dnsCache = new CustomHashTable();
dnsCache.insert('www.solvd.com', '76.76.21.123');
dnsCache.insert('www.google.com', '172.217.16.196');
dnsCache.insert('www.github.com', '140.82.114.4');
dnsCache.insert('www.stackoverflow.com', '151.101.1.69');
dnsCache.insert('developer.mozilla.org', '37.111.97.67');
dnsCache.insert('www.linkedin.com', '13.107.42.14');
dnsCache.insert('www.wikipedia.org', '208.80.154.224');
dnsCache.insert('www.reddit.com', '151.101.1.140');
dnsCache.insert('www.salesforce.com', '96.43.148.87');

console.table(
  dnsCache.iterate()
);

// ------------------------------------------------------------------

// Database query cache
const queryCache = new CustomHashTable();
const complexQuery = `
  SELECT u.id, u.name, o.order_id, o.item, o.order_date
  FROM users u
  JOIN (
    SELECT user_id, order_id, item, order_date
    FROM orders
    WHERE order_date = (
      SELECT MAX(order_date)
      FROM orders o2
      WHERE o2.user_id = orders.user_id
    )
  ) o ON u.id = o.user_id
  WHERE u.has_orders = 1
`;
const queryResult = [
  { id: 1, name: 'Alice', order_id: 101, item: 'Laptop', order_date: '2024-05-20' },
  { id: 2, name: 'Bob', order_id: 103, item: 'Tablet', order_date: '2024-05-18' },
  { id: 3, name: 'Charlie', order_id: 104, item: 'Camera', order_date: '2024-05-19' }
];

queryCache.insert(complexQuery, queryResult);
console.table(
  queryCache.get(complexQuery)
);

// ------------------------------------------------------------------

// File System
const fileSystem = new CustomHashTable();
fileSystem.insert('/home/user/shopping_list.txt', { 
  size: '15KB', 
  type: 'text', 
  created: '2024-05-01', 
  owner: 'user', 
  permissions: 'rw-r--r--', 
  lastModified: '2024-05-10 08:30:15' 
});

fileSystem.insert('/home/user/Wallpaper3d.jpg', { 
  size: '2MB', 
  type: 'image', 
  created: '2024-04-21', 
  owner: 'user', 
  permissions: 'rw-r-----', 
  lastModified: '2024-05-15 14:20:45' 
});

console.table(
  fileSystem.get('/home/user/shopping_list.txt')
);
