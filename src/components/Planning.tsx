import * as React from 'react';
import { Gantt, GanttMonthView, GanttWeekView, GanttYearView } from '@progress/kendo-react-gantt';

const columns = [
  { field: 'id', title: 'ID', width: 70, expandable: true },
  { field: 'title', title: 'Title', width: 200 },
  { field: 'start', title: 'Start', width: 120, format: '{0:MM/dd/yyyy}'},
  { field: 'end', title: 'End', width: 120, format: '{0:MM/dd/yyyy}'}
];

export const taskData = [
  {
    id: 1,
    title: 'Initial Planning',
    start: new Date('2020-10-01T00:00:00.000Z'),
    end: new Date('2020-10-31T00:00:00.000Z'),
    percentComplete: 0.1,
    isExpanded: true,

    children: [
      {
        id: 2,
        title: 'Create Planning Documents',
        start: new Date('2020-10-01T00:00:00.000Z'),
        end: new Date('2020-10-04T00:00:00.000Z'),
        percentComplete: 0.25,
      },
      {
        id: 3,
        title: 'Review Documents With Management',
        start: new Date('2020-10-04T00:00:00.000Z'),
        end: new Date('2020-10-07T00:00:00.000Z'),
        percentComplete: 0,
      }
    ]
  }
];

const dependencyData = [
  {
    id: 1,
    fromId: 2,
    toId: 3,
    type: 'FS'
  }
];

export default function Planning() {
  return (
    <>
      <Gantt
        columns={columns}
        taskData={taskData}
        dependencyData={dependencyData}
        navigatable={true}
      >
        <GanttWeekView />
        <GanttMonthView />
        <GanttYearView />
      </Gantt>
    </>
  );
};
