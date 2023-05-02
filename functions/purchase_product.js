function purchase_product(catalog, product2, quantity, price) {
  if (!catalog[product2]) {
    console.log(`Product ${product2} does not exist in the catalog.`);
    return;
  }

  // Check if the product has enough quantity to fulfill the order
  if (catalog[product2].quantity < quantity) {
    console.log(`Insufficient quantity for ${catalog[product2].name}`);
    return;
  }

  const cost = quantity * price;

  if (catalog[product2].balance < cost) {
    console.log(
      `You do not have enough balance to purchase ${quantity} units of product ${catalog.product2.name}.`
    );
    return;
  }

  // Make the purchase
  const product = catalog[product2];
  if (!product.orders) {
    product.orders = [];
  }
  catalog[product2].quantity -= quantity;
  catalog[product2].balance += cost;
  catalog[product2].orders.push({ quantity: quantity, price: price });

  console.log(
    `Purchased ${quantity} units of product ${product2} for ${cost}.`
  );
}

module.exports = purchase_product;
