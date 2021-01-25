import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { Icon } from '@progress/kendo-react-common';

import { Person, generateRandomPeople } from '../data/people';

const shareActions = [
  { icon: 'facebook', text: 'Facebook' },
  { icon: 'twitter', text: 'Twitter' },
]

export default function Home() {
  const people = generateRandomPeople(100);

  interface CustomItemProps {
    person: Person;
  }
  const CustomItem = ({ person }: CustomItemProps) => {
    return (
      <div className="custom-tile">
        <h3>{person.name}</h3>
        <p><Icon name="user" themeColor="primary" />{person.title}</p>
        <p><Icon name="pencil" themeColor="info" />{person.email}</p>
      </div>
    )
  }

  const tiles: TileLayoutItem[] = people.map((person, index) => {
    return {
      body: <p>{person.name}</p>,
      header: person.title,
      defaultPosition: {
        col: (index % 3) + 1,
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
        <FloatingActionButton
          icon={'share'}
          onClick={() => { }}
          items={shareActions}
          popupSettings={{ popupClass: 'share-popup' }}
        />
      </div>
    </>
  );
}

