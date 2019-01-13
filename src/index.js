import { NamePlates, names } from "./utils";
import React from "react";
import ReactDOM from "react-dom";

import {
  unstable_runWithPriority,
  unstable_scheduleCallback,
  unstable_ImmediatePriority,
  unstable_NormalPriority
} from "scheduler";

import "./styles.css";

class App extends React.Component {
  state = {
    filterValue: ""
  };

  handleChange = value => {
    this.setState({ filterValue: value });
  };

  render() {
    const { filterValue } = this.state;

    return (
      <div className="App">
        <h1>ScheduleTron 3000</h1>

        <FilterBox onChange={this.handleChange} />
        <NamePlates names={names} filterValue={filterValue} />
      </div>
    );
  }
}

class FilterBox extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const value = event.target.value;

    this.setState({ inputValue: value });
    this.props.onChange(value);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="clearfix">
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={this.handleChange}
          placeholder="Filter"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.render(<App />, rootElement);



















/*















unstable_runWithPriority(unstable_ImmediatePriority, () => {
  unstable_scheduleCallback(() => {
    this.setState({ inputValue: value });
  });
});

unstable_runWithPriority(unstable_NormalPriority, () => {
  unstable_scheduleCallback(() => {
    this.props.onChange(value);
  });
});



const root = ReactDOM.render(
  <React.unstable_ConcurrentMode>
    <App />
  </React.unstable_ConcurrentMode>,
  rootElement
);




*/
