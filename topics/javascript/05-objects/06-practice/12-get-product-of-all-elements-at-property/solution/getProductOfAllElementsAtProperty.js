function getProductOfAllElementsAtProperty(obj, key) {
  let product = 0;
  const array = obj[key];

  // if (array instanceof Array) {
  if (Array.isArray(array) && (array.length > 0)) {
    product = array[0];

    for (let i = 1; i < array.length; i++) product *= array[i];
  }

  return product;
}

module.exports = getProductOfAllElementsAtProperty;
