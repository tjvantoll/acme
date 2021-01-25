import {
  DayView,
  MonthView,
  Scheduler,
} from '@progress/kendo-react-scheduler';

import { getRandomEvents } from '../data/events';

export default function Calendar() {
  const randomEvents = getRandomEvents();
  const today = new Date();

  return (
    <Scheduler
      data={randomEvents}
      defaultDate={today}
    >
      <DayView />
      <MonthView />
    </Scheduler>
  );
};
