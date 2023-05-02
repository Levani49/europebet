const readline = require("readline");
const _ = require("lodash");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let catalog = {
  product1: {
    name: "iPhone",
    price: 1000,
    quantity: 10,
    orders: [],
    balance: 0,
  },
  product2: {
    name: "Samsung Galaxy",
    price: 800,
    quantity: 8,
    orders: [],
    balance: 0,
  },
  product3: {
    name: "Google Pixel",
    price: 700,
    quantity: 6,
    orders: [],
    balance: 0,
  },
};

const saveProduct = require("./functions/save_product");
const purchaseProduct = require("./functions/purchase_product");
const orderProduct = require("./functions/order_product");
const getQuantityOfProduct = require("./functions/get_quantity_of_product");
const getAveragePrice = require("./functions/get_average_price");
const getProductProfit = require("./functions/get_product_profit");
const getFewestProduct = require("./functions/get_fewest_product");
const getMostPopularProduct = require("./functions/get_most_popular_product");
const exitFunction = require("./functions/exit");

saveProduct(catalog, "product2", "Iphone", 12000);
purchaseProduct(catalog, "product2", 5, 9.99);
orderProduct(catalog, "product2", 3, 1200);
getQuantityOfProduct(catalog, "product2");
getAveragePrice(catalog, "product2");
getProductProfit(catalog, "product2");
getFewestProduct(catalog);
getMostPopularProduct(catalog);
console.log(catalog);

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
