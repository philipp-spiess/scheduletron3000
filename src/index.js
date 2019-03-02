import { NameList, sendAnalyticsPing } from "./helpers";
import React from "react";
import ReactDOM from "react-dom";

import {
  unstable_LowPriority,
  unstable_next,
  unstable_runWithPriority,
  unstable_scheduleCallback,
} from "scheduler";

import "./styles.css";

class App extends React.Component {
  state = {
    searchValue: ""
  };

  handleChange = value => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="App">
        <h1>ScheduleTron 3000</h1>

        <SearchBox onChange={this.handleChange} />
        <NameList searchValue={searchValue} />
      </div>
    );
  }
}

class SearchBox extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const value = event.target.value;
    const onChange = this.props.onChange;

    this.setState({ inputValue: value });

    unstable_next(function() {
      onChange(value);
    });

    unstable_runWithPriority(unstable_LowPriority, function () {
      unstable_scheduleCallback(function () {
        sendAnalyticsPing(value);
      })
    })
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
          placeholder="Filter 🔍"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.unstable_ConcurrentMode>
    <App />
  </React.unstable_ConcurrentMode>,
  rootElement
);
