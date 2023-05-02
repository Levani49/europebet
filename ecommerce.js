const readline = require("readline");
const _ = require("lodash");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let catalog = {
  product_id: {
    name: "Iphone",
    price: 9.99,
    quantity: 10,
    orders: 0,
  },
};

function save_product(product_id, product_name, price) {
  // Check if product already exists in catalog
  if (catalog[product_id]) {
    console.log(`Product ${product_id} already exists in catalog`);
  } else {
    console.log(`Adding product ${product_id} to catalog`);
  }

  // Save product to the catalog
  catalog[product_id] = {
    name: product_name,
    price: Number(price),
    quantity: 0,
    orders: [],
  };

  console.log(`Product ${product_id} saved.`);
}

function purchase_product(product_id, quantity, price) {
  // Check if the product exists in the catalog
  if (!catalog[product_id]) {
    console.log(`Product ${product_id} does not exist in the catalog.`);
    return;
  }

  // Check if the product has enough quantity to fulfill the order
  if (catalog[product_id].quantity < quantity) {
    console.log(`Insufficient quantity for ${catalog[product_id].name}`);
    return;
  }

  // Calculate the cost of the purchase
  const cost = quantity * price;

  // Check if the customer has enough balance to make the purchase
  if (catalog[product_id].balance < cost) {
    console.log(
      `You do not have enough balance to purchase ${quantity} units of product ${product_id}.`
    );
    return;
  }

  // Update the product's quantity, balance, and add the purchase to its history
  catalog[product_id].quantity -= quantity;
  catalog[product_id].balance -= cost;
  catalog[product_id].orders.push({ quantity: quantity, price: price });

  console.log(
    `Purchased ${quantity} units of product ${product_id} for ${cost}.`
  );
}

function order_product(product_id, quantity) {
  // Find the product in the catalog
  const product = catalog[product_id];

  // Check if there is enough quantity to fulfill the order
  if (product.quantity < quantity) {
    console.log(`Insufficient quantity for ${product.name}`);
    return;
  }

  // Decrease the product's quantity by the ordered amount
  product.quantity -= quantity;

  // Increase the product's orders by the ordered amount
  product.orders += quantity;

  console.log(`Order placed for ${quantity} ${product.name}(s)`);
}

function get_quantity_of_product(product_id) {
  if (!catalog[product_id]) {
    console.log(`Product ${product_id} not found.`);
  } else {
    console.log(
      `Remaining quantity of ${catalog[product_id].name}: ${catalog[product_id].quantity}`
    );
  }
}

function get_average_price(product_id) {
  const product = catalog[product_id];
  if (!product) {
    console.log(`Product ${product_id} not found`);
    return;
  }

  const numOrders = product.numOrders;
  if (numOrders === 0) {
    console.log(`No orders have been placed for ${product.name}`);
    return;
  }

  const totalPrice = product.price * numOrders;
  const averagePrice = totalPrice / numOrders;
  console.log(`The average price for ${product.name} is ${averagePrice}`);
}

function get_product_profit(product_id) {
  if (!(product_id in catalog)) {
    console.log(`Product ${product_id} not found in catalog.`);
    return;
  }

  const product = catalog[product_id];
  const profit = product.orders.reduce((total, order) => {
    return total + (order.price - product.price) * order.quantity;
  }, 0);

  console.log(`Total profit for ${product.name}: $${profit.toFixed(2)}`);
}

function get_fewest_product() {
  let fewestProduct = null;
  let fewestQuantity = Infinity;

  // Loop through each product in the catalog
  for (const [productId, productInfo] of Object.entries(catalog)) {
    // If the product has a lower remaining quantity than the current fewest product, update the fewest product
    if (productInfo.remainingQuantity < fewestQuantity) {
      fewestProduct = productInfo.name;
      fewestQuantity = productInfo.remainingQuantity;
    }
  }

  console.log(
    `The product with the fewest remaining quantity is ${fewestProduct}`
  );
}

function get_most_popular_product() {
  let mostPopularProduct = null;
  let maxOrders = 0;
  for (const product of Object.values(catalog)) {
    if (product.orders > maxOrders) {
      mostPopularProduct = product.name;
      maxOrders = product.orders;
    }
  }
  console.log(`Most popular product: ${mostPopularProduct}`);
  return mostPopularProduct;
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
