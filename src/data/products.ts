import Chance from 'chance';

export function getRandomProducts() {
  const chance = new Chance();
  const products: Array<any> = [];
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  for (var i = 0; i < 200; i++) {
    var price = chance.integer({ min: 10, max: 10000 });

    products.push({
      name: chance.capitalize(`${chance.first()} ${chance.animal()}`),
      price: formatter.format(price),
      lastOrder: chance.date({ year: 2019 }),
      inStock: chance.bool() ? "Yes" : "No"
    });
  }

  return products;
}
