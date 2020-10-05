import React, { Component } from 'react';
import Index from './HomePage/Index';
import Search from './search/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Home',
      isLoggedIn: false,
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Home') {
      return <Index />;
    }
    return (<div>Hello</div>);
  }

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      return (
        <div>
          <Search />
        </div>
      );
    }
    return (
      <div className="overall-container">
        <div className="nav-bar">
          <span className="Home" onClick={() => this.changeView('Home')}>
            INSERT LANDING PAGE
          </span>
          <span className="Add" onClick={() => this.changeView('Add')}>
            INSERT Add PAGE
          </span>
          <span className="Search" onClick={() => this.changeView('Search')}>
            INSERT Search PAGE
          </span>
          <span className="Profile" onClick={() => this.changeView('Profile')}>
            INSERT Profile PAGE
          </span>
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
