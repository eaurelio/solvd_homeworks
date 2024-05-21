class CustomHashTable {
  constructor(size = 20) {
    this.size = size;
    this.buckets = Array(this.size).fill(null).map(() => ({ key: null, value: null, displacement: null }));
    this.count = 0; 
    this.loadFactor = 0.7; //Load factor to trigger relocation
  }

  // hash function
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  // Re-hash all elements
  // This function will be called when the load factor was excedeed
  resize() {
    console.log('resize was been finished')
    const oldBuckets = this.buckets;
    this.size = this.size * 2; // size will be doubled
    this.buckets = Array(this.size).fill(null).map(() => ({ key: null, value: null, displacement: null }));
    this.count = 0;

    for (let i = 0; i < oldBuckets.length; i++) {
      if (oldBuckets[i].key !== null) {
        this.insert(oldBuckets[i].key, oldBuckets[i].value); // Reinserting elements into new bucket
      }
    }
  }

  // Insertion with Robin Hood hashing and dynamic relocation
  insert(key, value) {
    if (this.count / this.size > this.loadFactor) {
      this.resize(); // Realocate if load factor id excedeed
    }

    let index = this.hash(key);
    let displacement = 0;

    while (this.buckets[index].key !== null && displacement <= this.buckets[index].displacement) {
      const tempKey = this.buckets[index].key;
      const tempValue = this.buckets[index].value;
      const tempDisplacement = this.buckets[index].displacement;

      this.buckets[index].key = key;
      this.buckets[index].value = value;
      this.buckets[index].displacement = displacement;

      key = tempKey;
      value = tempValue;
      displacement = tempDisplacement + 1;

      index = (index + 1) % this.size;
    }

    this.buckets[index].key = key;
    this.buckets[index].value = value;
    this.buckets[index].displacement = displacement;
    this.count++;
  }

  // Recovering data
  get(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.size; i++) {
      const currentIndex = (index + i) % this.size;
      if (this.buckets[currentIndex].key === key) {
        return this.buckets[currentIndex].value;
      }
    }
    return null; // Returns null if key wasn't found
  }

  // Deleting data
  delete(key) {
    const index = this.hash(key);
    for (let i = 0; i < this.size; i++) {
      const currentIndex = (index + i) % this.size;
      if (this.buckets[currentIndex].key === key) {
        this.buckets[currentIndex].key = null;
        this.buckets[currentIndex].value = null;
        this.buckets[currentIndex].displacement = null;
        this.count--;
        return;
      }
    }
  }

  // Iterate method
  iterate() {
    const result = [];
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i].key !== null) {
        result.push({ key: this.buckets[i].key, value: this.buckets[i].value });
      }
    }
    return result;
  }
}

module.exports = CustomHashTable;