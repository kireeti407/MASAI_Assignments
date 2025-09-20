let products = [
  { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Phone", price: 40000, category: "Electronics" }
];
// Using array destructuring, extract the first two products into separate variables. 
let [first,second] = [...products]
console.log(first)
console.log(second)

// Create a function addProduct that takes name, price, and category as arguments and
// uses default parameters to assign default values if any argument is missing.
// This function should return a new product object and add it to the array using the spread operator.
function addProduct(name="Tab",price=8000,category="Electronics"){
  let newId = products[products.length-1]?.id+1
  let newProduct = {name,price,category,id:newId}
  products = [...products,newProduct]
  return products
}
addProduct() 
addProduct("Bike",40000,"Vehicles")
console.log(products)
// Create a function getProductsByCategory using the rest parameter to 
// accept multiple category names and return all products matching those categories.

function getProductsByCategory(...names){
  return products.filter((product)=>names.includes(product.category))
}
console.log(getProductsByCategory("Electronics"))

// Use template literals to print a formatted summary of all products in the console: 
// Product: Laptop | Price: 60000 | Category: Electronics
for(let product of products){
  console.log(`Product: ${product.name} | Price: ${product.price} | Category: ${product.category}`)
}

