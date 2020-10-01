import React from "react";
import Chance from "chance";
import { ChipList, ButtonGroup, Button, ChipListChangeEvent } from "@progress/kendo-react-buttons";
import { Rating } from "@progress/kendo-react-inputs";
import { Card, CardHeader, CardBody, CardActions } from "@progress/kendo-react-layout";
import Render from "../components/Render";

const chance = new Chance();

const people: Array<any> = [];
for (let i = 0; i < 100; i++) {
  people.push({
    name: chance.name(),
    title: chance.profession(),
    email: chance.email(),
    rating: Math.ceil(Math.random() * 5),
  });
}

const filters = [
  { text: "⭐", value: 1 },
  { text: "⭐⭐", value: 2 },
  { text: "⭐⭐⭐", value: 3 },
  { text: "⭐⭐⭐⭐", value: 4 },
  { text: "⭐⭐⭐⭐⭐", value: 5 },
]

export default function Home() {
  const [activeFilters, setActiveFilters] = React.useState<Array<number>>([1, 2, 3, 4, 5]);

  const filterData = (data: ChipListChangeEvent) => {
    setActiveFilters(data.value);
  }

  return (
    <>
      <div className="filter-container">
        <span>Filter:</span>
        <ChipList
          selection="multiple"
          defaultData={filters}
          defaultValue={activeFilters}
          onChange={filterData}
        />
      </div>
      <div className="cards">
        {people.map(person => (
          <Render if={activeFilters.includes(person.rating)} key={person.name}>
            <Card>
              <CardHeader>
                {person.name}
              </CardHeader>
              <CardBody>
                <p>👤 {person.title}</p>
                <p>✉️ {person.email}</p>
                <Rating defaultValue={person.rating} disabled={true} />
              </CardBody>
              <CardActions>
                <span className="k-button k-flat k-primary">Message</span>
                <span className="k-button k-flat k-primary">Email</span>
              </CardActions>
            </Card>
          </Render>
        ))}
      </div>
    </>
  );
}

