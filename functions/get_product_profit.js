function get_product_profit(catalog, product2) {
  if (!(product2 in catalog)) {
    console.log(`Product ${product2} not found in catalog.`);
    return;
  }

  const product = catalog[product2];
  const profit = product.orders.reduce((total, order) => {
    return total + (order.price - product.price) * order.quantity;
  }, 0);

  console.log(`Total profit for ${product.name}: $${profit.toFixed(2)}`);
}

module.exports = get_product_profit;
