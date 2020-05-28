import React from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import robots from './robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots,
      search: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
