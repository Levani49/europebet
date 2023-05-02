function get_quantity_of_product(catalog, product2) {
  if (!catalog[product2]) {
    console.log(`Product ${product2} not found.`);
  } else {
    console.log(
      `Remaining quantity of ${catalog[product2].name}: ${catalog[product2].quantity}`
    );
  }
}

module.exports = get_quantity_of_product;
