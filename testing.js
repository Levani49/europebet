const fs = require("fs");

// create an array of products
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.99 },
  { id: 3, name: "Product 3", price: 20.99 },
];

// convert the products array to a string
const productsString = JSON.stringify(products);

// write the string to a file
fs.writeFile("products.json", productsString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Products saved to file");
});

// import the save_product function from your ecommerce.js file
const save_product = require("./ecommerce.js").save_product;

// create a new product
const newProduct = { id: 4, name: "Product 4", price: 25.99 };

// call the save_product function
save_product(newProduct, "products.json");

// read the contents of the file
fs.readFile("products.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // parse the JSON data into an array
  const products = JSON.parse(data);
  // output the array to the console
  console.log(products);
});
