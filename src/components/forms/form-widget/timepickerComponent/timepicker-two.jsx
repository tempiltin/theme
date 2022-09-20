import React, { Component } from "react";
import TimeKeeper from "react-timekeeper";

class TimePickerTwo extends Component {
  state = { time: "02:24 am", show: true };
  setTime = time => {
    this.setState({ time: time });
  };
  render() {
    return (
      <div className="App app-dark">
        {this.state.show && (
          <TimeKeeper
            time={this.state.time}
            onChange={data => this.setTime(data.formatted12)}
            switchToMinuteOnHourSelect
            closeOnMinuteSelect
            coarseMinutes={15}
            onDoneClick={() => { }}
          />
        )}
      </div>
    );
  }
}
export default TimePickerTwo;
