import React from "react";
import { format, getDate } from "date-fns";

const CalendarToday = (props) => {
  const currentdate = new Date();
  return (
    <div>
      <div>{format(currentdate, "EEEE")}</div>
      <div>{getDate(currentdate)}</div>
    </div>
  );
};

export default CalendarToday;
