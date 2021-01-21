import Chance from 'chance';
import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';

const chance = new Chance();

type Person = {
  name: string;
  title: string;
  email: string;
  rating: number;
}

const people: Array<Person> = [];
for (let i = 0; i < 100; i++) {
  people.push({
    name: chance.name(),
    title: chance.profession(),
    email: chance.email(),
    rating: Math.ceil(Math.random() * 5),
  });
}
export default function Home() {

  interface CustomItemProps {
    person: Person;
  }
  const CustomItem = ({ person }: CustomItemProps) => {
    return (
      <div className="custom-tile">
        <h3>{person.name}</h3>
        <p>👤 {person.title}</p>
        <p>✉️ {person.email}</p>
      </div>
    )
  }

  const tiles: TileLayoutItem[] = people.map((person, index) => {
    return {
      body: <p>{person.name}</p>,
      header: person.title,
      defaultPosition: {
        col: (index % 3) + 1,
        row: (Math.floor(index / 3))
      },
      item: <CustomItem person={person} />
    }
  });

  return (
    <>
      <div>
        <TileLayout
          columns={3}
          items={tiles} />
      </div>
    </>
  );
}

