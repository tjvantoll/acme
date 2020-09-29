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
  });
}

export default function Home() {
  return (
    <>
      <div className="cards">
        {people.map(person => (
          <Card>
            <CardHeader>
              {person.name}
            </CardHeader>
            <CardBody>
              <p>👤 {person.title}</p>
              <p>✉️ {person.email}</p>
            </CardBody>
            <CardActions>
              <span className="k-button k-flat k-primary">Message</span>
              <span className="k-button k-flat k-primary">Email</span>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
