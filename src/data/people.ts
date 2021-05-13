import Chance from 'chance';
import { generateRandomAvatar } from './avatar';

const chance = new Chance();

export type Person = {
  name: string;
  avatar: Object;
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

export function generateEmptyPeople(numberOfPeople: Number) {
  const people: Array<Person> = [];
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      name: '',
      avatar: {},
      title: '',
      email: '',
      rating: 0,
      selected: false,
      location: ''
    });
  }
  return people;
}

export function generateRandomPeople(numberOfPeople: Number) {
  const people: Array<Person> = [];
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      name: chance.name(),
      avatar: generateRandomAvatar(),
      title: chance.profession(),
      email: chance.email(),
      rating: chance.integer({ min: 1, max: 100 }),
      selected: false,
      location: locations[Math.floor(Math.random() * locations.length)],
    });
  }
  return people.sort((a, b) => {
    return a.rating > b.rating ? -1 : 1;
  });
}

