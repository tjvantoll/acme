import Chance from 'chance';

const chance = new Chance();

export type Person = {
  name: string;
  title: string;
  email: string;
  rating: number;
  selected: boolean;
}

export function generateRandomPeople(numberOfPeople: Number) {
  const people: Array<Person> = [];
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      name: chance.name(),
      title: chance.profession(),
      email: chance.email(),
      rating: Math.ceil(Math.random() * 5),
      selected: false,
    });
  }
  return people;
}

