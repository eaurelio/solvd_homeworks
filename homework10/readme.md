# Hash tables and Hash functions

1. [Hash Table](#hash-table)
2. [How it works](#how-it-works)
3. [Hash function](#hash-function)
4. [Collision resolution](#collision-resolution)
5. [Time complexity](#time-complexity)
6. [Advantages and disadvantages](#advantages-and-disadvantages)
7. [Practical applications](#practical-applications-for-hash-tables-include)
8. [CustomHashTable Class](#customhashtable-class)
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [Example Usage](#example-usage)
9. [Example Implementations](#example-implementations)
    - [DNS Cache](#dns-cache)
    - [Database Query Cache](#database-query-cache)
    - [File System](#file-system)

## Hash Table
**Definition:** A hash table is a data structure that associates keys and values. It uses a hash function to calculate an index in an array of buckets or slots, where the expected value can be found.

### Principal components
1. **Key:** The unique id used to store and recover a value.
2. **Value:** The data associated with the key.
3. **Hash function:** Converts the key into an index in the array when the value is saved.
4. **Buckets (slots):** Storage structures, where each bucket can store one or more key-value pairs.

## How it works
1. **Insertion:** When a new key-value is inserted, the hash function is used to calculate the key index. So, the value is stored in the bucket corresponding to this index.
2. **Search:** To find a value, the hash function is applied to the key to find the corresponding index, and the bucket is searched for the specific key.
3. **Deletion:** To remove a key-value pair, the hash function is used to find the bucket, and the pair is removed.

## Hash function
**Purpose:** Ensure that the keys are distributed correctly between the buckets.
**Process:** The hash function accepts a key and returns a numeric index within the bounds of the bucket array.

## Collision resolution
Collisions occur when two different keys get the same index. There are many techniques to resolve collisions.
1. **Separate chaining:** Each bucket contains a list of key-value pairs. If a collision happens, a new pair is added to the bucket list.
2. **Open addressing:**
   - **Linear probing:** If a bucket is busy, the next empty bucket is used.
   - **Quadratic probing:** The distance between two buckets grows quadratically.
   - **Double hashing:** Uses a second hash function to calculate a new index when a collision happens.

## Time complexity
1. `Insertion`, `search`, and `deletion`: The average time for these operations is `O(1)`, but can be `O(n)` in the worst case, depending on collision handling and the distribution of keys.
2. **Space:** The space is `O(n + m)`, where `n` is the number of keys and `m` is the number of buckets.

## Advantages and disadvantages
### Advantages
- Quick access to the data.
- Simple implementation.
- Flexible and efficient for large volumes of data.

### Disadvantages
- Performance can degrade significantly with many collisions.
- The use of open addressing can cause clustering.
- A well-designed hash function is required to ensure efficiency.

## Practical applications for hash tables include
- Databases.
- File systems.
- Compilers and Interpreters.
- Caching storage.
- Authentication and security.
- Algorithms and data structures.
- Big data processing.
- Network (DNS).


## CustomHashTable Class

**Definition:** `CustomHashTable` is a class representing a hash table with custom hash function and collision resolution using Robin Hood hashing.

### Constructor

**Parameters:**
- `size` (optional): The size of the hash table (default is 30).

**Description:** Initializes a new instance of the `CustomHashTable` class with an array of specified size, where each element represents a bucket storing key-value pairs.

### Methods

1. `hash(key)`
   - **Parameters:** `key` - The key to be hashed.
   - **Return:** A hashed index within the bounds of the bucket array.
   - **Description:** Custom hash function that converts a key into a numeric index.

2. `insert(key, value)`
   - **Parameters:** 
     - `key` - The key to be inserted.
     - `value` - The value associated with the key.
   - **Description:** Inserts a key-value pair into the hash table using Robin Hood hashing for collision resolution.

3. `get(key)`
   - **Parameters:** `key` - The key to search for.
   - **Return:** The value associated with the key if found, otherwise `null`.
   - **Description:** Retrieves the value associated with a given key from the hash table.

4. `delete(key)`
   - **Parameters:** `key` - The key to be deleted.
   - **Description:** Removes a key-value pair from the hash table.
5. `iterate()`
    - **Description:** Returns all key-value pairs in the bucket

### Example Usage

```javascript
const CustomHashTable = require('./classes/CustomHashTable')

// Create a hash table instance
const users = new CustomHashTable();

// Insertion of user data
users.insert('edson.exe', { name: 'Edson Aurelio', age: '32', userName: 'edson.exe' })
users.insert('maria123', { name: 'Maria Silva', age: '28', userName: 'maria123' });
// More insertions...

// Retrieve and delete data
console.log(users.get('edson.exe'))
users.delete('maria123')
console.log(users.get('maria123')) // returns null

// Output
{ name: 'Edson Aurelio', age: '32', userName: 'edson.exe'} )
null
```

## Example Implementations

### DNS Cache
```javascript
const dnsCache = new CustomHashTable()
dnsCache.insert('www.google.com', '172.217.16.196');
// More insertions...
console.table(
  dnsCache.iterate()
);

// Output
┌─────────┬─────────────────────────┬──────────────────┐
│ (index) │           key           │      value       │
├─────────┼─────────────────────────┼──────────────────┤
│    0    │     'www.solvd.com'     │  '76.76.21.123'  │
│    1    │    'www.reddit.com'     │ '151.101.1.140'  │
│    2    │    'www.google.com'     │ '172.217.16.196' │
│    3    │ 'developer.mozilla.org' │  '37.111.97.67'  │
└─────────┴─────────────────────────┴──────────────────┘
```

### Database Query Cache
```javascript
const queryCache = new CustomHashTable();
// Insert a complex query and its result
queryCache.insert(complexQuery, queryResult)
console.table(queryCache.get(complexQuery))

// Output
┌─────────┬────┬───────────┬──────────┬──────────┬──────────────┐
│ (index) │ id │   name    │ order_id │   item   │  order_date  │
├─────────┼────┼───────────┼──────────┼──────────┼──────────────┤
│    0    │ 1  │  'Alice'  │   101    │ 'Laptop' │ '2024-05-20' │
│    1    │ 2  │   'Bob'   │   103    │ 'Tablet' │ '2024-05-18' │
│    2    │ 3  │ 'Charlie' │   104    │ 'Camera' │ '2024-05-19' │
└─────────┴────┴───────────┴──────────┴──────────┴──────────────┘
```

### File System
```javascript
const fileSystem = new CustomHashTable()
// Insert file metadata
fileSystem.insert('/home/user/shopping_list.txt', { 
  size: '15KB', 
  type: 'text', 
  created: '2024-05-01', 
  owner: 'user', 
  permissions: 'rw-r--r--', 
  lastModified: '2024-05-10 08:30:15' 
});
console.table(fileSystem.get('/home/user/shopping_list.txt'))

// Output
┌──────────────┬───────────────────────┐
│   (index)    │        Values         │
├──────────────┼───────────────────────┤
│     size     │        '15KB'         │
│     type     │        'text'         │
│   created    │     '2024-05-01'      │
│    owner     │        'user'         │
│ permissions  │      'rw-r--r--'      │
│ lastModified │ '2024-05-10 08:30:15' │
└──────────────┴───────────────────────┘
```