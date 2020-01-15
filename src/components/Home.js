import React from "react";
import Chance from "chance";

import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from "@progress/kendo-react-layout";

const chance = new Chance();

const people = [];
for (let i = 0; i < 100; i++) {
  people.push({
    name: chance.name(),
    address: chance.address(),
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
            <p>🏠 { person.address }</p>
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
