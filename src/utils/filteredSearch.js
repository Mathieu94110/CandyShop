export function filteredSearch(products, params) {
  const { bag, batch, category, price } = params;

  // initialize empty array forEach params
  let filteredBag = [];
  let filteredBatch = [];
  let filteredCategory = [];
  let filteredPrice = [];

  // adding data from initial productList corresponding to params on their initialized array

  products.map((product) => {
    if (bag.length && product.bag) {
      for (let i = 0; i < bag.length; i++) {
        for (let j = 0; j < product.bag.length; j++) {
          if (
            bag[i] === product.bag[j].quantity &&
            !filteredBag.some((e) => e.id === product.id)
          ) {
            filteredBag.push(product);
          }
        }
      }
    }
    if (batch.length && product.batch) {
      for (let i = 0; i < batch.length; i++) {
        for (let j = 0; j < product.batch.length; j++) {
          if (
            batch[i] === product.batch[j].quantity &&
            !filteredBatch.some((e) => e.id === product.id)
          ) {
            filteredBatch.push(product);
          }
        }
      }
    }
    if (category.length) {
      for (let i = 0; i < category.length; i++) {
        if (
          category[i] === product.category &&
          !filteredCategory.some((e) => e.id === product.id)
        ) {
          filteredCategory.push(product);
        }
      }
    }
    if (price["min price"] !== null || price["max price"]) {
      if (price["min price"] !== null && !price["max price"]) {
        if (product.price >= price["min price"]) {
          filteredPrice.push(product);
        }
      } else if (!price["min price"] && price["max price"]) {
        if (product.price <= price["max price"]) {
          filteredPrice.push(product);
        }
      } else {
        if (
          product.price >= price["min price"] &&
          product.price <= price["max price"]
        ) {
          filteredPrice.push(product);
        }
      }
    }
  });

  const fileredArrays = [
    filteredBag,
    filteredBatch,
    filteredCategory,
    filteredPrice,
  ].filter((a) => a.length);

  const map = new Map();

  // we fill the map collection with count +1 if same id property is present on fileredArrays
  for (let o of fileredArrays.flat()) {
    map.has(o.id)
      ? (map.get(o.id).count += 1)
      : map.set(o.id, { ...o, count: 1 });
  }
  const result = [];
  // on each previous categories array object are uniques, now only values with count property equal
  // to filteredArrays length are valids (respect condition for all previous separated arrays)
  for (let [, obj] of map) {
    const { count, ...rest } = obj;
    if (count === fileredArrays.length) result.push(rest);
  }
  return result;
}
