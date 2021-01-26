import React from 'react';
import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { Icon } from '@progress/kendo-react-common';
import { DropDownTree } from '@progress/kendo-react-dropdowns';

import { Person, generateRandomPeople, locationTree } from '../data/people';
import { processTreeData, expandedState } from '../data/tree-data-operations';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const shareActions = [
  { icon: 'facebook', text: 'Facebook' },
  { icon: 'twitter', text: 'Twitter' },
];

const allPeople = generateRandomPeople(100);

export default function Home() {
  const [people, setPeople] = React.useState(allPeople);
  const [filterValue, setFilterValue] = React.useState(null);
  const [expanded, setExpanded] = React.useState([locationTree[0][dataItemKey]]);

  interface CustomItemProps {
    person: Person;
  }
  const CustomItem = ({ person }: CustomItemProps) => {
    return (
      <div className="custom-tile">
        <h3>{person.name}</h3>
        <p><Icon name="user" themeColor="primary" />{person.title}</p>
        <p><Icon name="globe" themeColor="success" />{person.location}</p>
        <p><Icon name="pencil" themeColor="info" />{person.email}</p>
      </div>
    )
  }

  const treeData = React.useMemo(
    () => processTreeData(locationTree, { expanded, filterValue }, fields),
    [expanded, filterValue]
  );

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

  const onChange = (event) => {
    setFilterValue(event.value);
    const filteredPeople = allPeople.filter(person => {
      if (!event.value) {
        return true;
      }
      return person.location === event.value.text;
    });
    setPeople([...filteredPeople]);
  }
  const onExpandChange = React.useCallback(
    event => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );

  return (
    <>
      <div>
        <div className="filter">
          <DropDownTree
            data={treeData}
            value={filterValue}
            onChange={onChange}
            placeholder="Select ..."
            textField={textField}
            dataItemKey={dataItemKey}
            selectField={selectField}
            expandField={expandField}
            onExpandChange={onExpandChange}
            label="Filter by location"
          />
        </div>
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

