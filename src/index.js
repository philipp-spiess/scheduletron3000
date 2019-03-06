import { NameList, sendAnalyticsPing } from "./helpers";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Description from "./Description";

import {
  unstable_LowPriority,
  unstable_next,
  unstable_runWithPriority,
  unstable_scheduleCallback
} from "scheduler";

import "./styles.css";

// Change the flag below to enable Concurrent React and Scheduler improvements
// as layed out in https://philippspiess.com/scheduling-in-react
export const CONCURRENT_AND_SCHEDULED = true;

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
        <Header>ScheduleTron 3000</Header>
        <SearchBox onChange={this.handleChange} />
        <NameList searchValue={searchValue} />
        <Description />
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

    if (CONCURRENT_AND_SCHEDULED) {
      this.setState({ inputValue: value });

      unstable_next(function() {
        onChange(value);
      });

      unstable_runWithPriority(unstable_LowPriority, function() {
        unstable_scheduleCallback(function() {
          sendAnalyticsPing(value);
        });
      });
    } else {
      this.setState({ inputValue: value });
      onChange(value);
      sendAnalyticsPing(value);
    }
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
const Wrapper = ReactDOM.render(
  CONCURRENT_AND_SCHEDULED ? (
    <React.unstable_ConcurrentMode>
      <App />
    </React.unstable_ConcurrentMode>
  ) : (
    <App />
  ),
  rootElement
);
