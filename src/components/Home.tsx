import React from 'react';
import { Icon } from '@progress/kendo-react-common';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';

import Avatar from 'avataaars';
import { generateEmptyPeople, generateRandomPeople, Person } from '../data/people';
import { Skeleton } from '@progress/kendo-react-indicators';

export default function Home() {
  const [allPeople, setAllPeople] = React.useState<Person[]>(generateEmptyPeople(100));

  React.useEffect(() => {
    setTimeout(() => {
      setAllPeople(generateRandomPeople(100));
    }, 2000);
  }, []);

  return (
    <>
      <div className="card-container">
        {allPeople.map((person, index) => (
          <Card key={index}>
            <CardHeader>
              {person.name ?
                <span>{person.name}</span> :
                <Skeleton shape="text" />
              }
            </CardHeader >
            <CardBody>
              {person.name ?
                <Avatar
                  avatarStyle="Circle"
                  {...person.avatar}
                /> : 
                <Skeleton shape="circle" />
              }
              {person.name ?
                <ul>
                  <li><Icon name="user" />{person.title}</li>
                  <li><Icon name="email" />{person.email}</li>
                  <li><Icon name="globe" />{person.location}</li>
                </ul> :
                <Skeleton shape="rectangle" />
              }
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

