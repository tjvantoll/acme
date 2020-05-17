import React from "react";
import Chance from "chance";
import { ListView, ListViewHeader, ListViewFooter } from "@progress/kendo-react-listview";
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

const CustomHeader = () => {
  return (
    <ListViewHeader>
      Employees
    </ListViewHeader>
  )
}

const CustomItem = (props: any) => {
  const person = props.dataItem;
  return (
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
  )
}

export default function Home() {
  return (
    <ListView
      data={people}
      item={CustomItem}
      header={CustomHeader}>
    </ListView>
  );
}
