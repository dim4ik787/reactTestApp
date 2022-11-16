import React, { Component } from "react";
import CardList from "./cardList";
import SearchBox from "./SearchBox";
import './app.css';
import Scroll from "./scroll";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const robots = this.state.robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={robots} />
        </Scroll>
      </div>
    );
  };
}

export default App;