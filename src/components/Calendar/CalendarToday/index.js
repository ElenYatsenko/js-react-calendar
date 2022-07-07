import React from "react";
import { format, getDate } from "date-fns";

const CalendarToday = (props) => {
  const { date } = props;
  return (
    <div>
      <div>{format(date, "EEEE")}</div>
      <div>{getDate(date)}</div>
    </div>
  );
};

export default CalendarToday;
