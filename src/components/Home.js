import React from "react";
import Chance from "chance";

import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from "@progress/kendo-react-layout";

const chance = new Chance();

const people = [];
for (let i = 0; i < 100; i++) {
  people.push({
    name: chance.name(),
    title: chance.profession(),
    email: chance.email(),
  });
}

export default function Home() {
  return (
    <ul>
      {people.map((person, index) => (
        <ul>
          <li>{person.name}</li>
          <ul>
            <li>{person.title}</li>
            <li>{person.email}</li>
          </ul>
        </ul>
      ))}
    </ul>
  );
}
