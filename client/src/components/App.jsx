import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default App;
