function get_fewest_product(catalog) {
  let fewestProduct = null;
  let fewestQuantity = Infinity;

  for (const [productId, productInfo] of Object.entries(catalog)) {
    if (productInfo.remainingQuantity < fewestQuantity) {
      fewestProduct = productInfo.name;
      fewestQuantity = productInfo.remainingQuantity;
    }
  }

  console.log(
    `The product with the fewest remaining quantity is ${fewestProduct}`
  );
}

module.exports = get_fewest_product;
