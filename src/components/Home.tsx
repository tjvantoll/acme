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

  return (
    <>
      <div className="cards">
        {people.map(person => (
          <div className="custom-tile">
            <h3>{person.name}</h3>
            <p>{person.title}</p>
            <p>{person.location}</p>
            <p>{person.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

