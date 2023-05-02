function save_product(catalog, product2, product_name, price) {
  if (catalog[product2]) {
    console.log(`Product ${product2} already exists in catalog`);
  } else {
    console.log(`Adding product ${product2} to catalog`);
  }

  // Save product to the catalog
  catalog[product2] = {
    name: product_name,
    price: Number(price),
    quantity: 0,
    orders: [],
  };

  console.log(`Product ${product2} is stored.`);
}

module.exports = save_product;
