import React from "react";
import { format, getDate } from "date-fns";
import styles from "./CalendarToday.module.scss";

const CalendarToday = (props) => {
  const currentdate = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.week}>{format(currentdate, "EEEE")}</div>
      <div className={styles.day}>{getDate(currentdate)}</div>
    </div>
  );
};

export default CalendarToday;
