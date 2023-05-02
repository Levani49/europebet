function get_most_popular_product(catalog) {
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

module.exports = get_most_popular_product;
