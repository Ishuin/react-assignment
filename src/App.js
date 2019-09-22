import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'kumar'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <UserInput
          changed = {this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="xyz" />
        <UserOutput userName="abc" />
      </div>
    );
  }
};

export default App;
