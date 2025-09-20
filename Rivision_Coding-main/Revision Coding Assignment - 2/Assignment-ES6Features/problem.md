Requirements
Create an array of product objects like:

const products = [
  { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Phone", price: 40000, category: "Electronics" }
];
Using array destructuring, extract the first two products into separate variables.

Create a function addProduct that takes name, price, and category as arguments and uses default parameters to assign default values if any argument is missing. This function should return a new product object and add it to the array using the spread operator.

Create a function getProductsByCategory using the rest parameter to accept multiple category names and return all products matching those categories.

Use template literals to print a formatted summary of all products in the console:

Product: Laptop | Price: 60000 | Category: Electronics
At the end of the program:

Add one new product.
Filter products by category using your function.
Print the full updated product list.