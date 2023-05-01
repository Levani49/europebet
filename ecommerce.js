const readline = require("readline");
const _ = require("lodash");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let catalog = {};

function save_product(product_id, product_name, price) {
  //Here We Add or modify a product in the catalog
}

function purchase_product(product_id, quantity, price) {
  //With this function We Purchase a product and increase its balance
}

function order_product(product_id, quantity) {
  // Place an order for a product and decrease its balance
}

function get_quantity_of_product(product_id) {
  //Here We Return the remaining quantity of a product
}

function get_average_price(product_id) {
  // Calculate and display the average price of a product
}

function get_product_profit(product_id) {
  // Calculate and display the profit earned from a product
}

function get_fewest_product() {
  // Return the name of the product with the lowest remaining quantity
}

function get_most_popular_product() {
  // Return the name of the product with the highest number of orders
}

function exit() {
  rl.close();
}

function processCommand(command) {
  const tokens = command.split(" ");

  if (tokens[0] === "save_product") {
    save_product(tokens[1], tokens[2], tokens[3]);
  } else if (tokens[0] === "purchase_product") {
    purchase_product(tokens[1], tokens[2], tokens[3]);
  } else if (tokens[0] === "order_product") {
    order_product(tokens[1], tokens[2]);
  } else if (tokens[0] === "get_quantity_of_product") {
    get_quantity_of_product(tokens[1]);
  } else if (tokens[0] === "get_average_price") {
    get_average_price(tokens[1]);
  } else if (tokens[0] === "get_product_profit") {
    get_product_profit(tokens[1]);
  } else if (tokens[0] === "get_fewest_product") {
    get_fewest_product();
  } else if (tokens[0] === "get_most_popular_product") {
    get_most_popular_product();
  } else if (tokens[0] === "exit") {
    exit();
  } else {
    console.log(`Invalid command: ${tokens[0]}`);
  }
}

rl.setPrompt("> ");
rl.prompt();
rl.on("line", (input) => {
  processCommand(input.trim());
  rl.prompt();
});
