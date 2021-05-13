import React from 'react';
import { guid } from '@progress/kendo-react-common';
import {
  DayView,
  MonthView,
  Scheduler,
  SchedulerDataChangeEvent,
  SchedulerForm,
  useSchedulerFieldsContext,
  WorkWeekView,
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

  const FormWithCustomEditor = (props) => {
    const fields = useSchedulerFieldsContext();

    const titleLengthValidator = React.useCallback(
      (title) => {
        return (!title || title.length < 40)
          ? 'The title should be at least 40 characters.'
          : undefined
      }, []
    );

    const endValidator = React.useCallback(
      (end) => {
        return (end.getHours() > 17)
          ? 'Let people leave before 5:00!'
          : undefined
      }, []
    );

    const customValidator = React.useCallback(
      (_dataItem, formValueGetter) => {
        let result = {};

        result[fields.title] = [
          titleLengthValidator(formValueGetter(fields.title))
        ].filter(Boolean).reduce((current, acc) => current || acc, '');

        result[fields.end] = [
          endValidator(formValueGetter(fields.end))
        ].filter(Boolean).reduce((current, acc) => current || acc, '');

        return result;
      },
      [fields, titleLengthValidator, endValidator]
    )

    return (
      <SchedulerForm
        {...props}
        validator={customValidator} />
    );
  }

  return (
    <Scheduler
      data={events}
      onDataChange={handleDataChange}
      editable={true}
      defaultDate={today}
      form={FormWithCustomEditor}
    >
      <DayView />
      <MonthView />
      <WorkWeekView />
    </Scheduler>
  );
};
