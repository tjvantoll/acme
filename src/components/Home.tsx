import React from "react";
import Chance from "chance";

import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from "@progress/kendo-react-layout";

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
    <div className="k-card-deck">
      {people.map((person, index) => (
        <Card key={index}>
          <CardHeader>
            { person.name }
          </CardHeader>
          <CardBody>
            <p>👤 { person.title }</p>
            <p>✉️ { person.email }</p>
          </CardBody>
          <CardActions layout="end">
            <span className="k-button k-flat k-primary">Message</span>
            <span className="k-button k-flat k-primary">Email</span>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
