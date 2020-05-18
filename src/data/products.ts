import Chance from "chance";

export function getRandomProducts() {
  const chance = new Chance();
  const products: Array<any> = [];
  for (var i = 0; i < 200; i++) {
    products.push({
      name: chance.capitalize(`${chance.first()} ${chance.animal()}`),
      price: chance.integer({ min: 10, max: 10000 }),
      lastOrder: chance.date({ year: 2019 }),
      inStock: chance.bool() ? "Yes" : "No"
    });
  }

  return products;
}