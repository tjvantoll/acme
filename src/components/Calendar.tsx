import React from "react";
import { ToolbarItem, ToolbarSpacer, ToolbarSeparator } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  DayView,
  MonthView,
  Scheduler,
  SchedulerFooter,
  SchedulerHeader,
  SchedulerFooterProps,
} from '@progress/kendo-react-scheduler';

import { getRandomEvents } from "../data/events";

export default function Calendar() {
  const randomEvents = getRandomEvents();
  const today = new Date();

  return (
    <Scheduler
      data={randomEvents}
      defaultDate={today}
      timezone="Etc/UTC"
    >
      <DayView />
      <MonthView />
    </Scheduler>
  );
};
