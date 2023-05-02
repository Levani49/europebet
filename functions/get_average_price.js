function get_average_price(catalog, product2) {
  const product = catalog[product2];
  if (!product) {
    console.log(`Product ${product2} not found`);
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

module.exports = get_average_price;
