import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Icon } from '@progress/kendo-react-common';
import { CircularGauge } from '@progress/kendo-react-gauges';
import { Skeleton } from '@progress/kendo-react-indicators';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { savePDF } from "@progress/kendo-react-pdf";
import Avatar from 'avataaars';

import { generateEmptyPeople, generateRandomPeople, Person } from '../data/people';
import Render from './Render';

export default function Home() {
  const cardContainer = React.useRef<HTMLDivElement>(null);
  const [allPeople, setAllPeople] = React.useState<Person[]>(generateEmptyPeople(20));

  React.useEffect(() => {
    setTimeout(() => {
      setAllPeople(generateRandomPeople(20));
    }, 2000);
  }, []);


  const exportPDF = () => {
    let element = cardContainer.current || document.body;
    savePDF(element, {
      imageResolution: 200
    })
  }

  return (
    <>
      <div className="actions">
        <Button icon="file-pdf" onClick={exportPDF} primary={true}>Export as PDF</Button>
      </div>

      <div className="card-container" ref={cardContainer}>
        {allPeople.map((person, index) => (
          <Card key={index}>
            <Render if={person.name === ''}>
              <CardHeader>
                <Skeleton shape="text" />
              </CardHeader>
              <CardBody>
                <Skeleton shape="circle" />
                <Skeleton shape="rectangle" />
                <Skeleton shape="circle" />
              </CardBody>
            </Render>
            <Render if={person.name !== ''}>
              <CardHeader>
                <span>{person.name}</span>
                </CardHeader>
              <CardBody>
                <Avatar
                  avatarStyle="Circle"
                  {...person.avatar}
                />
                <ul>
                  <li><Icon name="user" />{person.title}</li>
                  <li><Icon name="email" />{person.email}</li>
                  <li><Icon name="globe" />{person.location}</li>
                </ul>
                <CircularGauge
                  value={person.rating}
                  colors={[
                    { from: 0, to: 25, color: 'red' },
                    { from: 25, to: 50, color: 'orange' },
                    { from: 50, to: 75, color: 'lightgreen' },
                    { from: 75, to: 100, color: 'green' },
                  ]}
                  centerRender={(value, color) => (
                    <h3 style={{ color: color }}>{value}%</h3>
                  )}
                  style={{ height: 100, width: 100 }} />
              </CardBody>
            </Render>
          </Card>
        ))}
      </div>
    </>
  );
}

