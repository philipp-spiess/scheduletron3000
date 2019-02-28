import { NameList, sendAnalyticsPing } from "./helpers";
import React from "react";
import ReactDOM from "react-dom";

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

    this.setState({ inputValue: value });
    this.props.onChange(value);
    sendAnalyticsPing(value);
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
ReactDOM.render(<App />, rootElement);
