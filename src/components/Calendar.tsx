import React from 'react';
import { guid } from '@progress/kendo-react-common';
import {
  DayView,
  MonthView,
  Scheduler,
  SchedulerDataChangeEvent,
  SchedulerForm,
  useSchedulerFieldsContext,
} from '@progress/kendo-react-scheduler';

import { getRandomEvents } from '../data/events';

export default function Calendar() {
  const [events, setEvents] = React.useState(getRandomEvents());
  const today = new Date();

  const handleDataChange = (props: SchedulerDataChangeEvent) => {
    const { created, deleted, updated } = props;
    setEvents(old => old
      .filter((item) => deleted.find(current => current.id === item.id) === undefined)
      .map((item) => updated.find(current => current.id === item.id) || item)
      .concat(created.map((item) => Object.assign({}, item, { id: guid() }))))
  }

  return (
    <Scheduler
      data={events}
      onDataChange={handleDataChange}
      editable={true}
      defaultDate={today}
    >
      <DayView />
      <MonthView />
    </Scheduler>
  );
};
