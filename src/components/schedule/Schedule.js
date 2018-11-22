import React from "react";
import Calendar from "./Calendar.jsx";
import "./Schedule.css";
import { Card } from "mdbreact";

class Schedule extends React.Component {
  render() {
    return (
      <Card className="Schedule">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              KBL<b>일정</b>
            </span>
          </div>
        </header>
        <Card>
          <Calendar />
        </Card>
      </Card>
    );
  }
}

export default Schedule;
