import Chance from 'chance';

const chance = new Chance();

export type Person = {
  name: string;
  title: string;
  email: string;
  rating: number;
  selected: boolean;
  location: string;
}

export const locationTree = [
  {
    text: 'United States',
    id: 1,
    items: [
      { text: 'Boston', id: 2 },
      { text: 'Detroit', id: 3 },
      { text: 'New York', id: 4 }
    ]
  },
  {
    text: 'Europe',
    id: 5,
    items: [
      { text: 'London', id: 6 },
      { text: 'Amsterdam', id: 7 },
      { text: 'Sofia', id: 8 }
    ]
  }
];
const locations = ['Boston', 'Detroit', 'New York',
  'London', 'Amsterdam', 'Sofia'];

export function generateRandomPeople(numberOfPeople: Number) {
  const people: Array<Person> = [];
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      name: chance.name(),
      title: chance.profession(),
      email: chance.email(),
      rating: Math.ceil(Math.random() * 5),
      selected: false,
      location: locations[Math.floor(Math.random() * locations.length)],
    });
  }
  return people;
}

