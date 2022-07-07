import React from "react";
import { format, isSameMonth, isToday } from "date-fns";
import * as calendar from "../../../utils/calendar.js";
import styles from "./CalendarMouth.module.scss";

const DaysOfWeek = () => {
  return (
    <div className={styles["seven-of-line"]}>
      <span className={styles["name-of-week"]}>s</span>
      <span className={styles["name-of-week"]}>m</span>
      <span className={styles["name-of-week"]}>t</span>
      <span className={styles["name-of-week"]}>w</span>
      <span className={styles["name-of-week"]}>t</span>
      <span className={styles["name-of-week"]}>f</span>
      <span className={styles["name-of-week"]}>s</span>
    </div>
  );
};

const CalendarMonth = (props) => {
  const { date } = props;
  console.log(date);
  const mounthData = calendar.getMouthData(date);
  return (
    <div className={styles.wrapper}>
      <DaysOfWeek />
      <div className={styles["seven-of-line"]}>
        {mounthData.map((day, index) => (
          <span
            className={`
              ${
                isSameMonth(date, day)
                  ? styles["current-days"]
                  : styles["prev-next-days"]
              }
                ${isToday(day) ? styles["isToday"] : styles[""]}
                ${console.log(isToday(day))}
            `}
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
