/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Splash from './splash/Splash';
import Add from './Add/Add';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Home',
      isLoggedIn: true,
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: true,
    });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Home') {
      return <Add />;
    }
    if (view === 'Add') {
      return <Add />;
    }
    return (<div>end of return</div>);
  }

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      return (
        <div>
          <Splash />
        </div>
      );
    }
    return (
      <div className="overall-container">
        <div className="nav-bar">
          {/* <span className="Home" onClick={() => this.changeView('Home')}>
            INSERT LANDING PAGE
          </span> */}
          {/* <span className="Add" onClick={() => this.changeView('Add')}>
            <Add />
          </span> */}
          {/* <span className="Search" onClick={() => this.changeView('Search')}>
            INSERT Search PAGE
          </span>
          <span className="Profile" onClick={() => this.changeView('Profile')}>
            INSERT Profile PAGE
          </span> */}
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
