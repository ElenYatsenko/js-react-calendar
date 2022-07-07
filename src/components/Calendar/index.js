import React, { Component } from "react";
import { add, format, getWeeksInMonth } from "date-fns";
import { sub } from "date-fns/esm";
import * as calendar from "./calendar";
import styles from "./Calendar.module.scss";

const DaysOfWeek = () => {
  return (
    <span className={styles["seven-of-line"]}>
      <span>s</span>
      <span>m</span>
      <span>t</span>
      <span>w</span>
      <span>t</span>
      <span>f</span>
      <span>s</span>
    </span>
  );
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  handlerBtnPrev = (options) => {
    const { date } = this.state;
    const newDate = sub(date, options);
    this.setState({ date: newDate });
  };
  handlerBtnNext = (options) => {
    const { date } = this.state;
    const newDate = add(date, options);
    this.setState({ date: newDate });
  };

  render() {
    const { date } = this.state;
    const mounthData = calendar.getMouthData(date);
    return (
      <div>
        <header>
          <h2>{format(date, "MMMM yyyy")}</h2>
          <button onClick={() => this.handlerBtnPrev({ months: 1 })}>
            &lt;
          </button>
          <button onClick={() => this.handlerBtnNext({ months: 1 })}>
            &gt;
          </button>
        </header>
        <div>
          <div>
            <DaysOfWeek />
          </div>
          <div className={styles["seven-of-line"]}>
            {mounthData.map((week, index) => (
              <span key={index}>{format(week, "dd")}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
