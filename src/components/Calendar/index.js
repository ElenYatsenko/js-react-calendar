import React, { Component } from "react";
import { add, format } from "date-fns";
import { sub } from "date-fns/esm";
import CalendarMonth from "./CalendarMonth";
import CalendarToday from "./CalendarToday";
import styles from "./Calendar.module.scss";

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
    return (
      <div className={styles["container-calendar"]}>
        <CalendarToday />
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
          <CalendarMonth date={date} />
        </div>
      </div>
    );
  }
}

export default Calendar;
