function order_product(catalog, product2, quantity) {
  const product = catalog[product2];

  if (catalog.product2.quantity < quantity) {
    console.log(`Insufficient quantity for ${product.name}`);
    return;
  }

  // Decrease the product's quantity by the ordered amount
  catalog.product1.quantity -= quantity;

  // Increase the product's orders by the ordered amount
  catalog.product1.orders += quantity;

  console.log(`Order placed for ${quantity} ${catalog.product2.name}(s)`);
}

module.exports = order_product;
