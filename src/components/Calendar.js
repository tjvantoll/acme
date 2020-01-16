import React from "react";
import {
  Scheduler,
  DayView,
  MonthView,
  SchedulerItem
} from '@progress/kendo-react-scheduler';
import Chance from "chance";

const chance = new Chance();
const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const data = [];

for (let i = 0; i < 5; i++) {
  const startHourInt = chance.integer({ min: 8, max: 16});
  const endHourInt = startHourInt + 1;
  const startHour = ("0" + startHourInt).slice(-2);
  const endHour = ("0" + endHourInt).slice(-2);

  data.push({
    id: 0,
    title: chance.company(),
    start: new Date(`${year}-${month}-${day}T${startHour}:00:00.000Z`),
    end: new Date(`${year}-${month}-${day}T${endHour}:00:00.000Z`),
  });
}

const CustomItem = (props) => (
  <SchedulerItem
    {...props}
    style={{ ...props.style }}
  />
);


export default function Calendar() {
  return (
    <Scheduler
      data={data}
      defaultDate={today}
      timezone="Etc/UTC"
      item={CustomItem}
    >
      <DayView />
      <MonthView />
    </Scheduler>
  );
};
