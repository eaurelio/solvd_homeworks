const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5
}

Object.defineProperty(product, "price", {
  enumerable: false,
  writable: false
})

Object.defineProperty(product, "quantity", {
  enumerable: false,
  writable: false
})

function getTotalPrice(product) {
  const prodPrice = Object.getOwnPropertyDescriptor(product, 'price')
  const prodQuantity = Object.getOwnPropertyDescriptor(product, 'quantity')
  return prodPrice.value * prodQuantity.value
}

function deleteNonConfigurable(object, propertyName){
  const property = Object.getOwnPropertyDescriptor(object, propertyName)
  if(!property || !property.configurable) {
    throw new Error("Property doesn't exist or non-configuable")
  } else{
    delete object[propertyName]
  }
}

// Testing
Object.defineProperty(product, "name", {
  configurable: false
})

console.log(product)
deleteNonConfigurable(product, 'name')
// deleteNonConfigurable(product, 'namee')
console.log(product)