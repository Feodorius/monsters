import './App.css';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList
          monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(resp => this.setState({ monsters: resp }));
  }
}

export default App;
