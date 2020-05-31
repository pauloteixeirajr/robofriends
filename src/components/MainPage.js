import React from 'react';
import './MainPage.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots(robots, search) {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  render() {
    const { search, onSearchChange, robots } = this.props;
    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filterRobots(robots, search)} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
