// TASK 1 - Immutability and Pure Functions

const products = [
  { name: "Milk", price: 2.5 },
  { name: "Bread", price: 1.0 },
  { name: "Eggs", price: 3.0 },
  { name: "Apples", price: 2.0 },
  { name: "Bananas", price: 1.5 },
  { name: "Yogurt", price: 1.8 },
  { name: "Cereal", price: 3.5 },
  { name: "Cheese", price: 4.0 },
  { name: "Tomatoes", price: 2.2 },
  { name: "Potatoes", price: 1.2 },
  { name: "Chicken", price: 5.0 },
  { name: "Rice", price: 3.0 },
  { name: "Pasta", price: 2.5 },
  { name: "Carrots", price: 1.8 },
  { name: "Onions", price: 1.0 },
  { name: "Salmon", price: 8.0 },
  { name: "Spinach", price: 2.3 },
  { name: "Oranges", price: 2.0 },
  { name: "Avocado", price: 3.5 },
  { name: "Coffee", price: 4.5 },
  { name: "Tea", price: 3.0 },
];

function calculateDiscountedPrice(products, percentage) {
  const productsWithDiscount = products.map((product) => ({
    ...product,
    priceWithDiscount: parseFloat((product.price - (product.price * (percentage / 100))).toFixed(2)),
  }));
  return productsWithDiscount;
}

console.table(calculateDiscountedPrice(products, 50));

// ---------------------------------------------------------------------------

function calculateTotalPrice(products) {
  const totalAmount = products.reduce(
    (acc, product) => ({
      total: acc.total + product.price,
    }),
    { total: 0 }
  );
  return totalAmount.total.toFixed(2);
}

console.log(`Total price: ${calculateTotalPrice(products)}`);