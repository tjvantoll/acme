import React from 'react';
import { ListBox, ListBoxToolbar, processListBoxData } from '@progress/kendo-react-listbox';
import { ListBoxItemClickEvent, ListBoxToolbarClickEvent } from '@progress/kendo-react-listbox/dist/npm/interfaces/ListBoxEvents';

import { generateRandomPeople } from '../data/people';

export default function Team() {
  const [team1, setTeam1] = React.useState(generateRandomPeople(20));
  const [team2, setTeam2] = React.useState(generateRandomPeople(20));

  const handleItemClick = (event: ListBoxItemClickEvent) => {
    const updatedTeam1 = [...team1];
    const updatedTeam2 = [...team2];
    const updatedName = event.dataItem.name;

    [...updatedTeam1, ...updatedTeam2].map(item => {
      if (item.name === updatedName) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return item;
    });

    setTeam1(updatedTeam1);
    setTeam2(updatedTeam2);
  }

  const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
    const result = processListBoxData(team1, team2, e.toolName || '', "selected");
    console.log(result);
    setTeam1(result.listBoxOneData);
    setTeam2(result.listBoxTwoData);
  }

  return (
    <>
      <div className="two-columns">

        <div>
          <h2>Team 1</h2>
          <ListBox
            style={{ height: "600px", width: "300px" }}
            data={team1}
            textField="name"
            selectedField="selected"
            onItemClick={e => { handleItemClick(e) }}
            toolbar={() => {
              return (
                <ListBoxToolbar
                  tools={['transferTo', 'transferFrom', 'moveUp', 'moveDown']}
                  data={team1}
                  dataConnected={team2}
                  onToolClick={handleToolBarClick}
                />
              );
            }}
          />
        </div>
        <div>
          <h2>Team 2</h2>
          <ListBox
            style={{ height: "600px", width: "300px" }}
            data={team2}
            textField="name"
            selectedField="selected"
            onItemClick={e => { handleItemClick(e) }}
          />
        </div>
      </div>
    </>
  );
}
