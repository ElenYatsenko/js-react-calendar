import React from "react";
import { format, isSameMonth } from "date-fns";
import * as calendar from "../../../utils/calendar.js";
import styles from "./CalendarMouth.module.scss";

const DaysOfWeek = () => {
  return (
    <div className={styles["seven-of-line"]}>
      <span>s</span>
      <span>m</span>
      <span>t</span>
      <span>w</span>
      <span>t</span>
      <span>f</span>
      <span>s</span>
    </div>
  );
};

const CalendarMonth = (props) => {
  const { date } = props;
  const mounthData = calendar.getMouthData(date);
  return (
    <div>
      <DaysOfWeek />
      <div className={styles["seven-of-line"]}>
        {mounthData.map((day, index) => (
          <span
            className={
              isSameMonth(date, day)
                ? styles["current-days"]
                : styles["prev-next-days"]
            }
            key={index}
          >
            {format(day, "dd")}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonth;
